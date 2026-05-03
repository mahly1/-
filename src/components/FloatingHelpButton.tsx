import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FloatingHelpButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.8 }}
            className="mb-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-[250px] relative"
          >
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 bg-gray-100 rounded-full p-1 text-gray-500 hover:bg-gray-200 transition-colors"
            >
              <X size={12} />
            </button>
            <p className="text-sm font-bold text-gray-800 mb-2">محتاج مساعدة في التعامل مع طفلك؟</p>
            <Link 
              to="/contact" 
              className="text-xs font-bold text-primary-green hover:underline flex items-center gap-1"
              onClick={() => setShowTooltip(false)}
            >
              تحدث معنا الآن
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowTooltip(!showTooltip)}
        className="w-14 h-14 bg-primary-green text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-300 relative overflow-hidden group"
      >
        <MessageCircle size={28} className="relative z-10" />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-white"
        />
      </motion.button>
    </div>
  );
}
