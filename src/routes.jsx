import {
    createBrowserRouter
    } from "react-router-dom";
import Auth from "./Screen/auth";
import CheckStatus from "./Screen/check status";
import Collection from "./Screen/collection";
import Home from "./Screen/home";
import Location from "./Screen/location";
import Otp from "./Screen/otp";
import Personal from "./Screen/personal information";
import Register from "./Screen/register";
import Success from "./Screen/success";
import VerifyEmail from "./Screen/verify-email";
import Verify from "./Screen/verify-identity";

  export const Routes = createBrowserRouter([
    {
      path: '/',
      element: <Register />
    },
    {
      path: '/verify-identity',
      element: <Verify />
    },
    {
      path: '/otp',
      element: <Otp />
    },
    {
      path: '/personal information',
      element: <Personal />
    },
    {
      path: '/location',
      element: <Location />
    },
    {
      path: '/success',
      element: <Success />
    },
    {
      path: '/check status',
      element: <CheckStatus/>
    },
    {
      path: '/verify-email',
      element: <VerifyEmail/>
    },
    {
      path: '/collection',
      element: <Collection/>
    },
    {
        path: '/home',
        element: <Home />
    },
    {
      path: '/auth',
      element: <Auth />
    }
  ])