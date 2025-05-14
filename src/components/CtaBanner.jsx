import React from "react";
import Button from "./Button";

const CtaBanner = () => {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-28 w-full min-h-[409px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/9f2d069beea7e61cc160db3ea1a5a148de5f5f5924afea8ef6592bf754aab68c?placeholderIfAbsent=true"
        className="object-cover absolute inset-0 size-full"
        alt="Background"
      />
      <div className="flex relative flex-col max-w-full w-[768px]">
        <div className="w-full text-center text-white max-md:max-w-full">
          <h2 className="text-5xl tracking-tight leading-tight max-md:max-w-full max-md:text-4xl">
            Discover Your Perfect Keyboard
          </h2>
          <p className="mt-6 text-lg max-md:max-w-full">
            Explore our wide range of keyboards and elevate your typing
            experience today!
          </p>
        </div>
        <div className="flex gap-4 items-start self-center mt-8 text-base font-medium text-black whitespace-nowrap">
          <Button variant="primary">Shop</Button>
          <Button variant="secondary">Subscribe</Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
