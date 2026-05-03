import { motion } from 'motion/react';
import { BookOpen, Download, PlayCircle, Share2, FileText, CheckSquare, Clock, Heart } from 'lucide-react';

export default function Resources() {
  const articles = [
    { title: 'إزاي تسمع ابنك؟', time: '5 دقايق' },
    { title: 'علامات إن الطفل محتاج اهتمام', time: '4 دقايق' },
    { title: 'إزاي تتكلم مع طفل زعلان؟', time: '6 دقايق' },
    { title: 'الفرق بين التربية والسيطرة', time: '7 دقايق' },
    { title: 'ليه الطفل بيكتم؟', time: '5 دقايق' }
  ];

  const downloads = [
    { title: 'ورقة تحدي 7 أيام', icon: CheckSquare },
    { title: 'قائمة جمل تساعدك تسمع ابنك', icon: FileText },
    { title: 'دليل التعامل مع نوبات الغضب', icon: Heart },
    { title: 'جدول وقت عائلي أسبوعي', icon: Clock }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <BookOpen className="text-blue-600 w-10 h-10" />
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-black font-display text-gray-900 italic tracking-tighter">الموارد والأدوات</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">كل اللي محتاجه علشان تبدأ خطوة عملية ومستمرة مع طفلك.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          {/* Articles */}
          <section className="space-y-8">
             <h2 className="text-3xl font-black text-gray-900 flex items-center gap-4 italic tracking-tight">
               <FileText className="text-primary-green" /> مقالات قصيرة
             </h2>
             <div className="grid gap-4 font-bold italic">
               {articles.map((a, i) => (
                 <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex justify-between items-center hover:bg-white hover:shadow-lg transition-all cursor-pointer">
                   <span className="text-lg text-gray-800">{a.title}</span>
                   <span className="text-sm text-gray-400">{a.time} قراءة</span>
                 </div>
               ))}
             </div>
          </section>

          {/* Downloads */}
          <section className="space-y-8">
             <h2 className="text-3xl font-black text-gray-900 flex items-center gap-4 italic tracking-tight">
               <Download className="text-primary-green" /> أدلة قابلة للتحميل
             </h2>
             <div className="grid gap-4 font-bold italic">
               {downloads.map((d, i) => (
                 <div key={i} className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 flex justify-between items-center hover:bg-blue-50 transition-all cursor-pointer group">
                   <div className="flex items-center gap-4">
                     <d.icon className="text-blue-600" />
                     <span className="text-lg text-gray-800">{d.title}</span>
                   </div>
                   <Download size={20} className="text-blue-400 group-hover:text-blue-600 transition-colors" />
                 </div>
               ))}
             </div>
          </section>
        </div>

        {/* Videos Section */}
        <section className="py-24 border-t border-gray-100 mb-20">
           <h2 className="text-4xl font-black text-gray-900 text-center mb-16 italic tracking-tight">فيديوهات الحملة</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               'إعلان الحملة الرئيسي',
               'قصة طفل مش مسموع',
               'رسالة للأب والأم',
               'دقيقة وضع طيران'
             ].map((v, i) => (
               <div key={i} className="group cursor-pointer">
                 <div className="aspect-video bg-gray-100 rounded-3xl relative overflow-hidden flex items-center justify-center mb-4 italic tracking-tighter">
                    <PlayCircle size={48} className="text-primary-green opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    <div className="absolute inset-0 bg-primary-green/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
                 <h4 className="text-lg font-black text-gray-800 italic underline decoration-transparent group-hover:decoration-primary-green transition-all decoration-4 underline-offset-4">{v}</h4>
               </div>
             ))}
           </div>
        </section>

        {/* Social Share */}
        <div className="bg-primary-green p-12 lg:p-20 rounded-[4rem] text-white text-center space-y-8 relative overflow-hidden italic">
           <div className="absolute top-0 right-0 p-12 opacity-10">
             <Share2 size={150} />
           </div>
           <h2 className="text-4xl lg:text-5xl font-black font-display relative z-10">شارك الرسالة</h2>
           <p className="text-xl text-green-50 max-w-2xl mx-auto font-bold relative z-10 leading-relaxed">
             يمكن توصل لبيت محتاج يسمعها ويغير حياة طفل للأبد. خليك جزء من نشر الوعي بالتواصل الحقيقي.
           </p>
           <div className="flex flex-wrap justify-center gap-4 relative z-10">
             <button className="px-8 py-4 bg-white text-primary-green rounded-2xl font-black flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10">
               <Share2 size={24} /> شارك على فيسبوك
             </button>
             <button className="px-8 py-4 bg-white/10 text-white rounded-2xl font-black border border-white/20 flex items-center gap-3 hover:bg-white/20 transition-all shadow-xl">
               نسخ الرابط
             </button>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
