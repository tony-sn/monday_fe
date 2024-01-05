import React from 'react';

const SignUp = () => {
  return (
    <div id='soft-signup-form-container' className='font-monday h-full w-full'>
      <div className='signup-loader' />
      <div id='soft-signup-form' className='h-full w-full'>
        <div
          id='soft-signup-component'
          className='h-full w-full flex justify-center'
        >
          <div id='styles-module-wrapper' className='visible relative'>
            <div
              id='mf-platform-signup'
              className='w-full h-full flex justify-center items-center'
            >
              <div>
                <div
                  id='OnCH8'
                  className='h-screen w-screen grid grid-cols-monday'
                >
                  <div
                    id='monday-left-screen'
                    className='flex items-center bg-white flex-col h-full'
                  >
                    <div
                      id='monday-left-items'
                      className='flex items-center justify-center flex-[1] flex-col'
                    >
                      <div id='monday-welcome-wrapper'>
                        <div className='flex-wrap flex items-center justify-center'>
                          <h1 className='text-center border-transparent border text-primary-text-color mt-0 mb-2 font-poppins -tracking-[0.5px] px-1 py-0 font-medium antialiased text-[32px]/[40px]'>
                            Welcome to monday.com
                          </h1>
                        </div>
                        <h2 className='text-[16px]/[30px] font-poppins border border-transparent text-center mt-0 mb-12 antialiased px-1 py-0 -tracking-[0.1px] font-medium'>
                          Get started - it&apos;s free. No credit card needed.
                        </h2>
                      </div>
                      <div
                        id='monday-left-buttons-wrapper'
                        className='w-[400px]'
                      >
                        <button
                          type='button'
                          className='leading-[22px] font-monday px-[var(--spacing-medium)] py-[var(--spacing-small)] whitespace-nowrap rounded-[4px] inline-flex cursor-pointer items-center justify-center select-none min-w-[auto] h-10 w-full border border-ui-border-color text-primary-text-color transition-[min-width] hover:bg-[var(--primary-background-hover-color)]

                          '
                        >
                          <img
                            className='w-4 mr-[var(--spacing-small)]'
                            src='https://dapulse-res.cloudinary.com/image/upload/remote_logos/995426/google-icon.svg'
                          />
                          <span>Continue with Google</span>
                        </button>
                        <div className='grid gap-[var(--spacing-small)] grid-cols-even my-[var(--spacing-medium)] w-full'>
                          <div className='self-end border-t border-[var(--layout-border-color)] h-1/2' />
                          Or
                          <div className='self-end border-t border-[var(--layout-border-color)] h-1/2' />
                        </div>
                        {/* TODO: continue inputs and button here*/}
                        <div
                          id='email-form-container'
                          className='flex flex-col items-center'
                        >
                          <div className='w-full mb-[var(--spacing-medium)]'>
                            <div
                              role
                              aria-busy='false'
                              className='relative box-border text-sm w-full'
                            >
                              <div id='input-label' className='w-full'>
                                <div
                                  id='input-wrapper'
                                  className='w-full h-10 relative'
                                >
                                  <input
                                    placeholder='name@company.com'
                                    autoComplete='email'
                                    type='email'
                                    data-testid='soft-signup-input-component'
                                    aria-label='name@company.com'
                                    aria-invalid='false'
                                    aria-activedescendant
                                    aria-owns
                                    className='w-full h-full outline-0 bg-transparent focus:border-[var(--primary-color)] border-solid border border-ui-border-color rounded-[4px] text-primary-text-color px-[var(--spacing-medium)] py-[var(--spacing-small)] font-monday text-base text-ellipsis whitespace-nowrap'
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            type='button'
                            aria-disabled='false'
                            aria-busy='false'
                            className='w-full text-[var(--text-color-on-primary)] text-base px-[var(--spacing-medium)] py-[var(--spacing-small)] transition-[min-width] bg-[var(--primary-color)] border border-ui-border-color rounded-[4px] h-10 inline-flex items-center select-none justify-center min-w-[auto] antialiased'
                          >
                            Continue
                          </button>
                        </div>
                        <div
                          data-testid='terms-container'
                          className='flex items-center flex-col mt-[var(--spacing-medium)]'
                        >
                          <div className='flex-wrap justify-center flex items-center text-center'>
                            <h5 className='m-0 min-w-0 py-0 px-1'>
                              By proceeding, you agree to the
                            </h5>
                          </div>
                          <div className='flex-wrap justify-center flex items-center text-center'>
                            <a
                              data-testid='link'
                              rel='noreferrer'
                              href='https://monday.com/l/legal/tos/'
                              target='_blank'
                              className='text-[var(--color-link-color)] text-base font-normal hover:underline decoration-[var(--color-link-color)] whitespace-nowrap flex items-center'
                            >
                              <span>Terms of Service</span>
                            </a>
                            <h5 className='m-0 min-w-0 py-0 px-1'>and</h5>
                            <a
                              data-testid='link'
                              href='https://monday.com/l/privacy/privacy-policy.'
                              rel='noreferrer'
                              targer='_blank'
                              className='text-[var(--color-link-color)] text-base font-normal hover:underline decoration-[var(--color-link-color)] whitespace-nowrap flex items-center'
                            >
                              <span>Privacy Policy</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id='login'
                      className='flex items-center flex-col gap-[var(--spacing-small)] mb-16'
                    >
                      <div className='flex items-center flex-wrap justify-center'>
                        <h5 className='m-0 min-w-0 py-0 px-1'>
                          Already have an account?
                        </h5>

                        <a
                          data-testid='link'
                          href='/login'
                          rel='noreferrer'
                          targer='_blank'
                          className='text-[var(--color-link-color)] text-base font-normal hover:underline decoration-[var(--color-link-color)] whitespace-nowrap flex items-center'
                        >
                          <span>Log in</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    id='monday-right-screen'
                    className='bg-[rgb(97, 97, 255)] flex justify-center overflow-hidden'
                  >
                    <img
                      className='h-full w-[unset] max-w-none'
                      src='https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png'
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
