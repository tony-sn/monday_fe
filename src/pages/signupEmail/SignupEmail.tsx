const SignUpEmail = () => {
  return (
    <>
      {/* Left Screen Start */}
      <div
        id="monday-left-screen"
        className="relative flex h-full w-full flex-1 flex-col items-center justify-between bg-white px-[calc(2*var(--spacing-xxxl))] py-[var(--spacing-xxxl)]"
      >
        <div className="header w-full flex-1 ">
          <div className="header-component mb-0">
            <div className="logo-wrapper mb-[var(--spacing-xxxl)]">
              <img
                alt="logo"
                src="https://cdn.monday.com/images/logos/logo-full-big.png"
                className="logo-img h-6"
              />
            </div>
          </div>
        </div>
        <div className="content relative mt-0 w-full flex-[8]">
          <div className="title-wrapper mb-[var(--spacing-large)]">
            <h1
              className="overflow-hidden p-0 text-left text-2xl font-medium tracking-[-0.1px] text-[var(--color-mud-black)]"
              aria-label="Create your account"
            >
              Create your account
            </h1>
          </div>
          <div>
            {/* Input 1  component */}
            <div className="signup-input-wrapper mb-0 min-h-[104px] w-[75%] min-w-[400px]">
              <div className="signup-input-component flex-1">
                <div className="textField relatvie box-border w-full text-base">
                  <section className="flex items-center pb-1 text-sm font-normal">
                    <label
                      htmlFor="user[name]"
                      className="text-[var(--primary-text-color)]"
                    >
                      Full name
                    </label>
                  </section>
                  {/* Input */}
                  <div className="inputWrapper_92d1efcfee wrapperSizeLarge_a2aa337521 inputErrorValidation_3b5e83f974">
                    <input
                      className="signup-input relative h-12 w-full rounded-[4px] border border-red-500 px-4 py-2"
                      placeholder="Enter your full name"
                      autoComplete="name"
                      type="text"
                      id="user[name]"
                      data-testid="text-field_user[name]"
                      role
                      aria-label="Full name"
                      aria-owns
                      aria-activedescendant
                      tabIndex={0}
                    />
                    <div
                      data-testid="clickable"
                      tabIndex={-1}
                      role="button"
                      className="clickable_97e9bc50c5 iconContainer_a66c956251 iconContainerActive_3dc7c8dcfb disableTextSelection_c16718f5a7"
                    />
                    <div
                      data-testid="text-field-secondary-button_user[name]"
                      tabIndex={-1}
                      role="button"
                      className="clickable_97e9bc50c5 iconContainer_a66c956251 iconContainerActive_3dc7c8dcfb disableTextSelection_c16718f5a7"
                    />
                  </div>
                  {/* Error Message */}
                  <div className="error-text-wrapper flex">
                    <span className="error-text text-sm font-normal text-red-500">
                      Enter your full name
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Input 2 component */}
            <div className="signup-input-wrapper mb-0 min-h-[104px] w-[75%] min-w-[400px]">
              <div className="signup-input-component flex-1">
                <div className="textField relatvie box-border w-full text-base">
                  <section className="flex items-center pb-1 text-sm font-normal">
                    <label
                      htmlFor="user[name]"
                      className="text-[var(--primary-text-color)]"
                    >
                      Password
                    </label>
                  </section>
                  {/* Input */}
                  <div className="inputWrapper_92d1efcfee wrapperSizeLarge_a2aa337521 inputErrorValidation_3b5e83f974">
                    <input
                      className="signup-input relative h-12 w-full rounded-[4px] border border-[var(--ui-border-color)] px-4 py-2"
                      placeholder="Enter at least 8 characters"
                      autoComplete="password"
                      type="password"
                      id="user[password]"
                      data-testid="text-field_user[password]"
                      role
                      aria-label="Full name"
                      aria-owns
                      aria-activedescendant
                      tabIndex={0}
                      aria-invalid="true"
                    />
                    <div
                      data-testid="clickable"
                      tabIndex={-1}
                      role="button"
                      className="clickable_97e9bc50c5 iconContainer_a66c956251 iconContainerActive_3dc7c8dcfb disableTextSelection_c16718f5a7"
                    />
                    <div
                      data-testid="text-field-secondary-button_user[name]"
                      tabIndex={-1}
                      role="button"
                      className="clickable_97e9bc50c5 iconContainer_a66c956251 iconContainerActive_3dc7c8dcfb disableTextSelection_c16718f5a7"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Input 3 component */}
            <div className="signup-input-wrapper mb-0 min-h-[104px] w-[75%] min-w-[400px]">
              <div className="signup-input-component flex-1">
                <div className="textField relatvie box-border w-full text-base">
                  <section className="flex items-center pb-1 text-sm font-normal">
                    <label
                      htmlFor="user[name]"
                      className="text-[var(--primary-text-color)]"
                    >
                      Account name
                    </label>
                  </section>
                  {/* Input */}
                  <div className="inputWrapper_92d1efcfee wrapperSizeLarge_a2aa337521 inputErrorValidation_3b5e83f974">
                    <input
                      className="signup-input relative h-12 w-full rounded-[4px] border border-[var(--ui-border-color)] px-4 py-2"
                      placeholder="For example, company's or department's name"
                      autoComplete="accountName"
                      type="text"
                      id="user[accountName]"
                      data-testid="text-field_user[accountName]"
                      role
                      aria-label="Full name"
                      aria-owns
                      aria-activedescendant
                      tabIndex={0}
                      aria-invalid="true"
                    />
                    <div
                      data-testid="clickable"
                      tabIndex={-1}
                      role="button"
                      className="clickable_97e9bc50c5 iconContainer_a66c956251 iconContainerActive_3dc7c8dcfb disableTextSelection_c16718f5a7"
                    />
                    <div
                      data-testid="text-field-secondary-button_user[name]"
                      tabIndex={-1}
                      role="button"
                      className="clickable_97e9bc50c5 iconContainer_a66c956251 iconContainerActive_3dc7c8dcfb disableTextSelection_c16718f5a7"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="submit-button-wrapper large-signup-modal sticky bottom-2 right-0 flex w-[calc(100%+2px)] justify-end">
          <div className="account-setup-desktop-questions-submit-button-component large-signup-modal mt-[auto] flex items-center justify-end font-monday">
            <button
              type="button"
              className=" submit-button button_2cc9b456c1 sizeMedium_18a78b4558  kindPrimary_873cf6047e colorPrimary_5d4dbadec9 inline-flex h-10 min-w-[auto] cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-[4px] bg-[var(--primary-color)] px-4 py-2 text-base font-normal text-white antialiased opacity-90 transition-[min-width] hover:bg-[var(--primary-hover-color)]"
              tabIndex={0}
              data-testid="button"
              aria-disabled="false"
              aria-busy="false"
            >
              Continue
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width={20}
                height={20}
                aria-hidden="true"
                className="icon_c85ee8f381 rightIcon_b8664810bd noFocusStyle_7a93ee2575 ml-2"
                data-testid="icon"
              >
                <path
                  d="M12.5303 9.46967L12 10L12.5303 10.5303C12.8232 10.2374 12.8232 9.76256 12.5303 9.46967ZM10.9393 10L7.46967 13.4697C7.17678 13.7626 7.17678 14.2374 7.46967 14.5303C7.76256 14.8232 8.23744 14.8232 8.53033 14.5303L12.5303 10.5303L12 10L12.5303 9.46967L8.53033 5.46967C8.23744 5.17678 7.76256 5.17678 7.46967 5.46967C7.17678 5.76256 7.17678 6.23744 7.46967 6.53033L10.9393 10Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Right Screen Start*/}
      <div
        id="monday-right-screen"
        className="flex justify-center overflow-hidden bg-[rgb(97,97,255)]"
      >
        <img
          alt="Create your account"
          className="h-full w-[unset] max-w-none"
          src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png"
        />
      </div>
    </>
  );
};

export default SignUpEmail;
