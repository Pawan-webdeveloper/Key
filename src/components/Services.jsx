import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/36b3a23867cc9f979f81639772f824f9367b453f3c74ab783ca76d68858e2076?placeholderIfAbsent=true",
      title: "Quality Assurance and Support Tailored for Every Customer",
      description:
        "We offer a range of services including warranty, customer support, and customization.",
      buttonText: "Learn More",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/7267f1614bfda27ad8f53edf3342a4b9cd56e0bbf822542dd1e278d40c6a9deb?placeholderIfAbsent=true",
      title:
        "Personalize Your Keyboard Experience with Our Customization Options",
      description:
        "Choose from various designs and features to make your keyboard uniquely yours.",
      buttonText: "Customize",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/7aa19eaf8b1c41d2a68079c8993be934/5828fcd00a323d6184030d6ebad777396e5d548ad4fa2eacc9329a0ae65289a9?placeholderIfAbsent=true",
      title: "Dedicated Customer Support for All Your Queries and Concerns",
      description:
        "Our team is here to assist you with any questions or issues.",
      buttonText: "Support",
    },
  ];

  return (
    <section className="flex overflow-hidden flex-col px-16 py-28 w-full bg-pink-500 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <h2 className="self-center text-4xl tracking-tight leading-10 text-center text-white w-[768px] max-md:max-w-full">
        Explore Our Comprehensive Services for Your Keyboard Needs
      </h2>
      <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-center items-start w-full max-md:max-w-full">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              buttonText={service.buttonText}
              className="border-2 border-white border-opacity-20 rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;