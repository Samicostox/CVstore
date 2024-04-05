import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ResponsiveCards = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Global animation duration
        });
      }, []);

  // Example data, you can replace downloadUrl with actual URLs to the files you want to download
  const cardsData = [
    {
        name: "Goldman Sachs",
        image: "https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1711968499/Goldman_Sachs.svg_wbtwh9.png",
        description: "Est ipsum sed blanditiis iste molestias nemo nobis repellendus nisi dolorum itaque optio impedit cum voluptatem facilis minima, quasi laborum. Nihil, quaerat.",
        downloadUrl: "https://res.cloudinary.com/dl2adjye7/raw/upload/v1712062897/SteveNimoCV_mrvxx7.docx"
    },
    { name: "Amazon", image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712313049/Untitled_design_17_ptzwq9.png", description: "Est ipsum sed blanditiis iste molestias nemo nobis repellendus nisi dolorum itaque optio impedit cum voluptatem facilis minima, quasi laborum. Nihil, quaerat.", downloadUrl: "<Amazon_Download_URL>" },
    { name: "Qube", image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712313160/Untitled_design_18_ozqsgm.png", description: "Est ipsum sed blanditiis iste molestias nemo nobis repellendus nisi dolorum itaque optio impedit cum voluptatem facilis minima, quasi laborum. Nihil, quaerat.", downloadUrl: "<Qube_Download_URL>" },
    { name: "Morgan Stanley", image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712313256/Untitled_design_19_lhg4xn.png", description: "Est ipsum sed blanditiis iste molestias nemo nobis repellendus nisi dolorum itaque optio impedit cum voluptatem facilis minima, quasi laborum. Nihil, quaerat.", downloadUrl: "<Morgan_Stanley_Download_URL>" },
    { name: "Barclays", image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712313333/Untitled_design_20_eeralu.png", description: "Est ipsum sed blanditiis iste molestias nemo nobis repellendus nisi dolorum itaque optio impedit cum voluptatem facilis minima, quasi laborum. Nihil, quaerat.", downloadUrl: "<Barclays_Download_URL>" },
    { name: "Deloitte", image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712313412/Untitled_design_21_dr42ev.png", description: "Est ipsum sed blanditiis iste molestias nemo nobis repellendus nisi dolorum itaque optio impedit cum voluptatem facilis minima, quasi laborum. Nihil, quaerat.", downloadUrl: "<Deloitte_Download_URL>" },
    { name: "Natwest", image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712313705/Untitled_design_23_vkcffq.png", description: "Est ipsum sed blanditiis iste molestias nemo nobis repellendus nisi dolorum itaque optio impedit cum voluptatem facilis minima, quasi laborum. Nihil, quaerat.", downloadUrl: "<Natwest_Download_URL>" },
    { name: "Wise", image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712313625/Untitled_design_22_yn8tws.png", description: "Est ipsum sed blanditiis iste molestias nemo nobis repellendus nisi dolorum itaque optio impedit cum voluptatem facilis minima, quasi laborum. Nihil, quaerat.", downloadUrl: "<Natwest_Download_URL>" }
];


  return (
    <div className="bg-slate-900 px-4 py-12 flex justify-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl " >
        {cardsData.map((card, index) => (
          <ShimmerBorderCard key={index} name={card.name} image={card.image} description={card.description} downloadUrl={card.downloadUrl} />
        ))}
      </div>
    </div>
  );
};

const ShimmerBorderCard = ({ name, image, description, downloadUrl }) => {
  return (
    <a href={downloadUrl} download target="_blank" rel="noopener noreferrer" className="group relative w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50 cursor-pointer" data-aos="zoom-in">
      <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
        <img className="w-full h-45 rounded-lg" src={image} alt={name} />

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
    </a>
  );
};

export default ResponsiveCards;
