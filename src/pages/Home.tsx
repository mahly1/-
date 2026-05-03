import { motion, AnimatePresence } from 'motion/react';
import { Plane, Heart, Smartphone, MessageCircle, ArrowRight, UserCircle, CheckCircle2, Ear } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [isAirplaneMode, setIsAirplaneMode] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative overflow-hidden border-8 border-emerald-50 min-h-screen"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6 text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full text-primary-green text-sm font-bold">
              <span className="w-2 h-2 bg-primary-emerald rounded-full animate-pulse"></span>
              حملة توعية وطنية
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl lg:text-8xl font-black leading-tight text-slate-900 font-display"
            >
              افصل عن الدوشة... <br/>
              <span className="text-primary-green underline decoration-rose-accent decoration-8 transition-colors duration-500 underline-offset-8">واسمع اللي محتاجك</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-500 leading-relaxed max-w-lg font-medium"
            >
              مش كل طفل بيطلب الاهتمام بصوت عالي. أحيانًا السكوت بيكون رسالة.
              دقايق بسيطة من وقتك ممكن تفرق سنين في علاقتكم.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link to="/about" className="bg-slate-900 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl flex items-center gap-3 hover:scale-105 transition-transform">
                <span>ابدأ الرحلة</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/tips" className="bg-white border-2 border-primary-green text-primary-green px-8 py-4 rounded-2xl text-lg font-bold hover:bg-emerald-50 transition-colors">
                اعرف إزاي تساعد ابنك
              </Link>
            </motion.div>
          </div>

          {/* The Toggle Visualized */}
          <div className="lg:col-span-6 flex justify-center relative mt-12 lg:mt-0">
            <div className="w-[300px] h-[480px] bg-slate-900 rounded-[50px] border-[12px] border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 w-full h-8 bg-slate-800 flex justify-center items-end pb-1 z-10">
                <div className="w-16 h-4 bg-slate-900 rounded-b-xl"></div>
              </div>
              
              <div className="p-8 flex flex-col items-center justify-center h-full space-y-12">
                <div className="w-full space-y-4">
                  <div className="flex items-center justify-between">
                     <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">Status: {isAirplaneMode ? 'Family' : 'Disconnected'}</span>
                     <span className="text-emerald-400 text-[10px] font-mono">Safe Zone</span>
                  </div>
                  
                  <div 
                    onClick={() => setIsAirplaneMode(true)}
                    className={`w-full h-24 rounded-3xl p-3 flex items-center transition-all cursor-pointer ${isAirplaneMode ? 'bg-primary-emerald shadow-lg' : 'bg-white/5 opacity-50'}`}
                  >
                    <div className={`flex-1 ${isAirplaneMode ? 'text-white' : 'text-white/60'} pr-4 font-bold`}>
                      وضع العائلة
                      <div className="text-[10px] font-normal opacity-50 uppercase tracking-tighter">{isAirplaneMode ? 'مفعل الآن' : 'خامل'}</div>
                    </div>
                    <div className={`w-20 h-12 rounded-full p-1 flex ${isAirplaneMode ? 'bg-white/20 justify-end' : 'bg-white/10 justify-start'}`}>
                      <div className="w-10 h-10 bg-white rounded-full shadow-lg"></div>
                    </div>
                  </div>

                  <div 
                    onClick={() => setIsAirplaneMode(false)}
                    className={`w-full h-24 rounded-3xl p-3 flex items-center transition-all cursor-pointer ${!isAirplaneMode ? 'bg-rose-500 shadow-lg' : 'bg-white/5 opacity-30'}`}
                  >
                    <div className={`flex-1 ${!isAirplaneMode ? 'text-white' : 'text-white/60'} pr-4 font-bold`}>
                      وضع التشتت
                      <div className="text-[10px] font-normal opacity-50 text-rose-100 uppercase tracking-tighter">{!isAirplaneMode ? 'مفعل بالتلقائي' : 'تم التعطيل'}</div>
                    </div>
                    <div className={`w-20 h-12 rounded-full p-1 flex ${!isAirplaneMode ? 'bg-white/20 justify-start' : 'bg-white/10 justify-end'}`}>
                      <div className="w-10 h-10 bg-white rounded-full shadow-lg opacity-80"></div>
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <div className="text-primary-emerald font-black text-xl italic tracking-tight font-display">أنت الأمان</div>
                  <div className="text-white/60 text-xs font-bold leading-relaxed italic">ابنك محتاج يحس إنه مسموع</div>
                </div>
              </div>
            </div>
            
            {/* Floating Action Cards */}
            <motion.div 
              animate={{ rotate: 6, y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-8 top-1/4 w-48 bg-white p-4 rounded-2xl shadow-xl border border-emerald-100 transform z-20"
            >
              <div className="w-10 h-10 bg-emerald-100 rounded-lg mb-3 flex items-center justify-center text-primary-green">
                <Ear size={20} />
              </div>
              <div className="font-black text-sm text-slate-800 italic">اسمعه بتركيز</div>
              <div className="text-[10px] text-slate-400 leading-tight mt-1 font-bold italic">سيب الموبايل واديله 10 دقايق من وقتك</div>
            </motion.div>
            
            <motion.div 
              animate={{ rotate: -3, y: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute -left-12 bottom-1/4 w-48 bg-white p-4 rounded-2xl shadow-xl border border-rose-100 transform z-20"
            >
              <div className="w-10 h-10 bg-rose-100 rounded-lg mb-3 flex items-center justify-center text-soft-rose">
                <Heart size={20} fill="#f43f5e" />
              </div>
              <div className="font-black text-sm text-slate-800 italic">خليه يحس بالأمان</div>
              <div className="text-[10px] text-slate-400 leading-tight mt-1 font-bold italic">الاعتذار والاحتضان بيبني جسور ثقة</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee message */}
      <div className="bg-dark-slate py-4 overflow-hidden flex whitespace-nowrap border-y-4 border-emerald-50">
        {[1,2,3,4,5].map(i => (
          <motion.div 
            key={i}
            animate={{ x: [0, i % 2 === 0 ? 1000 : -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-8 mx-4"
          >
            <span className="text-white text-2xl font-black font-display italic">افصل.. اسمع.. أنت الأمان</span>
            <Plane className="text-primary-emerald" />
            <span className="text-white text-2xl font-black font-display italic">وضع طيران</span>
            <Heart className="text-soft-rose fill-soft-rose" />
          </motion.div>
        ))}
      </div>

      {/* Emotional Intro */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl lg:text-5xl font-black font-display text-slate-900 italic tracking-tight italic">إحنا مش بنطلب منك تبقى مثالي</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">إحنا بنفكرك إن ابنك محتاج يحس إن له مكان وسط يومك.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'اسمعه', text: 'بتركيز، من غير ما تفكر في ردك الجاي.', icon: '👂' },
              { title: 'بص في عينه', text: 'علشان يحس إنك معاه بكلك، مش بس بودانك.', icon: '👀' },
              { title: 'خليه يحس إن كلامه مهم', text: 'أيًا كان بسيط، بالنسبة له هو العالم كله.', icon: '🌟' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-emerald-50 p-10 rounded-[3rem] text-center space-y-6 border border-emerald-100 shadow-sm transition-all hover:shadow-xl hover:shadow-emerald-100 group"
              >
                <div className="text-6xl group-hover:scale-125 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-black text-emerald-900 font-display italic">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-bold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Snapshot */}
      <section className="py-24 bg-emerald-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-100/30 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-black font-display text-slate-900 flex items-center justify-center gap-4 italic tracking-tight">
              المشكلة مش في الموبايل بس <Smartphone className="text-soft-rose" />
            </h2>
            <p className="text-xl text-slate-500 font-medium">المشكلة في كل مرة الطفل بيحاول يتكلم… ومحدش بيسمع.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: 'الشغل', color: 'bg-white border-slate-200 text-slate-600' },
              { label: 'الموبايل', color: 'bg-rose-50 border-rose-100 text-soft-rose' },
              { label: 'الضغط', color: 'bg-emerald-50 border-emerald-100 text-emerald-600' },
              { label: 'التوتر', color: 'bg-white border-slate-200 text-slate-600' },
              { label: 'الوقت', color: 'bg-white border-slate-200 text-slate-600' },
              { label: 'التفكير الزائد', color: 'bg-white border-slate-200 text-slate-600' }
            ].map((i, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className={`${i.color} p-6 rounded-3xl border text-center font-black text-lg shadow-sm transition-all cursor-default italic`}
              >
                {i.label}
              </motion.div>
            ))}
          </div>

          <div className="mt-20 max-w-4xl mx-auto text-center p-12 bg-white rounded-[4rem] shadow-2xl shadow-emerald-100/50 border border-emerald-50">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight italic"
            >
               كل مرة بتقول <span className="text-soft-rose italic font-display underline decoration-rose-accent decoration-4">“مش دلوقتي”</span>... <br />
               هو ممكن يفهم <span className="text-primary-green italic font-display underline decoration-emerald-200 decoration-4">“أنا مش مهم”</span>.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quick Benefits */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-right lg:text-center space-y-4 mb-20">
            <h2 className="text-4xl lg:text-5xl font-black font-display text-slate-900 italic">لما تسمع ابنك… إيه اللي بيتغير؟</h2>
            <p className="text-xl text-slate-500 font-medium">خطوات بسيطة بتعمل فرق عميق في حياة طفلك.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'ثقته في نفسه بتزيد', icon: <CheckCircle2 className="text-primary-emerald" /> },
              { title: 'خوفه بيقل', icon: <CheckCircle2 className="text-primary-emerald" /> },
              { title: 'بيحكي بدل ما يكتم', icon: <CheckCircle2 className="text-primary-emerald" /> },
              { title: 'علاقتكم بتقوى', icon: <CheckCircle2 className="text-primary-emerald" /> },
              { title: 'بيحس بالأمان', icon: <CheckCircle2 className="text-primary-emerald" /> },
              { title: 'بيعرف يعبر عن مشاعره', icon: <CheckCircle2 className="text-primary-emerald" /> }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 p-8 bg-emerald-50 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-all font-bold italic text-lg"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                  {benefit.icon}
                </div>
                {benefit.title}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-dark-slate relative overflow-hidden">
        <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-primary-emerald/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-96 h-96 bg-soft-rose/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <h2 className="text-5xl lg:text-7xl font-black text-white font-display italic">جرب وضع طيران النهارده</h2>
            <p className="text-2xl text-emerald-50/70 leading-relaxed font-bold">اقفل المشتتات… وافتح مساحة آمنة بينك وبين ابنك.</p>
            <div className="pt-8">
              <Link to="/contact" className="inline-block px-16 py-6 bg-primary-emerald text-white text-2xl font-black rounded-[2rem] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-emerald-900/50 italic">
                ابدأ بخطوة
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
