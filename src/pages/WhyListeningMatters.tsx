import { motion } from 'motion/react';
import { Ear, HelpCircle, ShieldCheck, Heart, Sparkles, AlertCircle } from 'lucide-react';

export default function WhyListeningMatters() {
  const cards = [
    { title: 'أمان نفسي', text: 'الاستماع بيحسس الطفل إنه مرئي ومهم، وده حجر الأساس في صحته النفسية.', icon: ShieldCheck },
    { title: 'ثقة أقوى', text: 'الطفل اللي بيلاقي أهله بيسمعوه، بيثق في نفسه وقدرته على التواصل.', icon: Sparkles },
    { title: 'علاقة أهدى', text: 'الاستماع بيقلل سوء التفاهم وبيخلق لغة مشتركة بينك وبين طفلك.', icon: Heart },
    { title: 'سلوك أحسن', text: 'كتير من مشاكل السلوك بتختفي لمجرد إن الطفل لقى مساحة يعبر بيها عن اللي جواه.', icon: AlertCircle },
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
            <Ear className="text-primary-green w-10 h-10" />
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-black font-display text-gray-900 italic tracking-tighter">ليه نسمعهم؟</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">الاستماع مش بس سماع أصوات، هو تواصل حقيقي بيبني مستقبل.</p>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-32">
          <section className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-gray-900 font-display italic tracking-tight underline italic tracking-tighter decoration-primary-green decoration-4 underline-offset-8 transition-all">الاستماع مش رفاهية</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-bold italic">
                في عالم مليان دوشة، طفلك محتاج يحس إن صوته له قيمة. الاستماع هو "الأكسجين" العاطفي اللي الطفل بيتنفسه علشان ينمو سوي ومستقر. لما بتسمع لابنك، أنت مش بس بتعرف هو عمل إيه، أنت بتقوله: <span className="text-primary-green">"أنا شايفك، وأنت مهم عندي."</span>
              </p>
              <div className="bg-green-50 p-8 rounded-3xl border-l-8 border-primary-green">
                 <p className="text-primary-green font-black text-xl italic italic leading-relaxed">
                   "الطفل اللي بيتسمع… بيتعلم يتكلم، والطفل اللي بيتصادر عليه… بيتعلم يسكت أو يصرخ."
                 </p>
              </div>
            </div>
             <div className="grid grid-cols-2 gap-6">
                {cards.map((card, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-4 font-bold italic"
                  >
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                      <card.icon className="text-primary-green" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 italic">{card.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{card.text}</p>
                  </motion.div>
                ))}
             </div>
          </section>

          {/* Before & After Interactive Section */}
          <section className="bg-slate-900 rounded-[4rem] p-12 lg:p-20 text-white overflow-hidden relative">
             <div className="absolute top-0 right-0 p-12 opacity-10">
               <HelpCircle size={150} />
             </div>
             <div className="text-center mb-16 space-y-4 relative z-10">
               <h2 className="text-4xl lg:text-5xl font-black font-display italic tracking-tight">الفرق بين طفل مسموع وطفل مهمش</h2>
             </div>

             <div className="grid md:grid-cols-2 gap-8 relative z-10">
               <div className="space-y-6">
                 <h3 className="text-2xl font-black text-soft-red mb-8 italic flex items-center gap-2">قبل الاستماع (الاحتياج) <AlertCircle /></h3>
                 {[
                   'الطفل ساكت بشكل غير طبيعي',
                   'عصبي ومندفع طول الوقت',
                   'بيخاف يحكي لو غلط',
                   'بيحس إنه لوحده في مشاكله',
                   'بيكدب علشان يهرب من حكمك'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 font-bold italic">
                     <span className="text-soft-red font-black text-xl">•</span> {item}
                   </div>
                 ))}
               </div>

               <div className="space-y-6">
                 <h3 className="text-2xl font-black text-primary-green mb-8 italic flex items-center gap-2">بعد الاستماع (الأمان) <ShieldCheck /></h3>
                 {[
                   'بيعبر عن مشاعره بوضوح',
                   'بيطلب مساعدة في الوقت الصح',
                   'بيحكي بصدق ومبيخافش',
                   'بيحس إنه جزء مهم من العيلة',
                   'بيثق في قراراتك وتوجيهك'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 p-5 bg-primary-green/10 rounded-2xl border border-primary-green/20 font-bold italic">
                     <span className="text-primary-green font-black text-xl ml-2 flex-shrink-0">✓</span> {item}
                   </div>
                 ))}
               </div>
             </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
