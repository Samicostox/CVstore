import React, { useEffect,useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle,FiX } from "react-icons/fi";
import { FaTiktok } from 'react-icons/fa'; // Assuming FaTiktok is the TikTok icon
import News from './newsletter2.js';




const ResponsiveCards = () => {
  useEffect(() => {
      AOS.init({ duration: 1000 });
      fetchCards();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [cardsData, setCardsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [notification, setNotification] = useState(null);

  const showSuccessNotification = (message) => {
    setNotification({ id: new Date().getTime(), text: message });
  };




const fetchCards = async () => {
  try {
    const response = await fetch('https://onecvadayback-a45e67a4a10c.herokuapp.com/api/cards/');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    setCardsData(data);
    setIsLoading(false);
  } catch (error) {
    console.error('Failed to fetch cards:', error);
    setIsLoading(false);
  }
};

// Render a loading message or error message depending on the fetch status
if (isLoading) return <p>Loading...</p>;

const handleCardClick = (card) => {
  if (card.status === "available") {
    setIsOpen2(true);
     // Show the modal instead of downloading
    setSelectedCardId(card.id); // Store the card ID
  }
};

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
          onClick={() => handleCardClick(card)}
        
         
           // Ensure downloadUrl is passed to the component
          status={card.status}
          onUnavailableClick={() => setIsOpen(true)}
          onavailableClick={() => setIsOpen2(true)}
        />
      ))}
    </div>
    <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    <AuthenticationModal isOpen={isOpen2} setIsOpen={setIsOpen2} cardId={selectedCardId} showSuccessNotification={showSuccessNotification} />
    <StackedNotifications showNotification={!!notification} notificationContent={notification} />

  </div>
);
      }

const ShimmerBorderCard = ({ name, image, description, status, onUnavailableClick,onavailableClick,onClick  }) => {
  const isAvailable = status === "available";
  const badgeClass = isAvailable ? "bg-green-100 text-green-700 fill-green-500" : "bg-orange-100 text-orange-700 fill-orange-500";
  const badgeText = isAvailable ? "Available" : `${status} left`;
  

  // Function to handle the click event
  const handleCardClick = (event) => {
    if (!isAvailable) {
      event.preventDefault(); // Prevent download if not available
      onUnavailableClick();
      
    }else{
      event.preventDefault(); 
      onavailableClick()
      
    }
  };

  return (
    <a
      href={''}
      onClick={(event) => {
        event.preventDefault(); // Optional: prevents default action if it's a link or a form
        handleCardClick(event);
        onClick(); // Another function you want to call
      }}
      
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


const Notification = ({ text, removeNotif }) => {
  return (
    <motion.div
      initial={{ y: 15, scale: 0.9, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      exit={{ y: -25, scale: 0.9, opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="p-4 w-80 flex items-start rounded-lg gap-2 text-sm font-medium shadow-lg text-white bg-violet-600 fixed z-50 bottom-4 right-4 text-left"
    >
      <FiAlertCircle className="text-xl mr-2" />
      <span>{text}</span>
      <button onClick={removeNotif} className="ml-auto">
        <FiX />
      </button>
    </motion.div>
  );
};

const StackedNotifications = ({ showNotification, notificationContent }) => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (showNotification && notificationContent) {
      setNotification(notificationContent);
    }
  }, [showNotification, notificationContent]);

  const removeNotif = () => {
    setNotification(null);
  };

  return (
    <div className="bg-slate-900 min-h-[200px] flex items-center justify-center">
      <AnimatePresence>
        {notification && (
          <Notification
            removeNotif={removeNotif}
            key={notification.id}
            {...notification}
          />
        )}
      </AnimatePresence>
    </div>
  );
};



const AuthenticationModal = ({ isOpen, setIsOpen, cardId,showSuccessNotification  }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();  // Prevent the form from submitting normally
    const email = event.target.email.value;  // Get the email from the form

    // Data to be sent to the server
    const data = JSON.stringify({
      card_id: cardId,
      email: email
    });

    // API call
    try {
      const response = await fetch('https://onecvadayback-a45e67a4a10c.herokuapp.com/api/send/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const result = await response.json();
        console.log('Success:', result);
        setIsOpen(false);  // Close the modal if the request is successful
        showSuccessNotification(`Email successfully sent to ${email}!`);  // Show success notification
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen">
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-5 border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  We will send you the CV via email
                </h3>
                <button onClick={toggleModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 dark:hover:bg-gray-600 dark:hover:text-white">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="p-5">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Your email</label>
                    <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                  </div>
                  <button type="submit" className="w-full text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};








export default ResponsiveCards;
