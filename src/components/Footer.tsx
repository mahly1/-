import { Link } from 'react-router-dom';
import { Plane, Facebook, Twitter, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary-green p-1.5 rounded-lg">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black font-display text-primary-green italic tracking-tighter">وضع طيران</span>
            </Link>
            <p className="text-gray-500 leading-relaxed">
              وضع طيران حملة بتفكرك إن الأمان أحيانًا بيبدأ من إنك تسمع. انفصالك عن العالم الخارجي هو اتصالك الحقيقي بعيلتك.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-primary-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-primary-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-primary-green transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-600 hover:text-primary-green transition-colors">الرئيسية</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary-green transition-colors">عن الحملة</Link></li>
              <li><Link to="/why-listening" className="text-gray-600 hover:text-primary-green transition-colors">ليه نسمعهم؟</Link></li>
              <li><Link to="/risks" className="text-gray-600 hover:text-primary-green transition-colors">المخاطر</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900">مساعدة ودعم</h4>
            <ul className="space-y-4">
              <li><Link to="/tips" className="text-gray-600 hover:text-primary-green transition-colors">النصائح</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-primary-green transition-colors">الموارد</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary-green transition-colors">تواصل معنا</Link></li>
              <li><Link to="/parent-guide" className="text-gray-600 hover:text-primary-green transition-colors">دليل الوالدين</Link></li>
            </ul>
          </div>

          <div className="bg-primary-green/5 p-6 rounded-3xl border border-primary-green/10">
            <h4 className="text-lg font-bold mb-4 text-primary-green flex items-center gap-2">
              <Heart className="w-5 h-5 fill-primary-green" />
              خليك جزء من التغيير
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              شارك الرسالة… يمكن توصل لبيت محتاج يسمعها ويغير حياة طفل.
            </p>
            <Link to="/contact" className="inline-block w-full py-3 bg-primary-green text-white text-center rounded-xl font-bold hover:shadow-lg transition-shadow">
              انضم إلينا
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-400 font-medium">
            افصل.. اسمع.. أنت الأمان &copy; {new Date().getFullYear()} جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
