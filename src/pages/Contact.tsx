import { motion } from 'motion/react';
import { HelpCircle, Send, ShieldCheck, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { q: 'هل الحملة بتهاجم الأهالي؟', a: 'لا طبعاً، الحملة بتدعم الأهالي وبتفكرهم بخطوات بسيطة وواقعية في وسط ضغوط الحياة.' },
    { q: 'أبدأ منين لو علاقتي بابني بعيدة؟', a: 'ابدأ بسؤال بسيط النهاردة، سيب موبايلك واقعد معاه 10 دقايق حقيقية بس.' },
    { q: 'لو ابني مش عايز يتكلم؟', a: 'ماتضغطش عليه، خليك متاح وحسسه بالأمان وإنك موجود دايماً أول ما يحب يحكي.' },
    { q: 'هل لازم أكون فاضي طول اليوم؟', a: 'لا، المادة مش في الكمية، المادة في الجودة. 10 دقايق بتركيز كامل أهم من 5 ساعات وأنت ماسك موبايلك.' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 space-y-4">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <HelpCircle className="text-blue-600 w-10 h-10" />
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-black font-display text-gray-900 italic tracking-tighter">محتاج مساعدة؟</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">لو حاسس إنك محتاج تفهم ابنك أكتر، أو مش عارف تبدأ الكلام معاه، ابعتلنا.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          {/* Contact Form */}
          <section className="bg-gray-50 p-10 lg:p-14 rounded-[3.5rem] border border-gray-100 shadow-sm space-y-8 font-bold italic">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-black tracking-widest px-2 italic uppercase">الاسم بالكامل</label>
                <input type="text" className="w-full bg-white border border-gray-200 rounded-2xl p-4 focus:ring-4 focus:ring-primary-green/10 focus:border-primary-green transition-all placeholder:text-gray-300" placeholder="اكتب اسمك هنا..." />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-black tracking-widest px-2 italic uppercase">أنت أب ولا أم؟</label>
                  <select className="w-full bg-white border border-gray-200 rounded-2xl p-4 focus:ring-4 focus:ring-primary-green/10 focus:border-primary-green transition-all">
                    <option>أب</option>
                    <option>أم</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-black tracking-widest px-2 italic uppercase">عمر الطفل</label>
                  <input type="number" className="w-full bg-white border border-gray-200 rounded-2xl p-4 focus:ring-4 focus:ring-primary-green/10 focus:border-primary-green transition-all" placeholder="مثلاً: 7" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-black tracking-widest px-2 italic uppercase">نوع المساعدة</label>
                <select className="w-full bg-white border border-gray-200 rounded-2xl p-4 focus:ring-4 focus:ring-primary-green/10 focus:border-primary-green transition-all">
                  <option>ابني مش بيحكي</option>
                  <option>ابني عصبي</option>
                  <option>مش عارف أتعامل معاه</option>
                  <option>محتاج نصائح تواصل</option>
                  <option>استشارة عامة</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-black tracking-widest px-2 italic uppercase">رسالتك</label>
                <textarea rows={4} className="w-full bg-white border border-gray-200 rounded-2xl p-4 focus:ring-4 focus:ring-primary-green/10 focus:border-primary-green transition-all placeholder:text-gray-300" placeholder="احكي لنا أكتر عن اللي شاغلك..." />
              </div>
            </div>

            <button className="w-full py-5 bg-primary-green text-white text-xl font-black rounded-2xl hover:scale-[1.02] active:scale-95 shadow-xl shadow-green-100 transition-all flex items-center justify-center gap-3 italic">
              ابعت طلبك <Send size={24} />
            </button>

            <div className="pt-6 border-t border-gray-200 flex items-center justify-center gap-2 text-primary-green text-sm font-black italic italic tracking-tighter italic">
               <ShieldCheck size={16} /> كل رسالة بتتوصل بسرية واحترام تامل.
            </div>
          </section>

          {/* Contact Info & FAQ */}
          <div className="space-y-16">
            <section className="space-y-8">
              <h3 className="text-3xl font-black text-gray-900 font-display italic tracking-tight">معلومات التواصل</h3>
              <div className="grid gap-6">
                {[
                  { icon: Mail, label: 'info@waday-tayaran.org', desc: 'راسلنا في أي وقت' },
                  { icon: Phone, label: '16xxx', desc: 'الخط الساخن (قريباً)' },
                  { icon: MapPin, label: 'القاهرة، مصر', desc: 'مقر الحملة الرئيسي' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-md cursor-default italic">
                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-primary-green flex-shrink-0">
                      <item.icon />
                    </div>
                    <div>
                      <div className="text-xl font-black text-gray-900 italic tracking-tight">{item.label}</div>
                      <div className="text-gray-400 text-sm font-bold tracking-tight italic tracking-tighter">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <h3 className="text-3xl font-black text-gray-900 font-display italic tracking-tight">الأسئلة الشائعة</h3>
              <div className="grid gap-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden italic font-bold italic tracking-tight">
                    <button 
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full p-6 text-right flex items-center justify-between font-bold text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-lg font-black italic italic tracking-tight">{faq.q}</span>
                      <ChevronDown className={`transition-transform text-primary-green ${activeFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: activeFaq === idx ? 'auto' : 0, opacity: activeFaq === idx ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-500 leading-relaxed border-t border-gray-50">
                        {faq.a}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-red-50 p-8 rounded-3xl border border-red-100 italic font-bold italic tracking-tight">
               <p className="text-soft-red text-sm font-bold leading-relaxed italic tracking-tight flex items-start gap-4">
                  <AlertTriangle className="flex-shrink-0 mt-1" />
                  لو في خطر مباشر على الطفل أو على أي شخص، تواصل فورًا مع مختص أو جهة دعم قريبة منك أو اتصل بنجدة الطفل 16000.
               </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
