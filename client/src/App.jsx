import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  Home,
  Login,
  AdminDash,
  BecomeBeneficiary,
  Donations,
  DonationDetails,
  Payment,
  Profile,
  About,
  Contact,
  PageNotFound,
  Navbar
} from "./components";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/BecomeBeneficiary",
          element: <BecomeBeneficiary />
        },
        {
          path: "/AdminDash",
          element: <AdminDash />
        },
        {
          path: "/Donations",
          element: <Donations />
        },
        {
          path: "/DonationDetails",
          element: <DonationDetails />
        },
        {
          path: "/Payment",
          element: <Payment />
        },
        {
          path: "/Profile",
          element: <Profile />
        },
        {
          path: "/About",
          element: <About />
        },
        {
          path: "/Contact",
          element: <Contact />
        }
      ],
      errorElement: <PageNotFound />
    },
    // Login route outside of the layout with Navbar
    {
      path: "/login",
      element: <Login />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;