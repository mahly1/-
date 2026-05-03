import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Plane, Heart, Info, MessageCircle, AlertTriangle, BookOpen, UserCheck, HelpCircle } from 'lucide-react';

const navLinks = [
  { name: 'الرئيسية', path: '/', icon: Plane },
  { name: 'عن الحملة', path: '/about', icon: Info },
  { name: 'ليه نسمعهم؟', path: '/why-listening', icon: Heart },
  { name: 'المخاطر', path: '/risks', icon: AlertTriangle },
  { name: 'نصائح', path: '/tips', icon: MessageCircle },
  { name: 'دليل الأب والأم', path: '/parent-guide', icon: UserCheck },
  { name: 'تواصل معنا', path: '/contact', icon: HelpCircle },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3 shadow-sm border-b border-emerald-100' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary-green rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform shadow-lg shadow-emerald-200">
              <div className="w-5 h-[2px] bg-white rounded-full"></div>
            </div>
            <span className="text-2xl font-bold font-display text-emerald-900 tracking-tight">وضع طيران</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary-green ${
                  location.pathname === link.path ? 'text-primary-green border-b-2 border-primary-green' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/tips" 
              className="bg-primary-green text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all"
            >
              ابدأ الرحلة
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed inset-0 top-[60px] bg-white z-40 lg:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                    location.pathname === link.path ? 'bg-green-50 text-primary-green' : 'hover:bg-gray-50'
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  <span className="text-lg font-bold">{link.name}</span>
                </Link>
              ))}
              <Link
                to="/tips"
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-primary-green text-white text-center p-4 rounded-2xl font-bold"
              >
                ابدأ وضع طيران
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
