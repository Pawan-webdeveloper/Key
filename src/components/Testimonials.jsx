import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      stars: [
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/50fd163f6dbf563e1b2faf2acb372468176f28dbac114b166a164aa0879e9de8?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/50fd163f6dbf563e1b2faf2acb372468176f28dbac114b166a164aa0879e9de8?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/9752cfa515fb1fd5ecef1425337585fd4666ba580cc6b3d68e5569e85bc51ef7?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/9752cfa515fb1fd5ecef1425337585fd4666ba580cc6b3d68e5569e85bc51ef7?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/cc2c2ab51c6777cb1f7a4b755d1c37c7abc67ad27b6c5a5c97104a3f10c7fb66?placeholderIfAbsent=true",
      ],
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/3cfb608542735d0e238453e66cb8cc83c6ff319ff0878aa75d645368d195b17b?placeholderIfAbsent=true",
      name: "Jane Doe",
      position: "Product Manager, TechCo",
    
    },
    {
      stars: [
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/50fd163f6dbf563e1b2faf2acb372468176f28dbac114b166a164aa0879e9de8?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/64027d38e88c1761d76dd16be244e811f9177150ff357fa1b0f73528d986b372?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/9752cfa515fb1fd5ecef1425337585fd4666ba580cc6b3d68e5569e85bc51ef7?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/9752cfa515fb1fd5ecef1425337585fd4666ba580cc6b3d68e5569e85bc51ef7?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/cc2c2ab51c6777cb1f7a4b755d1c37c7abc67ad27b6c5a5c97104a3f10c7fb66?placeholderIfAbsent=true",
      ],
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/60e850d71b9be4cacb9e72be77fc88189f2ddf84e74cbe76a914d5e2d6bcb452?placeholderIfAbsent=true",
      name: "Name Surname",
      position: "Executive, MAppe",
    
    },
    {
      stars: [
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/50fd163f6dbf563e1b2faf2acb372468176f28dbac114b166a164aa0879e9de8?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/aba4067ff04e140d2ef7106b704a6fce838d56fcbff41636cf094ff7d5e2b0bb?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/e02dc5e43cc6de4c5fc4437273153130d65b354f2a9f4b68e85c28e610c20cc2?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/346b2a2d6598b8ec48e8375b5044626a36031c9081d91d8347f8a58504bcd9e6?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/dff4dca80c23d54c11f20adfd340e3c60bf7f107350427605cf9eeb3a610f0a4?placeholderIfAbsent=true",
      ],
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/0f13dd1e40104f18ae142c32746991d6322177aa198f261e57b3b418b3b335a1?placeholderIfAbsent=true",
      name: "Name Surname",
      position: "Manager, XYZ",
 
    },
  ];

  return (
    <section className="overflow-hidden px-16 py-28 w-full bg-pink-100 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="max-w-full text-black w-[560px]">
        <h2 className="text-5xl tracking-tight leading-tight max-md:max-w-full max-md:text-4xl">
          Customer testimonials
        </h2>
        <p className="mt-6 text-lg max-md:max-w-full">
          See what our customers have to say
        </p>
      </div>
      <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              stars={testimonial.stars}
              quote={testimonial.quote}
              avatar={testimonial.avatar}
              name={testimonial.name}
              position={testimonial.position}
              companyLogo={testimonial.companyLogo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
