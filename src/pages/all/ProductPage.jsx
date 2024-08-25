import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function ProductPage() {
  return (
    <>
      <Container w="90%" maxW="1400px" pb="100px">
        <Breadcrumb fontSize="16px" separator=">">
          <BreadcrumbItem>
            <RouterLink to="/">
              <BreadcrumbLink>Trang chủ</BreadcrumbLink>
            </RouterLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <RouterLink to="/products">
              <BreadcrumbLink>Tất cả sản phẩm</BreadcrumbLink>
            </RouterLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <RouterLink to="/products/1">
              <BreadcrumbLink>Black goku</BreadcrumbLink>
            </RouterLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>
    </>
  );
}
