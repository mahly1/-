import { motion } from 'motion/react';
import { AlertTriangle, Ghost, Frown, ShieldAlert, Zap, TrendingDown } from 'lucide-react';

export default function RisksOfIgnoring() {
  const risks = [
    {
      title: 'الإحساس بعدم الأهمية',
      text: 'لما الطفل يحاول يتكلم أكتر من مرة ومحدش يركز معاه، بيبدأ يصدق إن صوته مالوش قيمة، وإن هو نفسه "مش مهم".',
      icon: Ghost,
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    },
    {
      title: 'الكتمان العاطفي',
      text: 'الطفل بيفهم إن ماحدش هيهتم بمشاعره، فيقرر يدفنها جواه، وده بيخلق حاجز كبير بينه وبين أهله مستقبلاً.',
      icon: ShieldAlert,
      color: 'text-red-600',
      bg: 'bg-red-50'
    },
    {
      title: 'ضعف الثقة بالنفس',
      text: 'التجاهل المتكرر بيخلي الطفل يشك في صحة مشاعره وأفكاره، فبيكبر وهو متردد وخايف يغلط.',
      icon: TrendingDown,
      color: 'text-rose-600',
      bg: 'bg-rose-50'
    },
    {
      title: 'البحث عن الاهتمام بره',
      text: 'لما الطفل مش بيلاقي مساحة آمنة في البيت، بيدور عليها في أي مكان تاني، وده ممكن يعرضه لمخاطر كتير.',
      icon: Zap,
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    }
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
            className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <AlertTriangle className="text-soft-red w-10 h-10" />
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-black font-display text-gray-900 italic tracking-tighter">لما الطفل ميتسمعش</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">الرسالة بتوصله غلط... حتى لو حبك ملوش حدود.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {risks.map((risk, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className={`${risk.bg} p-10 rounded-[3rem] border border-transparent hover:border-red-100 transition-all space-y-6 shadow-sm hover:shadow-xl font-bold italic`}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-sm">
                  <risk.icon className={risk.color} size={32} />
                </div>
                <h3 className={`text-2xl font-black ${risk.color} font-display italic`}>{risk.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg italic tracking-tight">{risk.text}</p>
            </motion.div>
          ))}
        </div>

        <section className="bg-red-50 p-12 lg:p-20 rounded-[4rem] border-2 border-red-100 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-right">
              <h2 className="text-4xl font-black text-soft-red font-display italic tracking-tight flex items-center gap-4">
                 إشارات محتاجة تاخد بالك منها 
              </h2>
              <p className="text-xl text-gray-600 font-bold italic leading-relaxed">
                أحيانًا السلوك الصعب هو الطريقة الوحيدة اللي الطفل بيعرف يقول بيها "أنا محتاجك" أو "أنا مش مسموع".
              </p>
              <div className="grid gap-4">
                {[
                  { label: 'ابنك بقى ساكت أكتر من الطبيعي', icon: Frown },
                  { label: 'بيتعصب بسرعة على أتفه الأسباب', icon: Zap },
                  { label: 'بيحاول يلفت الانتباه بأي طريقة غلط', icon: AlertTriangle },
                  { label: 'بيقول جمل زي "محدش فاهمني" أو "مش مهم"', icon: ShieldAlert }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm font-bold italic">
                     <item.icon className="text-soft-red flex-shrink-0" size={20} />
                     <span className="text-lg text-gray-800">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
               <motion.div
                 animate={{ rotate: [0, 2, -2, 0] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-red-100 space-y-6 text-center border-b-8 border-soft-red"
               >
                 <h3 className="text-3xl font-black text-gray-900 italic">كلمة أخيرة</h3>
                 <p className="text-xl text-gray-600 font-bold leading-relaxed italic tracking-tight underline decoration-soft-red/20 decoration-8 underline-offset-4">
                   تجاهل مشاعره دلوقتي.. هو اللي بيبني الحيطان اللي هتفرق بينكم لما يكبر. اهدم الحيطة النهاردة بالاستماع.
                 </p>
               </motion.div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
