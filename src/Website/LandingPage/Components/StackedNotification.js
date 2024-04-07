import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";

// Notification TTL (Time To Live) - duration for which notification is shown
const NOTIFICATION_TTL = 5000;

// StackedNotifications component is now just for showing the notifications
const StackedNotifications = ({ text }) => {
  const [notification, setNotification] = useState(text ? { text, id: Date.now() } : null);

  useEffect(() => {
    if (text) {
      // Automatically set a new notification when text is provided
      setNotification({ text, id: Date.now() });
    }
  }, [text]);

  const removeNotif = () => {
    setNotification(null);
  };

  useEffect(() => {
    let timeoutRef;
    if (notification) {
      timeoutRef = setTimeout(removeNotif, NOTIFICATION_TTL);
    }
    return () => clearTimeout(timeoutRef);
  }, [notification]);

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          layout
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="p-4 w-80 flex items-start rounded-lg gap-2 text-sm font-medium shadow-lg text-white bg-violet-600 fixed z-50 bottom-4 right-4"
        >
          <FiAlertCircle className="text-3xl absolute -top-4 -left-4 p-2 rounded-full bg-white text-violet-600 shadow" />
          <span>{notification.text}</span>
          <button onClick={removeNotif} className="ml-auto mt-0.5">
            <FiX />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StackedNotifications;
