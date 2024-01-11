import React from "react";

const SignUp = () => {
  return (
    <div id="soft-signup-form-container" className="h-full w-full font-monday">
      <div className="signup-loader" />
      <div id="soft-signup-form" className="h-full w-full">
        <div
          id="soft-signup-component"
          className="flex h-full w-full justify-center"
        >
          <div id="styles-module-wrapper" className="visible relative">
            <div
              id="mf-platform-signup"
              className="flex h-full w-full items-center justify-center"
            >
              <div>
                <div
                  id="OnCH8"
                  className="grid h-screen w-screen grid-cols-monday"
                >
                  <div
                    id="monday-left-screen"
                    className="flex h-full flex-col items-center bg-white"
                  >
                    <div
                      id="monday-left-items"
                      className="flex flex-[1] flex-col items-center justify-center"
                    >
                      <div id="monday-welcome-wrapper">
                        <div className="flex flex-wrap items-center justify-center">
                          <h1 className="mb-2 mt-0 border border-transparent px-1 py-0 text-center font-poppins text-[32px]/[40px] font-medium -tracking-[0.5px] text-primary-text-color antialiased">
                            Welcome to monday.com
                          </h1>
                        </div>
                        <h2 className="mb-12 mt-0 border border-transparent px-1 py-0 text-center font-poppins text-[16px]/[30px] font-medium -tracking-[0.1px] antialiased">
                          Get started - it&apos;s free. No credit card needed.
                        </h2>
                      </div>
                      <div
                        id="monday-left-buttons-wrapper"
                        className="w-[400px]"
                      >
                        <button
                          type="button"
                          className="inline-flex h-10 w-full min-w-[auto] cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-[4px] border border-ui-border-color px-[var(--spacing-medium)] py-[var(--spacing-small)] font-monday leading-[22px] text-primary-text-color transition-[min-width] hover:bg-[var(--primary-background-hover-color)]

                          "
                        >
                          <img
                            alt="Continue with Google"
                            className="mr-[var(--spacing-small)] w-4"
                            src="https://dapulse-res.cloudinary.com/image/upload/remote_logos/995426/google-icon.svg"
                          />
                          <span>Continue with Google</span>
                        </button>
                        <div className="my-[var(--spacing-medium)] grid w-full grid-cols-even gap-[var(--spacing-small)]">
                          <div className="h-1/2 self-end border-t border-[var(--layout-border-color)]" />
                          Or
                          <div className="h-1/2 self-end border-t border-[var(--layout-border-color)]" />
                        </div>
                        <div
                          id="email-form-container"
                          className="flex flex-col items-center"
                        >
                          <div className="mb-[var(--spacing-medium)] w-full">
                            <div
                              role
                              aria-busy="false"
                              className="relative box-border w-full text-sm"
                            >
                              <div id="input-label" className="w-full">
                                <div
                                  id="input-wrapper"
                                  className="relative h-10 w-full"
                                >
                                  <input
                                    placeholder="name@company.com"
                                    autoComplete="email"
                                    type="email"
                                    data-testid="soft-signup-input-component"
                                    aria-label="name@company.com"
                                    aria-invalid="false"
                                    aria-activedescendant
                                    aria-owns
                                    className="h-full w-full text-ellipsis whitespace-nowrap rounded-[4px] border border-solid border-ui-border-color bg-transparent px-[var(--spacing-medium)] py-[var(--spacing-small)] font-monday text-base text-primary-text-color outline-0 hover:border-primary-text-color focus:border-[var(--primary-color)]"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            aria-disabled="false"
                            aria-busy="false"
                            className="inline-flex h-10 w-full min-w-[auto] select-none items-center justify-center rounded-[4px] border border-ui-border-color bg-[var(--primary-color)] px-[var(--spacing-medium)] py-[var(--spacing-small)] text-base text-[var(--text-color-on-primary)] antialiased transition-[min-width]"
                          >
                            Continue
                          </button>
                        </div>
                        <div
                          data-testid="terms-container"
                          className="mt-[var(--spacing-medium)] flex flex-col items-center"
                        >
                          <div className="flex flex-wrap items-center justify-center text-center">
                            <h5 className="m-0 min-w-0 px-1 py-0">
                              By proceeding, you agree to the
                            </h5>
                          </div>
                          <div className="flex flex-wrap items-center justify-center text-center">
                            <a
                              data-testid="link"
                              rel="noreferrer"
                              href="https://monday.com/l/legal/tos/"
                              target="_blank"
                              className="flex items-center whitespace-nowrap text-base font-normal text-[var(--color-link-color)] decoration-[var(--color-link-color)] hover:underline"
                            >
                              <span>Terms of Service</span>
                            </a>
                            <h5 className="m-0 min-w-0 px-1 py-0">and</h5>
                            <a
                              data-testid="link"
                              href="https://monday.com/l/privacy/privacy-policy."
                              rel="noreferrer"
                              targer="_blank"
                              className="flex items-center whitespace-nowrap text-base font-normal text-[var(--color-link-color)] decoration-[var(--color-link-color)] hover:underline"
                            >
                              <span>Privacy Policy</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="login"
                      className="mb-16 flex flex-col items-center gap-[var(--spacing-small)]"
                    >
                      <div className="flex flex-wrap items-center justify-center">
                        <h5 className="m-0 min-w-0 px-1 py-0">
                          Already have an account?
                        </h5>

                        <a
                          data-testid="link"
                          href="/login"
                          rel="noreferrer"
                          targer="_blank"
                          className="flex items-center whitespace-nowrap text-base font-normal text-[var(--color-link-color)] decoration-[var(--color-link-color)] hover:underline"
                        >
                          <span>Log in</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    id="monday-right-screen"
                    className="bg-[rgb(97, 97, 255)] flex justify-center overflow-hidden"
                  >
                    <img
                      alt="Welcome to monday.com"
                      className="h-full w-[unset] max-w-none"
                      src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
