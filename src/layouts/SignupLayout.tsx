import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import LoadingScreen from "@components/loadingScreen";

const SignupLayout = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="soft-signup-form-container h-full w-full font-monday">
        <div className="soft-signup-component flex h-full w-full justify-center">
          <div className="soft-signup-form h-full w-full">
            <div className="style-module-wrapper visible relative">
              <div className="mf-platform-signup w-ful flex h-full items-center justify-center">
                <div className="main-page-wrapper">
                  <div
                    id="OnCH8"
                    aria-label="signup-layout-wrapper"
                    className="grid h-screen w-screen grid-cols-monday"
                  >
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default SignupLayout;
