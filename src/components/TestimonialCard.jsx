import React from "react";

const TestimonialCard = ({
  stars,
  quote,
  avatar,
  name,
  position,
  companyLogo,
}) => {
  return (
    <article className="flex overflow-hidden flex-col flex-1 border-blue-50 shrink items-start basis-0 min-w-60">
      <div className="flex overflow-hidden gap-1 items-start ">
        {stars.map((star, index) => (
          <img
            key={index}
            src={star}
            className="object-contain shrink-0 w-5 aspect-[1.05]"
            alt="Star rating"
          />
        ))}
      </div>
      <blockquote className="self-stretch mt-8 text-xl tracking-normal leading-7 text-black">
        {quote}
      </blockquote>
      <div className="flex flex-col items-start mt-8 text-base text-black">
        <img
          src={avatar}
          className="object-contain w-14 rounded-full aspect-square"
          alt={name}
        />
        <div className="self-stretch mt-4">
          <p className="font-bold">{name}</p>
          <p>{position}</p>
        </div>
       
      </div>
    </article>
  );
};

export default TestimonialCard;
