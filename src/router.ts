import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";

export const URL = {
  HOME: "/",
  SIGN_IN: "/signin",
  SIGN_UP: "/signup",
};

const routes = [
  {
    path: URL.HOME,
    name: "home",
    component: Home,
  },
  {
    path: URL.SIGN_IN,
    name: "signin",
    component: SignIn,
  },
  {
    path: URL.SIGN_UP,
    name: "signup",
    component: SignUp,
  },
];

export default routes;
