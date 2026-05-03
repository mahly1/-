import { motion } from 'motion/react';
import { UserCheck, ShieldAlert, Heart, HelpCircle, MessageSquare, RefreshCcw } from 'lucide-react';

export default function ParentGuide() {
  const guideItems = [
    { title: 'لو ابنك مش عايز يتكلم', text: 'ماتضغطش عليه. اكتفي بإنك تقوله "أنا هنا لو احتاجتني"، وخليك جنبه في صمت مفيد، ده بيدي أمان أكتر من الأسئلة الكتير.', icon: MessageSquare },
    { title: 'لو ابنك عصبي', text: 'العصبية هي صرخة احتياج. ورا كل "صريخ" في "وجع" أو "كتمان". حاول تحتويه الأول وبعدين افهم السبب.', icon: ShieldAlert },
    { title: 'لو ابنك بيكذب', text: 'الطفل بيكدب غالباً لأنه خايف من رد فعلك. ابنِ الأمان الأول وهتلاقي الصدق جيه لوحده.', icon: Heart },
    { title: 'لو ابنك بيعيط كتير', text: 'البكا مش ضعف، هو طريقة للتواصل. سيبه يفرغ شحنته وطمنه بلمسة إيد أو حضن.', icon: HelpCircle }
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
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <UserCheck className="text-primary-green w-10 h-10" />
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-black font-display text-gray-900 italic tracking-tighter">دليل الأب والأم</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">خطوات عملية للتعامل مع المواقف الصعبة بحكمة وهدوء.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {guideItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="p-10 bg-gray-50 rounded-[3.5rem] border border-gray-100 space-y-6 shadow-sm hover:shadow-xl transition-all font-bold italic"
            >
              <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-md">
                <item.icon className="text-primary-green" size={28} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 font-display italic">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg italic tracking-tight">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <section className="bg-green-50 p-12 lg:p-20 rounded-[4rem] border-2 border-green-100 text-center space-y-8 overflow-hidden relative">
           <div className="absolute top-0 right-0 p-12 opacity-10">
             <RefreshCcw size={150} className="text-primary-green" />
           </div>
           
           <h2 className="text-4xl lg:text-5xl font-black text-primary-green font-display italic tracking-tight relative z-10">لو غلطت… ارجع وصلح</h2>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto font-bold italic leading-relaxed relative z-10">
             مش لازم تكون مثالي. المهم لما تزعق أو تتجاهل، تعرف ترجع وتقول: "أنا آسف، احكيلي تاني". الاعتذار للطفل بيبني شخصية قوية وبيرجع ثقته فيك وفي نفسه.
           </p>

           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
             {[
               'الاعتذار مش ضعف',
               'الرجوع مهم جداً',
               'الطفل بيتعلم منك',
               'العلاقة بتتقوي بالإصلاح'
             ].map((text, idx) => (
               <div key={idx} className="bg-white p-6 rounded-3xl border border-green-100 shadow-sm font-black italic text-primary-green">
                 {text}
               </div>
             ))}
           </div>
        </section>
      </div>
    </motion.div>
  );
}
