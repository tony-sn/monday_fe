import React, { useState } from "react";
import { Form } from "react-router-dom";

import { PlusOutlined } from "@ant-design/icons";
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
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
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
          <div className="toggle-group-list -ml-2">
            <div className="toggle-groups-group">
              <div className="toggle-option-group-component flex flex-col flex-wrap text-[32px] font-extralight leading-[56px]">
                <Space direction="vertical">
                  {emailList.map((email, index) => (
                    <Space.Compact block key={`${email}/${index}`}>
                      <Input placeholder="Add email here" value={email.value} />
                      <Select
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
                className="mt-4 border-none shadow-none"
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
  );
};

export default InviteMates;
