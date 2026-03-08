import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import PageBanner from "@/components/PageBanner";
import rmtImg from "@/assets/rmt-service.webp";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const RMT = () => {
  const { t } = useLang();

  const pricing = [
    { duration: "30", en: "30 Minutes", zh: "30 分钟", price: "$60.00" },
    { duration: "45", en: "45 Minutes", zh: "45 分钟", price: "$85.00" },
    { duration: "60", en: "60 Minutes", zh: "60 分钟", price: "$115.00" },
    { duration: "90", en: "90 Minutes", zh: "90 分钟", price: "$165.00" },
  ];

  return (
    <div>
      <PageBanner
        title={t("Registered Massage Therapy", "注册按摩治疗")}
        subtitle={t("Professional RMT Services", "专业注册按摩服务")}
      />

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">{t("About RMT", "关于注册按摩治疗")}</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-light mb-6">
                {t("Expert Massage Therapy", "专业按摩治疗")}
              </h2>
              <div className="decorative-line !mx-0 mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {t(
                    "Registered Massage Therapy involves the manipulation of soft tissues of the body including muscles, connective tissue, tendons, ligaments, and joints. It is a clinically-oriented healthcare option that helps alleviate discomfort associated with everyday occupational stresses, muscular over-use, and chronic pain conditions.",
                    "注册按摩治疗涉及对身体软组织的操作，包括肌肉、结缔组织、肌腱、韧带和关节。这是一种以临床为导向的医疗保健选择，有助于缓解与日常职业压力、肌肉过度使用和慢性疼痛相关的不适。"
                  )}
                </p>
                <p>
                  {t(
                    "Our Registered Massage Therapist provides customized treatment plans to address your specific needs, whether you're recovering from an injury, managing chronic pain, or simply seeking relaxation and stress relief.",
                    "我们的注册按摩治疗师提供定制的治疗方案，以满足您的特定需求，无论您是受伤后恢复、管理慢性疼痛，还是仅仅寻求放松和减压。"
                  )}
                </p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <img src={rmtImg} alt="Registered Massage Therapy" className="w-full h-[400px] object-cover rounded-sm shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-section-dark">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">{t("Our Rates", "我们的价格")}</p>
            <h2 className="font-heading text-3xl md:text-5xl text-section-dark-foreground font-light mb-4">
              {t("RMT Pricing", "按摩治疗价格")}
            </h2>
            <div className="decorative-line" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {pricing.map((p) => (
              <motion.div
                key={p.duration}
                className="bg-section-dark-foreground/5 border border-gold/20 p-8 text-center rounded-sm hover:border-gold/50 transition-colors"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h3 className="font-heading text-xl text-section-dark-foreground mb-4">{t(p.en, p.zh)}</h3>
                <div className="decorative-line mb-4" />
                <p className="font-heading text-4xl text-gold">{p.price}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-section-dark-foreground/50 text-xs mt-6 tracking-wider">
            {t("All prices include GST", "所有价格包含GST")}
          </p>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="font-heading text-2xl text-foreground mb-4">{t("Cancellation Policy", "取消政策")}</h3>
          <div className="decorative-line mb-4" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t(
              "Please note that the full private fee will be charged for cancellations made with less than 24 hours' notice. We appreciate your understanding.",
              "请注意，如取消预约不足24小时通知，将收取全额私人费用。感谢您的理解。"
            )}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground font-light mb-4">
            {t("Book Your Massage Today", "今天就预约按摩")}
          </h2>
          <div className="decorative-line mb-6" />
          <Link
            to="/contact-us/"
            className="inline-block px-10 py-4 bg-gold text-primary-foreground text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            {t("Book Now", "立即预约")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RMT;
