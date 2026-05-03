import { Link } from 'react-router-dom';
import { Plane, Facebook, Twitter, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-slate py-12 px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between text-white relative z-10">
      <div className="flex flex-col md:flex-row gap-12 mb-8 md:mb-0">
        <div className="flex items-center gap-4">
          <div className="text-3xl font-bold text-primary-emerald">10+</div>
          <div className="text-xs leading-tight text-white/60 uppercase tracking-widest font-bold">
            دقايق كفاية <br/>تغير اليوم
          </div>
        </div>
        <div className="flex items-center gap-4 border-r border-white/10 pr-12">
          <div className="text-3xl font-bold text-primary-emerald">7</div>
          <div className="text-xs leading-tight text-white/60 uppercase tracking-widest font-bold">
            أيام من <br/>التحدي الحقيقي
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex items-center gap-8">
          <span className="text-sm font-bold text-primary-emerald">افصل</span>
          <div className="w-4 h-[1px] bg-white/20"></div>
          <span className="text-sm font-bold">اسمع</span>
          <div className="w-4 h-[1px] bg-white/20"></div>
          <span className="text-sm font-bold text-soft-rose">أنت الأمان</span>
        </div>
        
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
            <Facebook size={18} />
          </div>
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors text-white">
            <Twitter size={18} />
          </div>
        </div>
      </div>
      
      <div className="w-full pt-8 mt-8 border-t border-white/5 text-center md:hidden">
         <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
           وضع طيران &copy; {new Date().getFullYear()}
         </p>
      </div>
    </footer>
  );
}
