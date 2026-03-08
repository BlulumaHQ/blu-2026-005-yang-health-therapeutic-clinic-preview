import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import PageBanner from "@/components/PageBanner";
import celiaImg from "@/assets/celia-yang.jpg";
import philipImg from "@/assets/philip-lu.jpg";
import clinicImg from "@/assets/clinic-storefront.webp";
import rmtCmtLogo from "@/assets/rmt-cmt-logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const About = () => {
  const { t } = useLang();

  return (
    <div>
      <PageBanner title={t("About Us", "关于我们")} subtitle={t("Our Story & Team", "我们的故事与团队")} />

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">{t("Our Story", "我们的故事")}</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-light mb-6">
                {t("Dedicated to Your Wellness", "致力于您的健康")}
              </h2>
              <div className="decorative-line !mx-0 mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {t(
                    "Yang's Health Therapeutic Clinic provides complete individual treatment in the heart of Richmond. Our clinic focuses on alleviating discomfort associated with everyday occupational stresses, muscular over-use, and chronic pain conditions through clinically-oriented healthcare options.",
                    "百醫堂健康治疗中心位于列治文中心，提供全面的个人治疗服务。我们的诊所专注于通过临床导向的医疗保健方案，缓解日常职业压力、肌肉过度使用和慢性疼痛带来的不适。"
                  )}
                </p>
                <p>
                  {t(
                    "We combine Traditional Chinese Medicine with modern Registered Massage Therapy to offer a comprehensive approach to health and healing. Our experienced practitioners are dedicated to helping you achieve optimal well-being.",
                    "我们将传统中医与现代注册按摩治疗相结合，提供全面的健康治疗方案。我们经验丰富的医师致力于帮助您实现最佳健康状态。"
                  )}
                </p>
              </div>
              <img src={rmtCmtLogo} alt="CMTBC Accreditation" className="h-12 mt-6 opacity-70" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <img src={clinicImg} alt="Yang's Health Clinic Storefront" className="w-full rounded-sm shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">{t("Our Team", "我们的团队")}</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground font-light mb-4">
              {t("Meet Our Practitioners", "认识我们的医师")}
            </h2>
            <div className="decorative-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Celia */}
            <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gold/30">
                <img src={celiaImg} alt="Dr. Celia Yang" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-1">{t("Dr. Celia Yang", "杨医师")}</h3>
              <p className="text-gold text-sm tracking-wider mb-4">{t("TCM Practitioner / Acupuncturist", "中医师 / 针灸师")}</p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                {t(
                  "Dr. Yang specializes in Traditional Chinese Medicine, including acupuncture, cupping, moxibustion, and herbal medicine. With years of clinical experience, she provides personalized treatment plans for each patient.",
                  "杨医师专精中医治疗，包括针灸、拔罐、艾灸和中药。凭借多年的临床经验，她为每位患者提供个性化的治疗方案。"
                )}
              </p>
            </motion.div>

            {/* Philip */}
            <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gold/30">
                <img src={philipImg} alt="Dr. Philip Lu" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-1">{t("Dr. Philip Lu", "陆医师")}</h3>
              <p className="text-gold text-sm tracking-wider mb-4">{t("Registered Massage Therapist (RMT)", "注册按摩治疗师")}</p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                {t(
                  "Dr. Lu is a licensed Registered Massage Therapist with expertise in treating soft tissue injuries, chronic pain, and stress-related conditions. He combines therapeutic techniques for optimal results.",
                  "陆医师是持牌注册按摩治疗师，擅长治疗软组织损伤、慢性疼痛和压力相关疾病。他结合多种治疗技术以获得最佳效果。"
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
