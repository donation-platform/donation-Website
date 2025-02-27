import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
} from "./components";
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <PageNotFound />
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/BecomeBeneficiary',
      element: <BecomeBeneficiary />,
    },
    {
      path: '/AdminDash',
      element: <AdminDash />,
    },
    {
      path: '/Donations',
      element: <Donations />,
    },
    {
      path: '/DonationDetails',
      element: <DonationDetails />,
    },
    {
      path: '/Payment',
      element: <Payment />,
    },
    {
      path: '/Profile',
      element: <Profile />,
    },
    {
      path: '/About',
      element: <About />,
    },
    {
      path: '/Contact',
      element: <Contact />,
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


export default App
