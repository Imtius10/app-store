import React from "react";
import { RxTwitterLogo, RxInstagramLogo, RxGithubLogo } from "react-icons/rx";
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content p-6 sm:p-10">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="text-3xl font-bold"><img src={logo} alt="" className="w-10 h-10" /></div>
          <p className="text-sm">
            <span className="font-bold text-lg">AppStore</span>
            <br />
            All your favorite apps in one place
          </p>
        </div>

        <div className="flex items-center gap-4">
          <h5 className="font-semibold">Follow us:</h5>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <RxTwitterLogo />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <RxInstagramLogo />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <RxGithubLogo />
          </a>
        </div>
      </div>

      <div className="text-center mt-6 text-xs opacity-70">
        © {new Date().getFullYear()} AppStore — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
