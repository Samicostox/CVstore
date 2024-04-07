import React, { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiAlertCircle ,FiCheckCircle} from "react-icons/fi";
import { animate, useMotionTemplate, useMotionValue, AnimatePresence, motion } from "framer-motion";
import { FaTiktok } from 'react-icons/fa'; // Assuming FaTiktok is the TikTok icon
import { TextShimmerDemo } from "./button2";

const News = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-[200px] items-center justify-center bg-slate-900 px-4">
      <BeamInput setIsOpen={setIsOpen} />
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const BeamInput = ({ setIsOpen }) => {
  const inputRef = useRef(null);
  const mailchimpUrl = "https://innovationstudios.us22.list-manage.com/subscribe/post?u=c4ea3ff3b2247f7829c747e86&id=fbb81fa648&f_id=0031c1e1f0";
  const turn = useMotionValue(0);

  useEffect(() => {
    animate(turn, 1, {
      ease: "linear",
      duration: 5,
      repeat: Infinity,
    });
  }, []);

  const backgroundImage = useMotionTemplate`conic-gradient(from ${turn}turn, #00808000 75%, #008080 100%)`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('EMAIL', inputRef.current.value);

    fetch(mailchimpUrl, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    })
    .then(() => {
      setIsOpen(true);
      console.log('Subscribed successfully');
    })
    .catch((error) => {
      console.error('Subscription error:', error);
    });
  };

  return (

    <div>
    <form
      onSubmit={handleSubmit}
      className="validate relative flex w-full max-w-md items-center gap-2 rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-white/5 py-1.5 pl-6 pr-1.5 z-40"
      onClick={() => inputRef.current?.focus()}
    >
      <input
        ref={inputRef}
        type="email"
        name="EMAIL"
        id="mce-EMAIL"
        required
        placeholder="Enter your email"
        className="w-full bg-transparent text-base text-white placeholder-white/80 focus:outline-none z-40"
      />
      <button
        type="submit"
        name="subscribe"
        id="mc-embedded-subscribe"
        className="group flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-br from-gray-50 to-gray-400 px-4 py-3 text-base font-medium text-gray-900 transition-transform active:scale-[0.985]"
      >
        <span>Join Newsletter</span>
        <FiArrowRight className="-mr-4 opacity-0 transition-all group-hover:-mr-0 group-hover:opacity-100 group-active:-rotate-45" />
      </button>
      
   
    </form>

    </div>

  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleFollowUsClick = () => {
    window.location.href = "https://www.tiktok.com/@innovation_studios_uk";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-slate-900/20 backdrop-blur-sm cursor-pointer"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative overflow-hidden w-full max-w-lg rounded-lg shadow-xl cursor-default bg-gradient-to-br from-slate-900 to-teal-500 p-6 text-white"
          >
            <FiCheckCircle className="absolute text-white/10 rotate-12 -top-24 -left-24 text-[250px] z-0" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 mb-2 rounded-full bg-white text-3xl text-teal-600 grid place-items-center">
                <FiCheckCircle />
              </div>
              <h3 className="mb-2 text-3xl font-bold text-center">
                You Are Subscribed!
              </h3>
              <p className="mb-6 text-center">
                We will keep you updated when new CVs are being uploaded into this website!
              </p>
              <div className="flex gap-2 w-full">
                <button
                  onClick={handleFollowUsClick}
                  className="w-full py-2 font-semibold text-white bg-transparent rounded flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <FaTiktok className="text-white hover:text-teal-500 transition-colors"/>
                  Follow Us
                </button>
                <button
                  onClick={handleClose}
                  className="w-full py-2 font-semibold text-teal-600 bg-white rounded hover:opacity-90 transition-opacity"
                >
                  Keep Browsing
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default News;


  