import React, { useState } from "react";
import { Form } from "react-router-dom";

import { PlusOutlined, DownOutlined } from "@ant-design/icons";
import { Button, Input, Select, Space } from "antd";

const roleOptions = [
  { label: "Admin", value: "Admin", desc: "Can invite & manage new member" },
  { label: "Member", value: "Member", desc: "Can add and edit content" },
];

const InviteMates = () => {
  const [emailList, setEmailList] = useState([
    { name: "", value: "" },
    { name: "", value: "" },
  ]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleBlur = () => setActiveIndex(-1);
  const handleClick = () => {
    if (!open) setActiveIndex(-1);
  };
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
                          defaultValue="Admin"
                          options={roleOptions}
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
                    setEmailList((p) => [...p, { name: "", value: "" }]);
                  }}
                >
                  Add another
                </Button>
              </div>
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
