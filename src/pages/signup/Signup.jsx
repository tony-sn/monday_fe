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
                      className='flex items-center justify-center flex-1 flex-col'
                    >
                      <div id='monday-welcome-wrapper'>
                        <div className='flex-wrap flex items-center justify-center'>
                          <h1 className='text-center mt-0 mb-2 -tracking-[0.5px] px-1 py-0 font-medium antialiased text-[32px]/[40px]'>
                            Welcome to monday.com
                          </h1>
                        </div>
                        <h2 className='text-base text-center mb-12 antialiased px-1 py-0 -tracking-[0.1px] font-medium'>
                          Get started - it&apos;s free! No credit card needed.
                        </h2>
                      </div>
                      <div
                        id='monday-left-buttons-wrapper'
                        className='w-[400px]'
                      >
                        <button
                          type='button'
                          className='leading-[22px] font-monday px-[var(--spacing-medium)] py-[var(--spacing-small)] whitespace-nowrap rounded-[4px] inline-flex cursor-pointer items-center justify-center select-none min-w-[auto] h-[40px] w-full border border-ui-border-color text-primary-text-color transition-[min-width]'
                        >
                          <img
                            className='w-4 mr-[var(--spacing-small)]'
                            src='https://dapulse-res.cloudinary.com/image/upload/remote_logos/995426/google-icon.svg'
                          />
                          <span>Continue with Google</span>
                        </button>
                      </div>
                    </div>
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
