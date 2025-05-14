import React from "react";

const FeatureCard = ({ image, title, description }) => {
  return (
    <article className="overflow-hidden flex-1 shrink basis-0 min-w-60">
      <img
        src={image}
        className="object-contain w-full rounded-lg aspect-[1.69]"
        alt={title}
      />
      <div className="mt-8 w-full">
        <h3 className="text-3xl tracking-tight leading-10">{title}</h3>
        <p className="mt-6 text-base leading-6">{description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
