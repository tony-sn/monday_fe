import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";

const socialMedia = [
  { label: "LinkedIn", value: "linkedin" },
  { label: "Friend / Colleague", value: "friendColleague" },
  { label: "Search Engine (Google, Bing, etc.)", value: "searchEngine" },
  { label: "Software review sites", value: "Software review sites" },
  { label: "YouTube Ad", value: "youtubeAd" },
  { label: "TV / Streaming service", value: "tvStreamingService" },
  { label: "Consultant", value: "consultant" },
  { label: "Audio ad (Podcast, Spotify)", value: "audioAd" },
  { label: "Billboard / Public transit ad", value: "Billboard" },
  {
    label: "Social Media (Facebook, Instagram, Reddit, etc.)",
    value: "socialMedia",
  },
  { label: "Other", value: "other" },
];

const LastQuestion = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
  };
  useEffect(() => {
    // simulate a network request
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isLoading]);
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div
          id="monday-left-screen"
          className="relative box-border flex h-full flex-1 flex-col items-center justify-between bg-white px-[calc(2*var(--spacing-xxxl))] py-[var(--spacing-xxxl)]"
        >
          <div className="header w-full flex-1">
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
            <div className="toggle-group-component text-[32px] font-extralight leading-[56px]">
              <div className="title-wrapper mb-[var(--spacing-small)]">
                <h2 className="overflow-hidden p-0 text-left font-poppins text-2xl font-medium tracking-[-0.1px] text-[var(--color-mud-black)]">
                  One last question, how did you here about us?
                </h2>
              </div>
              <div className="toggle-group-list -ml-2">
                <div className="toggle-groups-group">
                  <div className="toggle-option-group-component flex flex-wrap text-[32px] font-extralight leading-[56px] ">
                    {socialMedia.map((option) => (
                      <Button
                        key={option.label}
                        className="ml-[var(--spacing-small)] mt-[var(--spacing-medium)]  inline-flex h-10 min-w-[auto] cursor-pointer select-none items-center justify-center rounded-[32px] border border-[var(--ui-border-color)] px-[var(--spacing-medium)] py-[var(--spacing-small)] !font-light text-[#676879] hover:!border-[var(--ui-border-color)]"
                      >
                        <label className="relative flex h-min w-fit items-center font-monday">
                          <input
                            type="checkbox"
                            className="form-checkbox mr-[var(--spacing-small)] h-4 w-4"
                          />
                          <span className="ml-2 text-base !font-light !text-[#676879]">
                            {option.label}
                          </span>
                        </label>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="submit-button-wrapper large-signup-modal mt-10 flex w-[calc(100%+2px)] flex-1">
            <div className="left-bar mt-auto flex-grow">
              <button
                type="button"
                onClick={() => navigate("/invitation")}
                className="submit-button inline-flex h-10 min-w-[auto] cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-[4px] border border-[var(--ui-border-color)] bg-transparent px-4 py-2 text-base font-normal text-[var(--primary-text-color)] antialiased transition-[min-width] hover:bg-[var(--primary-background-hover-color)] focus-visible:z-[11] focus-visible:rounded-s focus-visible:shadow-monday disabled:cursor-not-allowed disabled:bg-[var(--disabled-background-color)] disabled:text-[var(--disabled-text-color)]"
                tabIndex={0}
                data-testid="button"
                aria-disabled="false"
                aria-busy="false"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="20"
                  height="20"
                  aria-hidden="true"
                  className="icon_d24b689566 leftIcon_9131a496c3 noFocusStyle_07ecef1878 mr-2"
                  data-testid="icon"
                >
                  <path
                    d="M7.46967 10.5303L8 10L7.46967 9.46967C7.17678 9.76256 7.17678 10.2374 7.46967 10.5303ZM9.06066 10L12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967C12.2374 5.17678 11.7626 5.17678 11.4697 5.46967L7.46967 9.46967L8 10L7.46967 10.5303L11.4697 14.5303C11.7626 14.8232 12.2374 14.8232 12.5303 14.5303C12.8232 14.2374 12.8232 13.7626 12.5303 13.4697L9.06066 10Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
                Back
              </button>
            </div>
            <div className="account-setup-desktop-questions-submit-button-component large-signup-modal right-bar mt-auto flex items-center justify-end font-monday">
              <button
                type="submit"
                className="submit-button inline-flex h-10 min-w-[100px] cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-[4px] bg-[var(--primary-color)] px-4 py-2 text-base font-normal text-white antialiased transition-[min-width] hover:bg-[var(--primary-hover-color)] focus-visible:z-[11] focus-visible:rounded-s focus-visible:shadow-monday disabled:cursor-not-allowed disabled:bg-[var(--disabled-background-color)] disabled:text-[var(--disabled-text-color)]"
                tabIndex={0}
                data-testid="button"
                aria-disabled="false"
                aria-busy="false"
              >
                {isLoading ? (
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="mx-3 inline-flex h-4 w-4 animate-spin justify-center text-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <>
                    <span>Continue</span>
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
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </Form>
      <div className="monday-screen-right mx-auto my-auto flex h-full w-full justify-center bg-[#ffcc02] bg-cover bg-center object-cover">
        <div className="monday-image-wrapper">
          <img
            className="h-full max-h-[1000px] w-full bg-cover bg-center"
            src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/how-did-you-hear-about-us-with-invite.png"
            alt="one last question"
          />
        </div>
      </div>
    </>
  );
};

export default LastQuestion;
