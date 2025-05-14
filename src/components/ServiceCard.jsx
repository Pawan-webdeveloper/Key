import React from "react";
import Button from "./Button";

const ServiceCard = ({ icon, title, description, buttonText }) => {
  return (
    <article className="flex-1 shrink basis-0 min-w-60">
      <div className="flex flex-col w-full text-center text-white">
        <img
          src={icon}
          className="object-contain self-center w-12 aspect-square"
          alt=""
        />
        <div className="flex flex-col items-start mt-6 w-full">
          <h3 className="text-2xl tracking-tight leading-9">{title}</h3>
          <p className="mt-6 text-base leading-6">{description}</p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 w-full text-base font-medium text-white">
        <Button
          variant="link"
          rightIcon="https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/a615aa0dd2f0394c9e558072230088b5f90cca3f340e92a634f1d589c347fa5b?placeholderIfAbsent=true"
        >
          {buttonText}
        </Button>
      </div>
    </article>
  );
};

export default ServiceCard;
