import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 mt-8 border-[3px] border-[#FFFFFF]  bg-[#FFFFFF66] rounded-2xl">
      <aside>
        <h1 className="text-[#0FB3BB] text-[40px] font-int">Sky Cast</h1>
        <p className="text-lg max-w-[350px] mt-10">
          Funding freemium long tail hypotheses first mover advantage assets
          ownership
        </p>
        <p className="flex items-center gap-3 max-w-[350px] mt-10">
          <img src="src/assets/icons/email.svg" />
          <p className="text-[16px] text-[#000000D9]">SkyCast@mail.com</p>
        </p>
        <p className="flex items-center gap-3 max-w-[350px] mt-5">
          <img src="src/assets/icons/phone.svg" />
          <p className="text-[16px] text-[#000000D9]">+ 12 3456 7890</p>
        </p>
      </aside>
      <nav>
        <h6 className="footer-title text-lg font-semibold font-int text-[#92989F] capitalize">
          Services
        </h6>
        <a className="link link-hover text-[16px] mb-3">Web Hosting</a>
        <a className="link link-hover text-[16px] mb-3">Domains</a>
        <a className="link link-hover text-[16px] mb-3">Premium Hosting</a>
        <a className="link link-hover text-[16px] mb-3">Private Server</a>
        <a className="link link-hover text-[16px] mb-3">E-mail Hosting</a>
      </nav>
      <nav>
        <h6 className="footer-title text-lg font-semibold font-int text-[#92989F] capitalize">Support</h6>
        <a className="link link-hover text-[16px] mb-3"> Pricing Plan</a>
        <a className="link link-hover text-[16px] mb-3">Documentation</a>
        <a className="link link-hover text-[16px] mb-3">Guide</a>
        <a className="link link-hover text-[16px] mb-3">Tutorial</a>
      </nav>

      <nav>
        <h6 className="footer-title text-lg font-semibold font-int text-[#92989F] capitalize">company</h6>
        <a className="link link-hover text-[16px] mb-3">About</a>
        <a className="link link-hover text-[16px] mb-3">Blog</a>
        <a className="link link-hover text-[16px] mb-3">Join Us</a>
        <a className="link link-hover text-[16px] mb-3">Press</a>
        <a className="link link-hover text-[16px] mb-3">Partners</a>
      </nav>

      <nav>
        <h6 className="footer-title text-lg font-semibold font-int text-[#92989F] capitalize">Legal</h6>
        <a className="link link-hover text-[16px] mb-3">Claim</a>
        <a className="link link-hover text-[16px] mb-3">Privacy</a>
        <a className="link link-hover text-[16px] mb-3">Terms</a>
      </nav>
    </footer>
  );
};

export default Footer;
