import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios, { appURL } from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

export default function OrderStatusPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { orderId, incrementOrderId } = useContext(GlobalContext);

  const { id } = useParams();
  const payOsOrderId = searchParams.get("orderId"); // Retrieve orderId from the query params
  const isSuccess = searchParams.get("success") === "true"; // Check if payment was successful
  const isCancel = searchParams.get("cancel") === "true"; // Check if payment was canceled

  useEffect(() => {
    const checkPaymentStatus = async () => {
      if (isSuccess) {
        try {
          // Call Payment API to check if the order is "PAID"
          const paymentResponse = await axios.get(
            `/Payment/GetOrder/${orderId}`
          );
          if (paymentResponse.data.status === "PAID") {
            // Update order status to "PAID"
            await axios.put(`/Order/UpdatePayStatus?orderId=${id}`);
            navigate(`/order/${id}?paymentStatus=success`); // Redirect to success page or order details
          }
        } catch (error) {
          console.error("Error checking payment status", error);
        }
      } else if (isCancel) {
        try {
          // Call Payment API to check if the order is "CANCELLED"
          const paymentResponse = await axios.get(
            `/Payment/GetOrder/${payOsOrderId}`
          );
          if (paymentResponse.data.status === "CANCELLED") {
            // Create a new payment request (optional based on your flow)
            const newPaymentData = {
              orderId: orderId.toString(),
              description: `Re-attempting payment for order ${payOsOrderId}`,
              priceTotal: paymentResponse.data.amount,
              returnUrl: `${appURL}/orderstatus/${id}?success=true&orderId=${orderId}`,
              cancelUrl: `${appURL}/orderstatus/${id}?cancel=true&orderId=${orderId}`,
              items: paymentResponse.data.items,
            };

            axios
              .post("/Payment/CreatePayment", newPaymentData, {
                headers: {
                  "Content-Type": "application/json", // Explicitly set the content type
                },
              })
              .then((response) => {
                axios
                  .put(`/Order/UpdatePayOsOrderId?orderId=${id}`, {
                    payOsOrderId: orderId,
                  })
                  .then((response) => {
                    incrementOrderId();
                    navigate(`/order/${id}`);
                  })
                  .catch((error) => {
                    console.error("Error placing order", error);
                  });
              })
              .catch((error) => {
                console.error("Error placing order", error);
              });
          }
        } catch (error) {
          console.error("Error handling canceled payment", error);
        }
      }
    };

    checkPaymentStatus();
  }, [isSuccess, isCancel, payOsOrderId, navigate, orderId, id]);

  return (
    <div>
      <h2>Processing your order...</h2>
    </div>
  );
}
