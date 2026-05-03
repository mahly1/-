import { motion } from 'motion/react';
import { Heart, ShieldCheck, Zap, MessageCircle, Home, Shield, Smile } from 'lucide-react';

export default function Benefits() {
  const stats = [
    { label: 'دقيقة يوميًا ممكن تفتح كلام كبير', val: '60 ثانية' },
    { label: 'سؤال بسيط ممكن يغير يومه', val: 'سؤال واحد' },
    { label: 'حضن واحد ممكن يطمنه', val: 'حضن دافي' },
    { label: 'رد هادي ممكن يمنع خوف طويل', val: 'رد هادئ' }
  ];

  const benefits = [
    { title: 'أمان نفسي', icon: Shield },
    { title: 'ثقة أقوى', icon: Smile },
    { title: 'علاقة أهدى', icon: Heart },
    { title: 'سلوك أحسن', icon: Zap },
    { title: 'قدرة على التعبير', icon: MessageCircle },
    { title: 'إحساس بالحب', icon: Home }
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
            <ShieldCheck className="text-primary-green w-10 h-10" />
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-black font-display text-gray-900 italic tracking-tighter">فوايد التواصل</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">الكلام البسيط بيعمل فرق كبير جداً في حياة طفلك.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-green-50 rounded-[3rem] border border-green-100 flex flex-col items-center text-center space-y-6 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-b-4 border-primary-green">
                <b.icon size={32} className="text-primary-green" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 font-display italic">{b.title}</h3>
              <p className="text-gray-500 font-bold italic tracking-tight">لما ابنك بيسمع منك كلمة حلوة أو بيلاقي منك وقت، ده بيغير فيه حاجات كتير النهاردة وبكره.</p>
            </motion.div>
          ))}
        </div>

        <section className="bg-primary-green p-12 lg:p-20 rounded-[4rem] text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 -ml-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black font-display italic tracking-tight">قوة الخطوات الصغيرة</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 p-8 rounded-3xl border border-white/20 text-center space-y-4 backdrop-blur-sm"
              >
                <div className="text-3xl font-black italic">{s.val}</div>
                <p className="text-green-50 font-bold italic">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
