import React from "react";
import { Form } from "react-router-dom";

const LastQuestion = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
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
