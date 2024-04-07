import React, { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiAlertCircle ,FiCheckCircle} from "react-icons/fi";
import { animate, useMotionTemplate, useMotionValue, AnimatePresence, motion } from "framer-motion";
import { FaTiktok } from 'react-icons/fa'; // Assuming FaTiktok is the TikTok icon
import { TextShimmerDemo } from "./button2";
import StackedNotifications from "./StackedNotification.js";

const News = () => {
    const [notification, setNotification] = useState(null);
  
    return (
      <div className="flex h-[80px] items-center justify-center px-4">
        <BeamInput setNotification={setNotification} />
        <StackedNotifications text={notification?.text} />
      </div>
    );
  };

  const BeamInput = ({ setNotification }) => {
    const inputRef = useRef(null);
    const mailchimpUrl = "https://innovationstudios.us22.list-manage.com/subscribe/post?u=c4ea3ff3b2247f7829c747e86&id=fbb81fa648&f_id=0031c1e1f0";
  
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
        setNotification({ text: 'Subscribed successfully!' });
        console.log('Subscribed successfully');
      })
      .catch((error) => {
        console.error('Subscription error:', error);
        setNotification({ text: 'Subscription error!' });
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





export default News;


  