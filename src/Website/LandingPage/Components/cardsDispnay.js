import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ResponsiveCards = () => {
    useEffect(() => {
        AOS.init({
          // settings here
          duration: 1000, // Global animation duration
        });
      }, []);

  
  const cardsData = Array(9).fill({
    name: "Bernard Tappie",
    image: "https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1711968499/Goldman_Sachs.svg_wbtwh9.png",
    description: "Est ipsum sed blanditiis iste molestias nemo nobis repellendus nisi dolorum itaque optio impedit cum voluptatem facilis minima, quasi laborum. Nihil, quaerat."
  });

  return (
    <div className="bg-slate-900 px-4 py-12 flex justify-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl " >
        {cardsData.map((card, index) => (
          <ShimmerBorderCard key={index} name={card.name} image={card.image} description={card.description} />
        ))}
      </div>
    </div>
  );
};

const ShimmerBorderCard = ({ name, image, description }) => {
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50 cursor-pointer"data-aos="zoom-in">
      <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
        <img className="w-full h-40 rounded-lg" src={image} alt={name} />

        <h4 className="relative z-10 mb-4 w-full text-2xl font-bold text-slate-50 mt-6 text-left">
          {name}
        </h4>
        <p className="relative z-10 text-slate-400 text-left">
          {description}
        </p>
      </div>

      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        style={{ scale: 1.75 }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
};

export default ResponsiveCards;
