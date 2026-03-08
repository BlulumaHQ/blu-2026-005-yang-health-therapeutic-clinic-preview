import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import PageBanner from "@/components/PageBanner";
import acupunctureImg from "@/assets/acupuncture-service.jpg";
import cuppingImg from "@/assets/cupping-service.jpg";
import moxibustionImg from "@/assets/moxibustion-service.jpg";
import acupressureImg from "@/assets/acupressure-service.jpg";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const TCM = () => {
  const { t } = useLang();

  const services = [
    {
      img: acupunctureImg,
      titleEn: "Acupuncture",
      titleZh: "针灸",
      descEn: "Acupuncture uses theories of zang-fu organs and meridians. The clinical diagnosis follows a fourfold process and eight principles of differentiation. Fine needles are inserted at specific acupoints and retained for 20–30 minutes to 'obtain the qi,' restoring balance and promoting natural healing.",
      descZh: "针灸运用脏腑经络理论，通过四诊合参和八纲辨证进行临床诊断。细针插入特定穴位，留针20-30分钟以'得气'，恢复平衡，促进自然愈合。",
    },
    {
      img: acupressureImg,
      titleEn: "Acupressure",
      titleZh: "推拿",
      descEn: "Acupressure involves manual manipulation applied to specific body locations to regulate yin and yang, harmonize qi and blood, and recover function of tendons and joints. Techniques include rolling, kneading, grasping, and deep pressure application.",
      descZh: "推拿是将手法按压应用于身体特定部位，以调节阴阳、和谐气血、恢复筋骨关节功能。技术包括滚法、揉法、拿法和深压法。",
    },
    {
      img: cuppingImg,
      titleEn: "Cupping",
      titleZh: "拔罐",
      descEn: "Cupping therapy uses glass or silicone jars with negative pressure to draw blood to the surface of the skin. This process dispels pathogens, promotes circulation, relieves muscle tension, and helps the body's natural detoxification process.",
      descZh: "拔罐疗法使用玻璃或硅胶罐产生负压，将血液引至皮肤表面。此过程可以驱邪排毒，促进血液循环，缓解肌肉紧张。",
    },
    {
      img: moxibustionImg,
      titleEn: "Moxibustion",
      titleZh: "艾灸",
      descEn: "Moxibustion involves applying heat from burning moxa (mugwort) to specific acupoints. It is especially effective for patients with cold or weak constitutions, helping to regulate meridians, warm the body, and boost the immune system.",
      descZh: "艾灸是将燃烧的艾草（艾绒）产生的热量作用于特定穴位。对体质虚寒的患者特别有效，有助于调节经络、温暖身体、增强免疫系统。",
    },
    {
      img: null,
      titleEn: "Guasha (Scraping)",
      titleZh: "刮痧",
      descEn: "The skin is covered in oil and scraped with a specialized tool (ceramic or horn) until red marks appear. This therapy improves circulation, dispels fever, reduces inflammation, and boosts immunity by stimulating the body's natural healing response.",
      descZh: "皮肤涂油后用专用工具（陶瓷或牛角）刮拭至出现红痕。此疗法可改善循环、散热退烧、减少炎症，并通过刺激身体自然愈合反应增强免疫力。",
    },
    {
      img: null,
      titleEn: "Foot Massage",
      titleZh: "足部按摩",
      descEn: "Foot massage targets pressure points on the feet that are connected to nerves, muscles, and organs throughout the body. This therapy relieves pain, reduces stress, improves circulation, and promotes overall relaxation and well-being.",
      descZh: "足部按摩针对足部穴位，这些穴位与全身的神经、肌肉和器官相连。此疗法可缓解疼痛、减轻压力、改善循环，促进整体放松和健康。",
    },
  ];

  return (
    <div>
      <PageBanner
        title={t("Traditional Chinese Medicine", "中医治疗")}
        subtitle={t("Ancient Wisdom, Modern Healing", "古老智慧，现代治愈")}
      />

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">{t("Our TCM Services", "我们的中医服务")}</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground font-light mb-4">
            {t("Comprehensive TCM Treatments", "全面的中医治疗")}
          </h2>
          <div className="decorative-line mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            {t(
              "Our Traditional Chinese Medicine services combine multiple treatment modalities for a holistic approach to health. Sessions can combine 2–3 treatments for maximum benefit.",
              "我们的中医服务结合多种治疗方法，采用整体健康方法。每次可结合2-3种治疗以获得最大效果。"
            )}
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 px-4 bg-section-dark">
        <div className="container mx-auto max-w-xl text-center">
          <h3 className="font-heading text-2xl text-section-dark-foreground mb-2">{t("TCM Pricing", "中医价格")}</h3>
          <div className="decorative-line mb-6" />
          <div className="bg-section-dark-foreground/5 border border-gold/20 p-8 rounded-sm">
            <p className="font-heading text-5xl text-gold mb-2">$75</p>
            <p className="text-section-dark-foreground/70 text-sm tracking-wider uppercase">{t("Per Hour", "每小时")}</p>
            <p className="text-section-dark-foreground/50 text-xs mt-3">
              {t("Can combine 2–3 treatments in one session", "每次可结合2-3种治疗")}
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="space-y-20">
            {services.map((s, i) => (
              <motion.div
                key={s.titleEn}
                className={`grid grid-cols-1 ${s.img ? "lg:grid-cols-2" : ""} gap-10 items-center`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                {s.img && i % 2 === 0 && (
                  <div className="overflow-hidden rounded-sm">
                    <img src={s.img} alt={t(s.titleEn, s.titleZh)} className="w-full h-80 object-cover" />
                  </div>
                )}
                <div className={!s.img ? "max-w-2xl mx-auto text-center" : ""}>
                  <h3 className="font-heading text-3xl text-foreground font-light mb-4">{t(s.titleEn, s.titleZh)}</h3>
                  <div className={`decorative-line ${!s.img ? "" : "!mx-0"} mb-4`} />
                  <p className="text-muted-foreground leading-relaxed">{t(s.descEn, s.descZh)}</p>
                </div>
                {s.img && i % 2 !== 0 && (
                  <div className="overflow-hidden rounded-sm">
                    <img src={s.img} alt={t(s.titleEn, s.titleZh)} className="w-full h-80 object-cover" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-section-dark text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl text-section-dark-foreground font-light mb-4">
            {t("Ready to Experience TCM?", "准备体验中医了吗？")}
          </h2>
          <div className="decorative-line mb-6" />
          <Link
            to="/contact-us/"
            className="inline-block px-10 py-4 bg-gold text-primary-foreground text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            {t("Book Your Session", "预约治疗")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TCM;
