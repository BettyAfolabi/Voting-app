import {
    createBrowserRouter
    } from "react-router-dom";
import Auth from "./Screen/auth";
import CheckStatus from "./Screen/check status";
import Collection from "./Screen/collection";
import Welcome from "./Screen/welcome";
import Location from "./Screen/location";
import Otp from "./Screen/otp";
import Personal from "./Screen/personal information";
import Register from "./Screen/register";
import Success from "./Screen/success";
import VerifyEmail from "./Screen/verify-email";
import Verify from "./Screen/verify-identity";
import SelectVote from "./Screen/selectvote";
import SelectCandidate from "./Screen/selectCandidate";
import Verification from "./Screen/verification";
import ConfirmCandidate from "./Screen/confirmCandidate";
import CandidateConfirmed from "./Screen/candidateConfirmed";
import Home from "./Screen/home";

  export const Routes = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/register',
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
        path: '/welcome',
        element: <Welcome />
    },
    {
      path: '/auth',
      element: <Auth />
    },
    {
      path: '/selectvote',
      element: <SelectVote />
    },
    {
      path: '/selectCandidate',
      element: <SelectCandidate />
    },
    {
      path: '/verification',
      element: <Verification />
    },
    {
      path: '/confirmCandidate',
      element: <ConfirmCandidate />
    },
    {
      path: '/candidateConfirmed',
      element: <CandidateConfirmed />
    }
  ])