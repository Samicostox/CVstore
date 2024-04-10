import React, { useEffect,useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { FaTiktok } from 'react-icons/fa'; // Assuming FaTiktok is the TikTok icon
import News from './newsletter2.js';

const ResponsiveCards = () => {
  useEffect(() => {
      AOS.init({ duration: 1000 });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  // Example data, you can replace downloadUrl with actual URLs to the files you want to download
  const cardsData = [
    {
        status: "available",
        name: "Goldman Sachs",
        image: "https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1711968499/Goldman_Sachs.svg_wbtwh9.png",
        description: "A leading global investment banking, securities, and investment management firm, known for its financial expertise and commitment to client success.",
        downloadUrl: "https://res.cloudinary.com/dl2adjye7/raw/upload/v1712488977/Goldman-Sachs_furnlc.docx"
    },
    {status: "available", name: "BlackRock", image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712481839/Untitled_design_24_te5qrr.png", description: "The world's largest asset manager, providing investment, advisory, and risk management solutions to institutional and retail clients globally.", downloadUrl: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712658790/blackrock_re5mnt.png" },
    {status: "available", name: "Morgan Stanley", image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712313256/Untitled_design_19_lhg4xn.png", description: "A global financial services firm offering a wide range of investment banking, securities, wealth management, and investment management services.", downloadUrl: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712739859/CV_Morgan_Stanley_1_jmlmvd.pdf" },
    {status: "1 day ", name: "Amazon", image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712313049/Untitled_design_17_ptzwq9.png", description: "A global e-commerce and cloud computing giant, renowned for its technological innovation, extensive product offerings, and customer-focused services.", downloadUrl: "<Amazon_Download_URL>" },
    {status: "2 days", name: "Qube", image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712313160/Untitled_design_18_ozqsgm.png", description: "An innovative technology company specializing in digital transformation and business intelligence solutions, driving efficiency and growth for clients.", downloadUrl: "<Qube_Download_URL>" },
   
    {status: "3 days", name: "Barclays", image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712313333/Untitled_design_20_eeralu.png", description: "A British multinational bank and financial services company, offering products and services across personal, corporate, and investment banking.", downloadUrl: "<Barclays_Download_URL>" },
    {status: "4 days", name: "Deloitte", image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712313412/Untitled_design_21_dr42ev.png", description: "One of the largest professional services networks in the world, providing audit, consulting, financial advisory, risk advisory, tax, and related services.", downloadUrl: "<Deloitte_Download_URL>" },
    {status: "5 days", name: "Natwest", image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712313705/Untitled_design_23_vkcffq.png", description: "A major retail and commercial bank in the United Kingdom, known for its customer service, banking operations, and financial solutions.", downloadUrl: "<Natwest_Download_URL>" },
    {status: "6 days", name: "Wise", image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712313625/Untitled_design_22_yn8tws.png", description: "A financial technology company offering innovative money transfer services, known for its transparent fees and efficient cross-border payments.", downloadUrl: "<Natwest_Download_URL>" },
    
    {status: "7 days", name: "Bank of America", image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712481990/Untitled_design_25_hgkfax.png", description: " A leading American multinational investment bank and financial services holding company, serving individual consumers.", downloadUrl: "<Natwest_Download_URL>" },
    {
      "status": "8 days",
      "name": "McKinsey",
      "image": "https://res.cloudinary.com/dl2adjye7/image/upload/v1712569143/Untitled_design_27_vdfo9b.png",
      "description": "A global management consulting firm that advises on strategic, operational, and organizational matters, serving a wide range of industries and public sector entities.",
      "downloadUrl": "<Natwest_Download_URL>"
  },
  {
      "status": "9 days",
      "name": "BCG",
      "image": "https://res.cloudinary.com/dl2adjye7/image/upload/v1712569251/bcg_fk645r.png",
      "description": "A worldwide management consulting firm providing advisory services in strategy, operations, organization, and digital transformation for various sectors.",
      "downloadUrl": "<Natwest_Download_URL>"
  }
];


// In ResponsiveCards component
// In ResponsiveCards component
return (
  <div className="bg-slate-900 px-4 py-12 flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl">
      {cardsData.map((card, index) => (
        <ShimmerBorderCard 
          key={index}
          name={card.name}
          image={card.image}
          description={card.description}
          downloadUrl={card.downloadUrl} // Ensure downloadUrl is passed to the component
          status={card.status}
          onUnavailableClick={() => setIsOpen(true)}
        />
      ))}
    </div>
    <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
  </div>
);
      }

const ShimmerBorderCard = ({ name, image, description, downloadUrl, status, onUnavailableClick }) => {
  const isAvailable = status === "available";
  const badgeClass = isAvailable ? "bg-green-100 text-green-700 fill-green-500" : "bg-orange-100 text-orange-700 fill-orange-500";
  const badgeText = isAvailable ? "Available" : `${status} left`;

  // Function to handle the click event
  const handleCardClick = (event) => {
    if (!isAvailable) {
      event.preventDefault(); // Prevent download if not available
      onUnavailableClick(); // Open the modal
    }
  };

  return (
    <a
      href={isAvailable ? downloadUrl : '#!'}
      onClick={handleCardClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 `}
      data-aos="zoom-in"
    >
      <div className="relative z-10 flex flex-col items-start justify-center overflow-hidden rounded-[7px] bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
        <img className="w-full h-45 rounded-lg" src={image} alt={name} />
        <h4 className="relative z-10 mb-2 w-full text-2xl font-bold text-slate-50 mt-6 text-left">
          {name}
        </h4>
        <span className={`inline-flex items-center gap-x-1.5 rounded-sm px-2 py-1 text-xs font-medium ${badgeClass}`}>
          {isAvailable ? (
            <svg className="h-1.5 w-1.5" viewBox="0 0 6 6" aria-hidden="true">
              <circle cx="3" cy="3" r="3" />
            </svg>
          ) : (
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {badgeText}
        </span>
        <p className="relative z-10 text-slate-400 text-left mt-4">
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
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative overflow-hidden w-full max-w-lg rounded-lg shadow-xl cursor-default bg-gradient-to-br from-slate-900 to-teal-500 p-6 text-white"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-teal-600 grid place-items-center mx-auto">
                <FiAlertCircle />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Not Available Yet
              </h3>
              <p className="text-center mb-6">
              Subscribe to be informed on the day this CV is released
              </p>
              <News></News>
              <div className="flex gap-2 w-full mt-6">
                <button
                  onClick={handleFollowUsClick}
                  className="w-full py-2 font-semibold text-white bg-slate-900 rounded flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
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

export default ResponsiveCards;
