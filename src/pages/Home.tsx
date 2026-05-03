import { motion } from 'motion/react';
import { Plane, Heart, Smartphone, MessageCircle, ArrowRight, UserCircle, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MotionLink = motion.create(Link);

export default function Home() {
  const [isAirplaneMode, setIsAirplaneMode] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-green-50 rounded-full blur-3xl opacity-50 select-none pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-green-50 rounded-full blur-3xl opacity-50 select-none pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-right lg:text-right">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-primary-green font-bold text-sm tracking-wide"
              >
                <Heart size={16} /> ممش لازم تكون مثالي... بس لازم تكون حاضر
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl lg:text-8xl font-black font-display text-primary-green leading-tight"
              >
                وضع طيران
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl lg:text-3xl font-bold text-gray-800 leading-relaxed max-w-xl"
              >
                افصل عن الدوشة… واسمع اللي محتاجك.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-600 leading-relaxed max-w-xl"
              >
                مش كل طفل بيطلب الاهتمام بصوت عالي. أحيانًا السكوت بيكون رسالة. دقايق بسيطة من وقتك ممكن تفرق سنين في علاقتكم.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-start"
              >
                <Link to="/about" className="px-10 py-5 bg-primary-green text-white text-xl font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-green-100 flex items-center justify-center gap-2">
                  ابدأ الرحلة <ArrowRight size={24} />
                </Link>
                <Link to="/tips" className="px-10 py-5 bg-white text-primary-green border-2 border-primary-green/20 text-xl font-bold rounded-2xl hover:bg-green-50 active:scale-95 transition-all flex items-center justify-center">
                  اعرف إزاي تساعد ابنك
                </Link>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-sm font-medium text-gray-400"
              >
                * خطوة بسيطة النهارده.. أمان حقيقي لبكره
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center items-center"
            >
              {/* Interaction Mockup */}
              <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[8px] border-slate-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-10" />
                <div className="h-full w-full bg-white rounded-[2.5rem] overflow-hidden relative flex flex-col items-center p-8 text-center pt-20">
                  
                  <AnimatePresence mode="wait">
                    {!isAirplaneMode ? (
                      <motion.div
                        key="distraction"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-6"
                      >
                        <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                          <Smartphone size={40} className="text-soft-red rotate-12" />
                        </div>
                        <h3 className="text-xl font-black text-gray-900 font-display italic">دوشة العالم مابتخلصش</h3>
                        <p className="text-gray-500 text-sm italic tracking-tight">إشعارات، شغل، ضغط، فيديوهات...</p>
                        <div className="space-y-2">
                          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <motion.div animate={{ width: ['0%', '100%'] }} transition={{ duration: 3, repeat: Infinity }} className="h-full bg-soft-red" />
                          </div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest italic">مستوى المشتتات: مرتفع جداً</p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="connected"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-6"
                      >
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <UserCircle size={48} className="text-primary-green" />
                        </div>
                        <h3 className="text-xl font-black text-primary-green font-display italic tracking-tight">أهلاً بك في عالم طفلك</h3>
                        <p className="text-gray-500 text-sm">هنا مفيش إشعارات، في صوت ابنك بس.</p>
                        <div className="flex justify-center gap-2">
                          {[1,2,3].map(i => (
                            <motion.div 
                              key={i}
                              animate={{ scale: [1, 1.2, 1] }} 
                              transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                              className="w-3 h-3 bg-primary-green rounded-full opacity-50" 
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="absolute bottom-12 inset-x-0 px-8">
                     <div className="bg-gray-100 p-4 rounded-3xl flex justify-between items-center airplane-toggle-shadow">
                        <span className={`text-sm font-black italic transition-colors ${isAirplaneMode ? 'text-primary-green' : 'text-gray-400'}`}>وضع طيران</span>
                        <button 
                          onClick={() => setIsAirplaneMode(!isAirplaneMode)}
                          className={`w-14 h-8 rounded-full relative transition-colors duration-300 ${isAirplaneMode ? 'bg-primary-green' : 'bg-gray-300'}`}
                        >
                          <motion.div 
                            animate={{ x: isAirplaneMode ? 28 : 2 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-sm flex items-center justify-center"
                          >
                             <Plane size={12} className={isAirplaneMode ? 'text-primary-green' : 'text-gray-400'} />
                          </motion.div>
                        </button>
                     </div>
                     <p className="mt-4 text-[10px] text-gray-400 font-bold tracking-widest italic">اضغط لتفعيل الهدوء</p>
                  </div>
                </div>
              </div>

              {/* Floating Icons Background */}
              <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl text-primary-green"><Heart size={32} /></motion.div>
              <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute top-40 -left-20 bg-white p-4 rounded-2xl shadow-xl text-primary-green"><MessageCircle size={32} /></motion.div>
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 0.5 }} className="absolute bottom-20 -right-20 bg-white p-4 rounded-2xl shadow-xl text-primary-green"><UserCircle size={32} /></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee message */}
      <div className="bg-primary-green py-4 overflow-hidden flex whitespace-nowrap border-y-4 border-white">
        {[1,2,3,4,5].map(i => (
          <motion.div 
            key={i}
            animate={{ x: [0, i % 2 === 0 ? 1000 : -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-8 mx-4"
          >
            <span className="text-white text-2xl font-black font-display italic">افصل.. اسمع.. أنت الأمان</span>
            <Plane className="text-white" />
            <span className="text-white text-2xl font-black font-display italic">وضع طيران</span>
            <Heart className="text-white fill-white" />
          </motion.div>
        ))}
      </div>

      {/* Emotional Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl lg:text-5xl font-black font-display text-gray-900 italic tracking-tight italic tracking-tighter">إحنا مش بنطلب منك تبقى مثالي</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">إحنا بنفكرك إن ابنك محتاج يحس إن له مكان وسط يومك.</p>
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
                className="bg-green-50 p-10 rounded-[3rem] text-center space-y-6 border border-green-100 shadow-sm transition-all hover:shadow-xl hover:shadow-green-100 group"
              >
                <div className="text-6xl group-hover:scale-125 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-black text-primary-green font-display italic">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-bold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Snapshot */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-green-100/30 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-black font-display text-gray-900 flex items-center justify-center gap-4 italic tracking-tight">
              المشكلة مش في الموبايل بس <Smartphone className="text-soft-red" />
            </h2>
            <p className="text-xl text-gray-500 font-medium">المشكلة في كل مرة الطفل بيحاول يتكلم… ومحدش بيسمع.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: 'الشغل', color: 'bg-blue-50 border-blue-100 text-blue-600' },
              { label: 'الموبايل', color: 'bg-red-50 border-red-100 text-soft-red' },
              { label: 'الضغط', color: 'bg-orange-50 border-orange-100 text-orange-600' },
              { label: 'التوتر', color: 'bg-purple-50 border-purple-100 text-purple-600' },
              { label: 'الوقت', color: 'bg-amber-50 border-amber-100 text-amber-600' },
              { label: 'التفكير الزائد', color: 'bg-indigo-50 border-indigo-100 text-indigo-600' }
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

          <div className="mt-20 max-w-4xl mx-auto text-center p-12 bg-white rounded-[4rem] shadow-2xl shadow-green-100/50 border border-green-50">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight italic"
            >
               كل مرة بتقول <span className="text-soft-red">“مش دلوقتي”</span>... <br />
               هو ممكن يفهم <span className="text-primary-green">“أنا مش مهم”</span>.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quick Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-right lg:text-center space-y-4 mb-20">
            <h2 className="text-4xl lg:text-5xl font-black font-display text-gray-900 italic">لما تسمع ابنك… إيه اللي بيتغير؟</h2>
            <p className="text-xl text-gray-500 font-medium">خطوات بسيطة بتعمل فرق عميق في حياة طفلك.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'ثقته في نفسه بتزيد', icon: <CheckCircle2 className="text-primary-green" /> },
              { title: 'خوفه بيقل', icon: <CheckCircle2 className="text-primary-green" /> },
              { title: 'بيحكي بدل ما يكتم', icon: <CheckCircle2 className="text-primary-green" /> },
              { title: 'علاقتكم بتقوى', icon: <CheckCircle2 className="text-primary-green" /> },
              { title: 'بيحس بالأمان', icon: <CheckCircle2 className="text-primary-green" /> },
              { title: 'بيعرف يعبر عن مشاعره', icon: <CheckCircle2 className="text-primary-green" /> }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 p-8 bg-green-50 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-all font-bold italic text-lg"
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
      <section className="py-32 bg-primary-green relative overflow-hidden">
        <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <h2 className="text-5xl lg:text-7xl font-black text-white font-display italic">جرب وضع طيران النهارده</h2>
            <p className="text-2xl text-green-50 leading-relaxed font-bold">اقفل المشتتات… وافتح مساحة آمنة بينك وبين ابنك.</p>
            <div className="pt-8">
              <Link to="/contact" className="px-16 py-6 bg-white text-primary-green text-2xl font-black rounded-[2rem] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/20 italic">
                ابدأ بخطوة
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
