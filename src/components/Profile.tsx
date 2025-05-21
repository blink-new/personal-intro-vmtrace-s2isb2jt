import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  "hehe haha",
  "i code",
  "robux",
  "azerbaijan tech",
  "professional skidder",
];

const avatarUrl = "https://avatars.githubusercontent.com/u/1440588434?v=4"; // fallback to github avatar

const Profile = () => {
  const [quoteIdx, setQuoteIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIdx((i) => (i + 1) % quotes.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <img
          src={avatarUrl}
          alt="vmtrace avatar"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover bg-gray-200"
        />
      </div>
      <h1 className="text-3xl font-bold text-white drop-shadow-lg">vmtrace</h1>
      <div className="h-8 flex items-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={quoteIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-lg text-blue-300 font-mono px-4"
          >
            {quotes[quoteIdx]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Profile;
