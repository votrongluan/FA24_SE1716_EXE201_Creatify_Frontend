import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import { ChakraProvider, extendTheme, useDisclosure } from "@chakra-ui/react";
import NotFoundPage from "./pages/customer/NotFoundPage.jsx";
import ErrorPage from "./pages/customer/ErrorPage.jsx";
import { GlobalProvider } from "./context/GlobalContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import AuthPage from "./pages/customer/AuthPage.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import AccountPage from "./pages/customer/AccountPage.jsx";
import RequireAuth from "./components/RequireAuth.jsx";
import UnauthorizedPage from "./pages/customer/UnauthorizedPage.jsx";
import { useEffect, useState } from "react";
import AboutPage from "./pages/customer/AboutPage.jsx";
import ContactPage from "./pages/customer/ContactPage.jsx";
import MaterialPage from "./pages/customer/MaterialPage.jsx";
import ForumPage from "./pages/customer/ForumPage.jsx";
import PostPage from "./pages/customer/PostPage.jsx";
import PersonalizedPage from "./pages/customer/PersonalizedPage.jsx";
import PrintOrderPage from "./pages/customer/PrintOrderPage.jsx";
import ProductsPage from "./pages/customer/ProductsPage.jsx";
import CartPage from "./pages/customer/CartPage.jsx";
import ProductPage from "./pages/customer/ProductPage.jsx";
import HomePage from "./pages/customer/HomePage.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import ProductManagePage from "./pages/admin/ProductManagePage.jsx";
import OrderManagePage from "./pages/admin/OrderManagePage.jsx";
import PrintManagePage from "./pages/admin/PrintManagePage.jsx";
import DashboardPage from "./pages/admin/DashboardPage.jsx";
import SplineModal from "./pages/customer/SplineModal.jsx";
import MarketingDashboard from "./pages/admin/MarketingDashboard.jsx";
import SupplierLayout from "./layouts/SupplierLayout.jsx";
import AllOrderPage from "./pages/supplier/AllOrderPage.jsx";
import OwnOrderPage from "./pages/supplier/OwnOrderPage.jsx";
import VerifyPage from "./pages/customer/VerifyPage.jsx";
import TestPage from "./pages/TestPage.jsx";
import ScrollToTopAndBottom from "./components/ScrollToTopAndBottom.jsx";
import OrderDetailPage from "./pages/customer/OrderDetailPage.jsx";
import PrintOrderDetailPage from "./pages/customer/PrintOrderDetailPage.jsx";
import SupplierDashboard from "./pages/supplier/SupplierDashboard.jsx";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [splineIsOpen, setSplineIsOpen] = useState(false);

  const theme = extendTheme({
    colors: {
      app_blue: {
        0: "#3A6AFD",
      },
      app_white: {
        0: "#FFFFFF",
      },
      app_black: {
        0: "#00060F",
      },
      app_grey: {
        0: "#40444B",
        1: "#808387",
      },
    },
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* Admin page route */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="product" element={<ProductManagePage />} />
          <Route path="order" element={<OrderManagePage />} />
          <Route path="print" element={<PrintManagePage />} />
        </Route>

        {/* Supplier page route */}
        <Route path="supplier" element={<SupplierLayout />}>
          <Route index element={<SupplierDashboard />} />
          <Route path="dashboard" element={<SupplierDashboard />} />
          <Route path="task" element={<AllOrderPage />} />
          <Route path="own" element={<OwnOrderPage />} />
        </Route>

        <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
          {/* Index page route */}
          <Route index element={<HomePage />} />
          <Route path="test" element={<TestPage />} />

          {/* Auth route */}
          <Route path="auth" element={<AuthPage />} />

          <Route path="about" element={<AboutPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="order">
            <Route path=":id" element={<OrderDetailPage />} />
          </Route>
          <Route path="printorder">
            <Route path=":id" element={<PrintOrderDetailPage />} />
          </Route>
          <Route path="contact" element={<ContactPage />} />
          <Route path="material" element={<MaterialPage />} />
          <Route path="forum">
            <Route index element={<ForumPage />} />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route
            path="personalized"
            element={
              <PersonalizedPage
                onOpen={() => {
                  setSplineIsOpen(true);
                  console.log("ol");
                }}
              />
            }
          />
          <Route path="print" element={<PrintOrderPage />} />
          <Route path="products">
            <Route index element={<ProductsPage />} />
            <Route path=":id" element={<ProductPage />} />
          </Route>
          <Route path="cart" element={<CartPage />} />

          {/* User information route */}
          <Route path="users">
            <Route index element={<NotFoundPage />} />
            <Route path=":id" element={<AccountPage />} />
          </Route>
        </Route>

        {/* Unauthorized route */}
        <Route path="unauthorized" element={<UnauthorizedPage />} />

        {/* Not found route */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return (
    <AuthProvider>
      <GlobalProvider>
        <CartProvider>
          <ChakraProvider theme={theme}>
            <ScrollToTopAndBottom />
            <RouterProvider router={router} />
            <SplineModal
              splineIsOpen={splineIsOpen}
              splineOnClose={() => setSplineIsOpen(false)}
            />
          </ChakraProvider>
        </CartProvider>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
