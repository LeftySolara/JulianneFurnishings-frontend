import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { HomePage } from "@pages/Home/HomePage";
import { ErrorPage } from "@pages/Error/ErrorPage";
import { SignupPage } from "@pages/Signup/SignupPage";

const homeRoute = (
  <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />
);

const signupRoute = (
  <Route path="signup" element={<SignupPage />} errorElement={<ErrorPage />} />
);

const routes = createRoutesFromElements([homeRoute, signupRoute]);
const router = createBrowserRouter(routes);

export { router };
