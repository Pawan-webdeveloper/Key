import React from "react";

const FooterLinks = ({ title, links }) => {
  return (
    <div className="overflow-hidden flex-1 shrink text-black basis-0">
      <h3 className="text-base font-bold">{title}</h3>
      <nav className="mt-4 w-full text-sm">
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className="flex-1 shrink py-2 w-full basis-0 block"
          >
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default FooterLinks;
