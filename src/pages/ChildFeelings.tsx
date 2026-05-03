import { motion } from 'motion/react';
import { Smartphone, Heart, MessageCircle, Shield, User, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function ChildFeelings() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const innerVoices = [
    { voice: 'لما بتبص في الموبايل وأنا بتكلم... بحس إني مش مهم', icon: Smartphone, color: 'text-soft-red', bg: 'bg-red-50' },
    { voice: 'لما بتسمعني للآخر... بحس إني آمن ومحبوب', icon: Shield, color: 'text-primary-green', bg: 'bg-green-50' },
    { voice: 'لما بتزعق قبل ما تفهم... بخاف أحكي لك تاني', icon: Heart, color: 'text-orange-600', bg: 'bg-orange-50' },
    { voice: 'لما بتسألني عن يومي وتسمعني... بحس إنك فاكرني طول الوقت', icon: MessageCircle, color: 'text-blue-600', bg: 'bg-blue-50' },
    { voice: 'لما بتحضني وقت الزعل... الدنيا بتهدى وبحس إن في ظهر لي', icon: User, color: 'text-purple-600', bg: 'bg-purple-50' }
  ];

  const flips = [
    { front: 'عصبية مستمرة', back: 'يمكن طفلك محتاج اهتمام وحُضن حقيقي' },
    { front: 'سكوت مفاجئ', back: 'يمكن خايف من رد فعلك أو حاسس إنه مش مسموع' },
    { front: 'عناد زايد', back: 'يمكن بيحاول يثبت وجوده أو حاسس إن ملوش رأي' },
    { front: 'بكاء كتير', back: 'يمكن مش عارف يعبر عن مشاكله بالكلام' },
    { front: 'تعلق زائد بك', back: 'يمكن حاسس بقلق ومحتاج جرعة أمان إضافية' }
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
            className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Heart className="text-purple-600 w-10 h-10" />
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-black font-display text-gray-900 italic tracking-tighter">مشاعر طفلك</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">هو مش بيطلب كتير… هو بس عايز يحس إنك سامعه وحاسس بيه.</p>
        </div>

        <div className="space-y-8 mb-32">
          {innerVoices.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`${v.bg} p-8 rounded-[3rem] border border-transparent hover:border-gray-100 transition-all flex items-center gap-8 shadow-sm`}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <v.icon className={v.color} size={28} />
              </div>
              <p className={`text-2xl font-black ${v.color} font-display italic italic tracking-tight`}>{v.voice}</p>
            </motion.div>
          ))}
        </div>

        <section className="py-24 border-t border-gray-100">
           <div className="text-center mb-16 space-y-4">
             <h2 className="text-4xl font-black text-gray-900 font-display italic flex items-center justify-center gap-4">
               افهم الرسالة (اضغط على البطاقة) <HelpCircle className="text-primary-green" />
             </h2>
             <p className="text-lg text-gray-500 font-bold italic tracking-tight">سلوك الطفل دايماً وراه رسالة محتاجة تتقرأ بهدوء.</p>
           </div>

           <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {flips.map((f, i) => (
                <div 
                  key={i} 
                  className="perspective-1000 h-64 w-full cursor-pointer group"
                  onClick={() => setFlippedIndex(flippedIndex === i ? null : i)}
                >
                  <motion.div
                    animate={{ rotateY: flippedIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
                    className="relative h-full w-full preserve-3d style-3d"
                  >
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden bg-white border-4 border-primary-green/20 rounded-[2rem] p-6 flex flex-col items-center justify-center text-center shadow-xl group-hover:border-primary-green transition-colors">
                      <div className="text-xl font-black text-gray-900 font-display italic tracking-tight">{f.front}</div>
                      <div className="mt-4 text-[10px] text-gray-400 font-black tracking-widest italic uppercase">سلوك الطفل</div>
                    </div>
                    {/* Back */}
                    <div 
                      className="absolute inset-0 backface-hidden bg-primary-green rounded-[2rem] p-6 flex flex-col items-center justify-center text-center shadow-xl text-white rotate-y-180"
                    >
                      <p className="text-lg font-black italic leading-relaxed italic tracking-tight">{f.back}</p>
                      <div className="mt-4 text-[10px] text-green-100 font-black tracking-widest italic uppercase">الرسالة الخفية</div>
                    </div>
                  </motion.div>
                </div>
              ))}
           </div>
        </section>
      </div>
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </motion.div>
  );
}
