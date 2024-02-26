import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

import { DownOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, Select, Space } from "antd";

const roleOptions = [
  { label: "Admin", value: "Admin", desc: "Can invite & manage new member" },
  { label: "Member", value: "Member", desc: "Can add and edit content" },
];

const InviteMates = () => {
  const navigate = useNavigate();
  const [emailList, setEmailList] = useState([
    { name: "", value: "", role: "Admin" },
    { name: "", value: "", role: "Admin" },
  ]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const updateEmailList = (
    index: number,
    updatedEmail: { name: string; value: string; role: string },
  ) => {
    setEmailList((prev) => {
      const updatedList = [...prev];
      updatedList[index] = updatedEmail;
      return updatedList;
    });
  };
  const handleBlur = () => setActiveIndex(-1);
  const handleClick = () => {
    if (!open) setActiveIndex(-1);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const updateEmail = {
      ...emailList[index],
      name: e.target.value,
      value: e.target.value,
    };
    updateEmailList(index, updateEmail);
  };
  const handleRoleChange = (value: string, index: number) => {
    const updateEmail = { ...emailList[index], role: value };
    updateEmailList(index, updateEmail);
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("submitted email list: ", emailList);
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
                  Invite your teammates
                </h2>
                <span className="text-base font-light">
                  Collaborate with your team to get the most out of monday.com
                </span>
              </div>
            </div>
            <div className="toggle-group-list">
              <div className="toggle-groups-group">
                <div className="toggle-option-group-component flex flex-col flex-wrap text-[32px] font-extralight leading-[56px]">
                  <Space direction="vertical">
                    {emailList.map((email, index) => (
                      <Space.Compact block key={`${email}/${index}`}>
                        <Input
                          placeholder="Add email here"
                          value={email.value}
                          onChange={(e) => handleChange(e, index)}
                          style={{
                            width: "70%",
                          }}
                        />
                        <Select
                          onDropdownVisibleChange={(visible) =>
                            setOpen(visible)
                          }
                          onFocus={() => setActiveIndex(index)}
                          onBlur={handleBlur}
                          onClick={handleClick}
                          suffixIcon={
                            <DownOutlined
                              className={`${open && index === activeIndex ? "rotate-180 transition-all duration-500" : ""}`}
                            />
                          }
                          defaultValue={email.role}
                          options={roleOptions}
                          onChange={(value) => handleRoleChange(value, index)}
                          optionRender={(option) => (
                            <Space direction="vertical" className="!w-full">
                              <span>{option.data.label}</span>
                              <p>{option.data.desc}</p>
                            </Space>
                          )}
                        />
                      </Space.Compact>
                    ))}
                  </Space>
                </div>
                <Button
                  className="!hover:text-[rgb(0, 0, 0, 0.88)] mt-2 flex items-center justify-center border-none px-2 py-4 shadow-none"
                  icon={<PlusOutlined />}
                  onClick={(e) => {
                    e.preventDefault();
                    setEmailList((p) => [
                      ...p,
                      { name: "", value: "", role: "Admin" },
                    ]);
                  }}
                >
                  Add another
                </Button>
              </div>
            </div>
          </div>

          <div className="submit-button-wrapper large-signup-modal mt-10 flex w-[calc(100%+2px)] flex-1">
            <div className="left-bar mt-auto flex-grow">
              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="submit-button inline-flex h-10 min-w-[auto] cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-[4px] border border-[var(--ui-border-color)] bg-transparent px-4 py-2 text-base font-normal text-[var(--primary-text-color)] antialiased transition-[min-width] hover:bg-[var(--primary-background-hover-color)] focus-visible:z-[11] focus-visible:rounded-s focus-visible:shadow-monday disabled:cursor-not-allowed disabled:bg-[var(--disabled-background-color)] disabled:text-[var(--disabled-text-color)]"
                tabIndex={0}
                data-testid="button"
                aria-disabled="false"
                aria-busy="false"
              >
                Remind me later
              </button>
            </div>

            <div className="account-setup-desktop-questions-submit-button-component large-signup-modal right-bar mt-auto flex items-center justify-end font-monday">
              <button
                type="submit"
                className="submit-button inline-flex h-10 min-w-[125px] cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-[4px] bg-[var(--primary-color)] px-4 py-2 text-base font-normal text-white antialiased transition-[min-width] hover:bg-[var(--primary-hover-color)] focus-visible:z-[11] focus-visible:rounded-s focus-visible:shadow-monday disabled:cursor-not-allowed disabled:bg-[var(--disabled-background-color)] disabled:text-[var(--disabled-text-color)]"
                tabIndex={0}
                data-testid="button"
                aria-disabled="false"
                aria-busy="false"
              >
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
              </button>
            </div>
          </div>
        </div>
      </Form>
      <div className="monday-screen-right mx-auto my-auto flex h-full w-full justify-center bg-[#00ca72] bg-cover bg-center object-cover">
        <div className="monday-image-wrapper">
          <img
            className="h-full max-h-[1000px] w-full bg-cover bg-center"
            src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/new-signup-right-side-assets/Invite-your-teammates.png"
            alt="one last question"
          />
        </div>
      </div>
    </>
  );
};

export default InviteMates;
