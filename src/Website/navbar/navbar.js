import { FiMenu, FiArrowUpRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { useAnimate, motion } from "framer-motion";
import ButtonWrapper from "../LandingPage/Components/button";
import { FaTiktok, FaInstagram, FaLinkedin } from 'react-icons/fa';
import React from 'react';


const Example = () => {
  return (
    <section
      className="relative h-[150vh] w-full overflow-hidden bg-black"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23171717'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    >
      <GlassNavigation />

      <span className="absolute -top-[600px] left-[50%] h-[800px] w-4/5 max-w-3xl -translate-x-[50%] rounded bg-neutral-900" />
    </section>
  );
};

export const GlassNavigation = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [scope, animate] = useAnimate();
  const navRef = useRef(null);

  const handleMouseMove = ({ offsetX, offsetY, target }) => {
    // @ts-ignore
    const isNavElement = [...target.classList].includes("glass-nav");

    if (isNavElement) {
      setHovered(true);

      const top = offsetY + "px";
      const left = offsetX + "px";

      animate(scope.current, { top, left }, { duration: 0 });
    } else {
      setHovered(false);
    }
  };

  useEffect(() => {
    navRef.current?.addEventListener("mousemove", handleMouseMove);

    return () =>
      navRef.current?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <nav
      ref={navRef}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: hovered ? "none" : "auto",
      }}
      className="glass-nav fixed left-0 right-0 top-0 z-50 mx-auto max-w-6xl overflow-hidden border-[1px] border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur md:left-6 md:right-6 md:top-6 md:rounded-2xl"
    >
      <div className="glass-nav flex items-center justify-between px-5 py-5">
        <Cursor hovered={hovered} scope={scope} />

        <Links />

        <Logo />

        <Buttons setMenuOpen={setMenuOpen} />
      </div>

      <MobileMenu menuOpen={menuOpen} />
    </nav>
  );
};

const Cursor = ({ hovered, scope }) => {
  return (
    <motion.span
      initial={false}
      animate={{
        opacity: hovered ? 1 : 0,
        transform: `scale(${
          hovered ? 1 : 0
        }) translateX(-50%) translateY(-50%)`,
      }}
      transition={{ duration: 0.15 }}
      ref={scope}
      className="pointer-events-none absolute z-0 grid h-[50px] w-[50px] origin-[0px_0px] place-content-center rounded-full bg-gradient-to-br from-teal-600 from-40% to-teal-400 text-2xl"
    >
      <FiArrowUpRight className="text-white" />
    </motion.span>
  );
};

const Logo = () => (
  <span className="pointer-events-none relative left-0 top-[50%] z-10 text-2xl md:text-4xl font-black text-white mix-blend-overlay md:absolute md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%]">
OneCVaDay  </span>
);

const Links = () => (
  <div className="hidden items-center gap-2 md:flex">
    <GlassLink href="https://www.tiktok.com/@innovation_studios_uk" icon={<FaTiktok />} text="TikTok" />
    <GlassLink href="https://www.instagram.com/innovationstudiosuk/" icon={<FaInstagram />} text="Instagram" />
    <GlassLink href="https://www.linkedin.com/company/innovation-studios-uk" icon={<FaLinkedin />} text="LinkedIn" />
  </div>
);


const GlassLink = ({ href, icon, text }) => {
  return (
    <a
      href={href}
      className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
    >
      {React.cloneElement(icon, { className: "text-white group-hover:text-teal-500 transition-colors z-10" })}
      <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
        {text}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100 group-hover:bg-gray-600" />
    </a>
  );
};

const TextLink = ({ href, icon, text }) => {
  return (
    <a href={href} className="flex items-center gap-2 text-white/90 transition-colors hover:text-white">
      {React.cloneElement(icon, { className: "text-white hover:text-teal-500 z-10" })}
      {text}
    </a>
  );
};


const Buttons = ({ setMenuOpen }) => (
  <div className="flex items-center gap-4">
    

    <ButtonWrapper></ButtonWrapper>

    <button
      onClick={() => setMenuOpen((pv) => !pv)}
      className="ml-2 block scale-100 text-3xl text-white/90 transition-all hover:scale-105 hover:text-white active:scale-95 md:hidden"
    >
      <FiMenu />
    </button>
  </div>
);

const SignInButton = () => {
  return (
    <button className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95">
      <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
        Sign in
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
  );
};

const MobileMenu = ({ menuOpen }) => {
  return (
    <motion.div
      initial={false}
      animate={{
        height: menuOpen ? "fit-content" : "0px",
      }}
      className="block overflow-hidden md:hidden"
    >
      <div className="flex items-center justify-between px-4 pb-4">
        <TextLink href="https://www.tiktok.com/@innovation_studios_uk" icon={<FaTiktok />} text="TikTok" />
        <TextLink href="https://www.instagram.com/innovationstudiosuk/" icon={<FaInstagram />} text="Instagram" />
        <TextLink href="https://www.linkedin.com/company/innovation-studios-uk" icon={<FaLinkedin />} text="LinkedIn" />
      </div>
    </motion.div>
  );
};

export default Example;