import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FloatingHelpButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-24 left-8 z-40 flex flex-col items-start">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.8 }}
            className="mb-4 bg-white p-6 rounded-2xl shadow-2xl border border-rose-100 max-w-[250px] relative"
          >
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 p-1 text-gray-400 hover:text-rose-500 transition-colors"
            >
              <X size={16} />
            </button>
            <p className="text-sm font-bold text-slate-800 mb-3">محتاج مساعدة في التعامل مع طفلك؟</p>
            <Link 
              to="/contact" 
              className="text-xs font-bold text-soft-rose hover:underline flex items-center gap-2"
              onClick={() => setShowTooltip(false)}
            >
              تحدث معنا الآن
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowTooltip(!showTooltip)}
        className="bg-soft-rose text-white px-8 py-3.5 rounded-full font-bold shadow-2xl flex items-center gap-3 z-50"
      >
        <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
        محتاج مساعدة؟
      </motion.button>
    </div>
  );
}
