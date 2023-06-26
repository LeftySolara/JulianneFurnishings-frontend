import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { HomePage } from "@pages/Home/HomePage";
import { ErrorPage } from "@pages/Error/ErrorPage";
import { SignupPage } from "@pages/Signup/SignupPage";
import { signupAction } from "@pages/Signup/signupAction";

const homeRoute = (
  <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />
);

const signupRoute = (
  <Route
    path="signup"
    element={<SignupPage />}
    errorElement={<ErrorPage />}
    action={signupAction}
  />
);

const routes = createRoutesFromElements([homeRoute, signupRoute]);
const router = createBrowserRouter(routes);

export { router };
