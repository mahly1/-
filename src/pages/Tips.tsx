import { motion } from 'motion/react';
import { Lightbulb, CheckCircle2, XCircle, Calendar, MessageCircle, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function Tips() {
  const [checkedDays, setCheckedDays] = useState<number[]>([]);

  const toggleDay = (day: number) => {
    if (checkedDays.includes(day)) {
      setCheckedDays(checkedDays.filter(d => d !== day));
    } else {
      setCheckedDays([...checkedDays, day]);
    }
  };

  const phrases = [
    'أنا سامعك', 'احكيلي أكتر', 'أنا فاهم إنك زعلان', 'مش هحكم عليك',
    'أنا جنبك', 'رأيك مهم', 'إحساسك مفهوم', 'تعالى نفكر سوا', 'شكراً إنك حكيتلي'
  ];

  const badPhrases = [
    'مش دلوقتي', 'إنت مكبر الموضوع', 'اسكت', 'متعيطش',
    'إنت دايمًا كده', 'أنا مش فاضي', 'لما تكبر هتفهم', 'ده كلام فاضي'
  ];

  const challenges = [
    { day: 1, title: 'اسأله عن يومه', text: 'حاول تسأل سؤال مفتوح زي: إيه أكتر حاجة ضحكتك النهاردة؟' },
    { day: 2, title: 'اسمع من غير موبايل', text: 'سيب الموبايل في أوضة تانية واقعد معاه 10 دقايق.' },
    { day: 3, title: 'اعملوا حاجة مع بعض', text: 'ارسموا، العبوا، أو حتى رتبوا حاجة سوا.' },
    { day: 4, title: 'احضنه من غير سبب', text: 'الحضن بيوصل أمان أكتر من كلام كتير.' },
    { day: 5, title: 'خليه يختار نشاط', text: 'سيبه هو القائد النهاردة في وقتكم المخصص.' },
    { day: 6, title: 'اسأله عن حاجة مضايقاه', text: 'افتح مساحة للكلام الصعب بكل هدوء.' },
    { day: 7, title: 'قوله حاجة بتحبها فيه', text: 'ركز على صفة حلوة شفتها فيه خلال الأسبوع.' },
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
            className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Lightbulb className="text-primary-green w-10 h-10" />
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-black font-display text-slate-900 italic tracking-tighter">نصائح وخطوات</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium">طرق بسيطة تبدأ بيها من النهارده وتغير حياتك مع ابنك.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          <section className="bg-emerald-50 p-10 rounded-[3rem] space-y-8 italic font-bold border border-emerald-100">
            <h3 className="text-2xl font-black text-slate-900 italic">قبل ما تسمع:</h3>
            <ul className="space-y-4">
               {[
                 'سيب الموبايل بعيد خالص',
                 'بص في عينه وأنت بتكلمه',
                 'خليك هادي ومسترخي',
                 'متبدأش بلوم أو عتاب',
                 'اسأل سؤال بسيط وهادي'
               ].map((t, i) => (
                 <li key={i} className="flex gap-4 items-start">
                   <CheckCircle2 className="text-primary-emerald flex-shrink-0 mt-1" size={20} />
                   <span>{t}</span>
                 </li>
               ))}
            </ul>
          </section>

          <section className="bg-emerald-50 p-10 rounded-[3rem] space-y-8 italic font-bold border border-emerald-100">
            <h3 className="text-2xl font-black text-slate-900 italic">أثناء الكلام:</h3>
            <ul className="space-y-4">
               {[
                 'متقاطعوش وهو بيحكي',
                 'متقللش من حجم مشاعره',
                 'اسأله: تحب أحل معاك ولا أسمعك؟',
                 'كرر اللي فهمته منه بأسلوبك',
                 'اديله وقته الكامل للتعبير'
               ].map((t, i) => (
                 <li key={i} className="flex gap-4 items-start">
                   <CheckCircle2 className="text-primary-emerald flex-shrink-0 mt-1" size={20} />
                   <span>{t}</span>
                 </li>
               ))}
            </ul>
          </section>

          <section className="bg-emerald-50 p-10 rounded-[3rem] space-y-8 italic font-bold border border-emerald-100">
            <h3 className="text-2xl font-black text-slate-900 italic">بعد الكلام:</h3>
            <ul className="space-y-4">
               {[
                 'اشكره دائمًا إنه حكى لك',
                 'طمنه إنك لسه جنبه ومعاه',
                 'اتفقوا على خطوة صغيرة سوا',
                 'تابع معاه بعدين اللي حكاه',
                 'خليه يحس إن كلامه فرق معاك'
               ].map((t, i) => (
                 <li key={i} className="flex gap-4 items-start">
                   <CheckCircle2 className="text-primary-emerald flex-shrink-0 mt-1" size={20} />
                   <span>{t}</span>
                 </li>
               ))}
            </ul>
          </section>
        </div>

        {/* Phrases sections */}
        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-primary-green font-display italic flex items-center gap-2">جمل تساعدك <MessageCircle /></h3>
            <div className="grid grid-cols-2 gap-4">
              {phrases.map((p, i) => (
                <div key={i} className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 font-bold italic text-center shadow-sm">
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-soft-rose font-display italic flex items-center gap-2">جمل بلاش تقولها <XCircle /></h3>
            <div className="grid grid-cols-2 gap-4">
              {badPhrases.map((p, i) => (
                <div key={i} className="p-4 bg-rose-50 rounded-2xl border border-rose-100 font-bold italic text-center shadow-sm">
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 7 Day Challenge */}
        <section className="bg-dark-slate rounded-[4rem] p-12 lg:p-20 text-white overflow-hidden relative border-8 border-emerald-50/10">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Calendar size={150} />
          </div>
          <div className="text-center mb-16 space-y-4 relative z-10">
            <h2 className="text-4xl lg:text-5xl font-black font-display italic tracking-tight italic">تحدي وضع طيران (7 أيام)</h2>
            <p className="text-emerald-50/60 font-bold italic">7 أيام من التواصل الحقيقي.. جرب ومش هتخسر.</p>
          </div>

          <div className="space-y-4 relative z-10 max-w-4xl mx-auto">
            {challenges.map((c) => (
              <motion.div 
                key={c.day}
                whileHover={{ scale: 1.02 }}
                onClick={() => toggleDay(c.day)}
                className={`p-6 rounded-[2rem] border transition-all cursor-pointer flex items-center gap-6 ${
                  checkedDays.includes(c.day) ? 'bg-primary-emerald border-primary-emerald' : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xl flex-shrink-0 italic tracking-tighter ${
                  checkedDays.includes(c.day) ? 'bg-white text-primary-emerald shadow-lg' : 'bg-white/10 text-white'
                }`}>
                  {c.day}
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-bold italic mb-1">{c.title}</h4>
                  <p className={`text-sm italic ${checkedDays.includes(c.day) ? 'text-emerald-50' : 'text-slate-400'}`}>
                    {c.text}
                  </p>
                </div>
                {checkedDays.includes(c.day) && <CheckCircle2 className="text-white" size={32} />}
              </motion.div>
            ))}
          </div>
        </section>
      </div>

    </motion.div>
  );
}
