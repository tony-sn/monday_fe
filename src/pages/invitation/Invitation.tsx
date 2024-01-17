import { Radio } from "antd";

// @ts-expect-error -- TODO: Module '"/Users/tony/Projects/cybersoft/code_with_mentor/monday_fe/node_modules/@types/react/ts5.0/index"' can only be default-imported using the 'esModuleInterop' flag
import React, { useState } from 'react'

const optionGroup = ['Work', 'Personal', 'School', 'Nonprofits']

const Invitation = () => {
  const [selected, setSelected] = useState('Work')

// @ts-expect-error -- TODO: Binding element 'value' implicitly has an 'any' type.
  const onChange = ({ target: { value } }) => {
    console.log('radio3 checked', value);
    setSelected(value);
  };
  return (
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
    <div id="invitation-container" className='h-full w-full font-monday'>
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
      <div className='invitation-loader' />
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
      <div id='invitation-form' className='h-full w-full'>
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
        <div id='invitation-component' className='flex h-full w-full justify-center'>
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
          <div id='styles-module-wrapper' className='visible relative'>
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
            <div id='mf-platform-invitation' className='flex h-full- w-full items-center justify-center'>
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
              <div>
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
                <div id='OnCH8' className='grid h-screen w-screen grid-cols-monday'>
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
                  <div id='monday-left-screen' className='relative flex h-full w-full flex-1 flex-col items-center justify-between bg-white px-[calc(2*var(--spacing-xxxl))] py-[var(--spacing-xxxl)]'>
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
                    <div className='header w-full flex-1'>
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
                      <div className='header-component mb-0'>
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
                        <div className='logo-wrapper mb-[var(--spacing-xxxl)]'>
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
                          <img alt='logo' src='https://cdn.monday.com/images/logos/logo-full-big.png' className='logo-img h-6' />
                        </div>
                      </div>
                    </div>
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
                    <div className='content relative mt-0 w-full flex-[8]'>
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
                      <div className='toggle-group-component text-[32px] leading-[56px] font-extralight'>
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
                        <div className='title-wrapper mb-[var(--spacing-small)]'>
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
                          <h1 className='overflow-hidden p-0 text-left text-2xl font-medium tracking-[-0.1px] text-[var(--color-mud-black)]'>
                            Hey there, what brings you here today?
                          </h1>
                        </div>
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
                        <div className='toggle-group-list'>
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
                          <div className='toggle-groups-group'>
                            {/* Radio Button List */}
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
                            <Radio.Group defaultValue={optionGroup[0]} className='toggle-option-group-component flex flex-wrap'>
                              {
                                optionGroup.map((option, index) => (
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
                                  <Radio.Button onChange={(e) => {

                                  }} value={option}>
                                    {option}
                                  </Radio.Button>

                                ))


                              }


                            </Radio.Group>

                          </div>

                        </div>
                      </div>

// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
// @ts-expect-error -- TODO: Cannot use JSX unless the '--jsx' flag is provided.
                      <div className='toggle-group-component text-[32px] leading-[56px] font-extralight'>

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

  )
}

export default Invitation;
