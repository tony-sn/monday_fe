import React from "react";

interface ImageProps {
  alt: string;
  className?: string;
  src: string;
}

export const RightImageWrapper = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <div
    id="monday-right-screen"
    className="flex justify-center overflow-hidden bg-[var(--primary-image-bg-color)]"
  >
    {children}
  </div>
);

export const RightImage = (props: ImageProps) => {
  const { alt, className, src } = props;
  return (
    <img
      alt={alt}
      className={` h-full w-[unset] max-w-none ${className}`}
      src={src}
    />
  );
};
