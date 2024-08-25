import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NotFoundPage from "./pages/all/NotFoundPage.jsx";
import ErrorPage from "./pages/all/ErrorPage.jsx";
import { GlobalProvider } from "./context/GlobalContext.jsx";
import AuthPage from "./pages/all/AuthPage.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import AccountPage from "./pages/all/AccountPage.jsx";
import RequireAuth from "./components/RequireAuth.jsx";
import UnauthorizedPage from "./pages/all/UnauthorizedPage.jsx";
import { useEffect } from "react";
import AboutPage from "./pages/all/AboutPage.jsx";
import ContactPage from "./pages/all/ContactPage.jsx";
import MaterialPage from "./pages/all/MaterialPage.jsx";
import ForumPage from "./pages/all/ForumPage.jsx";
import PostPage from "./pages/all/PostPage.jsx";
import PersonalizedPage from "./pages/all/PersonalizedPage.jsx";
import PrintOrderPage from "./pages/all/PrintOrderPage.jsx";
import ProductsPage from "./pages/all/ProductsPage.jsx";
import CartPage from "./pages/all/CartPage.jsx";
import ProductPage from "./pages/all/ProductPage.jsx";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        {/* Admin page route */}
        <Route path={"admin"} element={<RequireAuth allowedRoles={"ADMIN"} />}>
          <Route index element={<NotFoundPage />} />
        </Route>

        {/* Index page route */}
        <Route index element={<AboutPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="material" element={<MaterialPage />} />
        <Route path="forum">
          <Route index element={<ForumPage />} />
          <Route path=":id" element={<PostPage />} />
        </Route>
        <Route path="personalized" element={<PersonalizedPage />} />
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

        {/* Auth route */}
        <Route path="auth" element={<AuthPage />} />

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
        <ChakraProvider theme={theme}>
          <RouterProvider router={router} />
        </ChakraProvider>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
