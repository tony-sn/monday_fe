import { Radio } from "antd";

import React, { useState } from "react";

import { optionGroup } from "./constant";

const Invitation = () => {
  const [selected, setSelected] = useState("Work");
  const [selectedRole, setSelectedRole] = useState("");

  const onChange = ({ target: { value } }) => {
    setSelected(value);
    setSelectedRole("");
  };
  const onChangeRole = ({ target: { value } }) => {
    setSelectedRole(value);
  };
  const chosenRoleGroup = optionGroup.find(
    (opt) => opt.value === selected,
  ).currentRoles;
  return (
    <div id="invitation-container" className="h-full w-full font-monday">
      <div className="invitation-loader" />
      <div id="invitation-form" className="h-full w-full">
        <div
          id="invitation-component"
          className="flex h-full w-full justify-center"
        >
          <div id="styles-module-wrapper" className="visible relative">
            <div
              id="mf-platform-invitation"
              className="h-full- flex w-full items-center justify-center"
            >
              <div>
                <div
                  id="OnCH8"
                  className="grid h-screen w-screen grid-cols-monday"
                >
                  <div
                    id="monday-left-screen"
                    className="relative flex h-full w-full flex-1 flex-col items-center justify-between bg-white px-[calc(2*var(--spacing-xxxl))] py-[var(--spacing-xxxl)]"
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
                          <h1 className="overflow-hidden p-0 text-left text-2xl font-medium tracking-[-0.1px] text-[var(--color-mud-black)]">
                            Hey there, what brings you here today?
                          </h1>
                        </div>
                        <div className="toggle-group-list">
                          <div className="toggle-groups-group">
                            {/* Radio Button List */}
                            <Radio.Group
                              onChange={onChange}
                              value={selected}
                              defaultValue={optionGroup[0].value}
                              className="toggle-option-group-component flex flex-wrap"
                            >
                              {optionGroup.map((option) => (
                                <label
                                  key={`${option.label}`}
                                  className="ml-2 mt-4 cursor-pointer rounded-[32px] border border-[var(--ui-border-color)] px-[var(--spacing-medium)] py-[var(--spacing-small)]"
                                >
                                  <Radio value={option.value}>
                                    {option.label}
                                  </Radio>
                                </label>
                              ))}
                            </Radio.Group>
                          </div>
                        </div>
                      </div>
                      {/* Second toggle group */}
                      {selected !== "Personal" && (
                        <div className="toggle-group-component mt-[var(--spacing-xxxl)] text-[32px] font-extralight leading-[56px]">
                          <div className="title-wrapper mb-[var(--spacing-small)]">
                            <h1 className="overflow-hidden p-0 text-left text-2xl font-medium tracking-[-0.1px] text-[var(--color-mud-black)]">
                              What best describes your current role?
                            </h1>
                          </div>
                          <div className="toggle-group-list">
                            <div className="toggle-groups-group">
                              {/* Radio Button List */}
                              <Radio.Group
                                onChange={onChangeRole}
                                value={selectedRole}
                                className="toggle-option-group-component flex flex-wrap"
                              >
                                {chosenRoleGroup.map((role) => (
                                  <label
                                    key={`${role.label}`}
                                    className="ml-2 mt-4 cursor-pointer rounded-[32px] border border-[var(--ui-border-color)] px-[var(--spacing-medium)] py-[var(--spacing-small)]"
                                  >
                                    <Radio value={role.value}>
                                      {role.label}
                                    </Radio>
                                  </label>
                                ))}
                              </Radio.Group>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="submit-button-wrapper large-signup-modal sticky bottom-2 right-0 flex w-[calc(100%+2px)] justify-end">
                      <div className="account-setup-desktop-questions-submit-button-component large-signup-modal mt-[auto] flex items-center justify-end font-monday">
                        <button
                          disabled={!selectedRole && selected !== "Personal"}
                          type="button"
                          className="submit-button inline-flex h-10 min-w-[auto] cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-[4px] bg-[var(--primary-color)] px-4 py-2 text-base font-normal text-white antialiased opacity-90 transition-[min-width] hover:bg-[var(--primary-hover-color)] disabled:cursor-not-allowed disabled:bg-[var(--disabled-background-color)] disabled:text-[var(--disabled-text-color)]"
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
                  <div className="monday-screen-right">
                    <img
                      className="h-full w-full bg-cover bg-center object-cover"
                      src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/what-brings-you-here-today.png"
                      alt="what bring you here today?"
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

export default Invitation;
