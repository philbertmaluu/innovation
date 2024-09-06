import { Suspense } from "react";
import { Link } from "react-router-dom";

import authBgImg from "@/assets/images/other/auth-bg.jpg";
import logoLight from "@/assets/images/logo-light.png";
import otherAuthImg from "@/assets/images/other/auth-img.jpg";

const AuthLayout = ({ children }) => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat p-2 lg:p-0"
      style={{ backgroundImage: `url("${authBgImg}")` }}
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="flex h-screen w-full items-center justify-center">
        <div className="max-w-4xl overflow-hidden rounded-lg bg-black/60 backdrop-blur-3xl">
          <div className="grid lg:grid-cols-2">
            <div className="hidden py-2.5 ps-2.5 lg:block">
              <div className="relative h-full overflow-hidden rounded-md">
                <div className="absolute inset-0 bg-black/40" />
                <img src={otherAuthImg} className="h-full max-w-full" />
              </div>
            </div>
            <div>
              <div className="p-6 flex h-full flex-col">
                <Link to="/auth/sign-in" className="mb-8 block shrink">
                  <img className="h-8" src={logoLight} alt="images" />
                </Link>

                <Suspense fallback={<div />}>{children}</Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
