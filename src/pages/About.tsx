import { motion } from 'motion/react';
import { Target, Lightbulb, Users, ShieldAlert, Plane } from 'lucide-react';

export default function About() {
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
            <Plane className="text-primary-green w-10 h-10" />
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-black font-display text-slate-900 italic tracking-tighter">عن الحملة</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium">تعرّف على قصتنا وليه قررنا إننا نكون "وضع طيران".</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-3xl font-black text-primary-green font-display italic">فكرة الحملة</h2>
              <p className="text-lg text-slate-600 leading-relaxed font-bold italic">
                "وضع طيران" هي مش بس حملة، هي صرخة هادية لكل أب وأم تاهوا في زحمة الحياة. الحملة اتولدت من ملاحظتنا لأطفال بيحاولوا يلفتوا انتباه أهلهم بكل الطرق، من السكوت المريب لحد العصبية المفرطة، وكل ده علشان لحظة اهتمام حقيقية.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-black text-primary-green font-display italic">ليه اسمها وضع طيران؟</h2>
              <p className="text-lg text-slate-600 leading-relaxed font-bold italic">
                لأننا لما بنفعل "وضع طيران" على موبايلاتنا، إحنا بنمنع أي تشويش خارجي يوصلنا. وده بالظبط اللي محتاجينه واحنا مع أطفالنا: إننا نقفل أي تشويش خارجي (شغل، موبايل، قلق، ضغط) ونخلي "الارسال والاستقبال" مفتوح بس لقلب وعين طفلنا.
              </p>
            </section>
          </div>
          
          <div className="bg-emerald-50 p-12 rounded-[4rem] relative border border-emerald-100">
            <div className="absolute top-0 right-0 p-8">
              <Lightbulb className="w-12 h-12 text-primary-green opacity-20" />
            </div>
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 border border-emerald-50">
                  <Target className="text-primary-green" />
                </div>
                <div>
                    <h3 className="text-xl font-black text-slate-900 mb-2 italic">رسالتنا</h3>
                    <p className="text-slate-600 font-bold italic">إننا نرجع الأمان للبيوت من خلال الاستماع والاهتمام، ونساعد الأهالي يكتشفوا إن التربية بتبدأ من تحت العين وتواصل القلوب.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 border border-emerald-50">
                  <Users className="text-primary-green" />
                </div>
                <div>
                    <h3 className="text-xl font-black text-slate-900 mb-2 italic">مين بنخاطب؟</h3>
                    <p className="text-slate-600 font-bold italic">كل أب وأم، جد وجدة، وكل حد شايل مسئولية طفل ومحتاج طاقة جديدة علشان يكمل صح.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 border border-emerald-50">
                  <ShieldAlert className="text-primary-green" />
                </div>
                <div>
                    <h3 className="text-xl font-black text-slate-900 mb-2 italic">إحنا عايزين نغير إيه؟</h3>
                    <p className="text-slate-600 font-bold italic">عايزين نغير ثقافة "الإهمال غير المقصود" ونبدلها بثقافة "الحضور الكامل" ولو لعشر دقايق في اليوم.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className="py-24 border-t border-emerald-100">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-black font-display text-slate-900 italic tracking-tight italic">رحلة وضع طيران</h2>
            <p className="text-slate-500 font-medium italic">خطوات بسيطة نحو حياة أهدى وأمتن.</p>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 right-1/2 w-1 bg-primary-green/20 -mr-0.5 rounded-full" />
            
            {[
              { title: 'افصل عن المشتتات', text: 'سيب موبايلك، انسى ايميلات الشغل، وخليك هنا ودلوقتي.', icon: Plane },
              { title: 'اسمع بتركيز', text: 'سيب طفلك يحكي، بلاش تقاطع وبلاش تحكم.', icon: Users },
              { title: 'اسأل بحب', text: 'اسأله عن إحساسه، مش بس "عملت إيه في المدرسة؟".', icon: Target },
              { title: 'رد من غير حكم', text: 'خلي رد فعلك فيه احتواء، مش بس توجيه.', icon: ShieldAlert },
              { title: 'خليه يحس بالأمان', text: 'النتيجة هتكون طفل واثق، مرتاح، وشايفك سنده الحقيقي.', icon: Users },
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`mb-16 flex items-center justify-between w-full font-bold italic ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-5/12" />
                <div className="z-10 bg-primary-green w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-black text-xl italic">
                  {idx + 1}
                </div>
                <div className="w-5/12 bg-white p-8 rounded-3xl shadow-xl shadow-emerald-100/50 border border-emerald-50 space-y-4">
                  <h3 className="text-xl font-black text-primary-green italic tracking-tight">{step.title}</h3>
                  <p className="text-slate-600 italic leading-relaxed">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </motion.div>
  );
}
