import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
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
  Navbar,
  Register,
} from "./components";
import MedicalList from "./components/MedicalList/MedicalList "


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
        },
        {
          path: '/MedicalList',
          element: <MedicalList/>
        }
      ],
      errorElement: <PageNotFound />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;