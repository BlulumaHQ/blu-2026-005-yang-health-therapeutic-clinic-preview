import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import heroBg from "@/assets/hero-bg.jpg";
import acupunctureImg from "@/assets/acupuncture-service.jpg";
import cuppingImg from "@/assets/cupping-service.jpg";
import massageImg from "@/assets/acupressure-service.jpg";
import moxibustionImg from "@/assets/moxibustion-service.jpg";
import clinicImg from "@/assets/clinic-storefront.png";
import celiaImg from "@/assets/celia-yang.jpg";
import philipImg from "@/assets/philip-lu.jpg";
import rmtCmtLogo from "@/assets/rmt-cmt-logo.png";
import { Phone, Clock, MapPin, Star, Shield } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Index = () => {
  const { t } = useLang();

  const services = [
    { img: acupunctureImg, en: "Acupuncture", zh: "针灸", descEn: "Traditional needle therapy targeting meridians to restore energy flow and relieve pain.", descZh: "传统针刺疗法，疏通经络，恢复气血流通，缓解疼痛。" },
    { img: cuppingImg, en: "Cupping", zh: "拔罐", descEn: "Ancient technique using suction cups to improve circulation and release muscle tension.", descZh: "古法拔罐，促进血液循环，缓解肌肉紧张。" },
    { img: massageImg, en: "Acupressure", zh: "推拿", descEn: "Targeted pressure point therapy to regulate qi, relieve stress, and restore balance.", descZh: "穴位按压疗法，调节气血，缓解压力，恢复平衡。" },
    { img: moxibustionImg, en: "Moxibustion", zh: "艾灸", descEn: "Warming therapy using mugwort to stimulate acupoints and boost immunity.", descZh: "艾草温灸疗法，温通经脉，增强免疫力。" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <motion.div
          className="relative z-10 text-center px-4 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.p variants={fadeUp} className="text-gold-light text-xs md:text-sm tracking-[0.3em] uppercase mb-4">
            {t("Yang's Health Therapeutic Clinic", "百醫堂健康治疗中心")}
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl lg:text-7xl text-section-dark-foreground font-light leading-tight mb-6">
            {t("Years of Experience.", "多年经验。")}
            <br />
            <span className="italic text-gold">{t("A Lifetime of Relaxation.", "一生的放松。")}</span>
          </motion.h1>
          <motion.div variants={fadeUp} className="decorative-line mb-6" />
          <motion.p variants={fadeUp} className="text-section-dark-foreground/80 text-sm md:text-base tracking-wider mb-8">
            {t("Where Pressure Becomes Pleasure", "让压力变成享受")}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us/"
              className="inline-block px-8 py-3 bg-gold text-primary-foreground text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              {t("Book Your Visit", "预约就诊")}
            </Link>
            <Link
              to="/registered-massage-therapy/"
              className="inline-block px-8 py-3 border border-gold text-gold text-sm uppercase tracking-widest hover:bg-gold hover:text-primary-foreground transition-colors"
            >
              {t("View Our Rates", "查看价格")}
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-gold/40 mx-auto animate-pulse" />
        </div>
      </section>

      {/* Welcome / About Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p variants={fadeUp} className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
              {t("Welcome to Our Clinic", "欢迎来到我们的诊所")}
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-5xl text-foreground font-light mb-4">
              {t("Enjoy a Healing Experience", "享受治愈体验")}
            </motion.h2>
            <motion.div variants={fadeUp} className="decorative-line mb-6" />
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-6">
              {t(
                "Yang's Health Therapeutic Clinic provides complete individual treatment in the heart of Richmond. We focus on alleviating discomfort associated with everyday occupational stresses, muscular over-use, and chronic pain conditions through clinically-oriented healthcare options.",
                "百醫堂健康治疗中心位于列治文中心，提供全面的个人治疗服务。我们专注于通过临床导向的医疗保健方案，缓解日常职业压力、肌肉过度使用和慢性疼痛带来的不适。"
              )}
            </motion.p>
            <motion.div variants={fadeUp}>
              <img src={rmtCmtLogo} alt="CMTBC Accreditation" className="h-14 mx-auto opacity-70" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">{t("Our Services", "我们的服务")}</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground font-light mb-4">
              {t("Treatments & Therapies", "治疗项目")}
            </h2>
            <div className="decorative-line" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.en}
                className="group relative overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={s.img} alt={t(s.en, s.zh)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="font-heading text-2xl text-section-dark-foreground mb-2">{t(s.en, s.zh)}</h3>
                    <p className="text-section-dark-foreground/70 text-sm leading-relaxed">{t(s.descEn, s.descZh)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/chinese-traditional-medicine/"
              className="inline-block px-8 py-3 bg-gold text-primary-foreground text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              {t("TCM Services", "中医服务")}
            </Link>
            <Link
              to="/registered-massage-therapy/"
              className="inline-block px-8 py-3 border border-gold text-gold text-sm uppercase tracking-widest hover:bg-gold hover:text-primary-foreground transition-colors"
            >
              {t("RMT Services", "按摩服务")}
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance Banner */}
      <section className="bg-section-dark section-padding">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img src={clinicImg} alt="Yang's Health Clinic" className="w-full rounded-sm shadow-2xl" />
            </div>
            <div className="md:w-1/2">
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">{t("Insurance Accepted", "接受保险")}</p>
              <h2 className="font-heading text-3xl md:text-4xl text-section-dark-foreground font-light mb-6">
                {t("We Accept Direct Billing", "我们接受直接保险报销")}
              </h2>
              <div className="decorative-line !mx-0 mb-6" />
              <div className="space-y-4 text-section-dark-foreground/80">
                <div className="flex items-start gap-3">
                  <Shield className="text-gold shrink-0 mt-0.5" size={18} />
                  <p className="text-sm">
                    <strong className="text-section-dark-foreground">ICBC:</strong>{" "}
                    {t(
                      "Car crash patients receive 24 sessions of acupuncture/RMT within the first 12 weeks. No fee and no doctor referral needed.",
                      "车祸患者在前12周内可获得24次针灸/RMT治疗。无需费用，无需医生转介。"
                    )}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="text-gold shrink-0 mt-0.5" size={18} />
                  <p className="text-sm">
                    <strong className="text-section-dark-foreground">MSP:</strong>{" "}
                    {t(
                      "Covers $23.00 per visit for premium assistance (limit of 10 combined visits per year).",
                      "MSP保费补助每次覆盖$23.00（每年限10次综合就诊）。"
                    )}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="text-gold shrink-0 mt-0.5" size={18} />
                  <p className="text-sm">
                    <strong className="text-section-dark-foreground">{t("Extended Health:", "延伸医疗保险：")}</strong>{" "}
                    {t("Usually covers 70–100% of fees.", "通常覆盖70-100%的费用。")}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="text-gold shrink-0 mt-0.5" size={18} />
                  <p className="text-sm">
                    <strong className="text-section-dark-foreground">WCB:</strong>{" "}
                    {t("Workers' Compensation Board claims accepted.", "接受工伤赔偿委员会索赔。")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">{t("Our Practitioners", "我们的医师")}</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground font-light mb-4">
              {t("Meet Our Team", "认识我们的团队")}
            </h2>
            <div className="decorative-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { img: celiaImg, name: t("Dr. Celia Yang", "杨医师"), role: t("TCM Practitioner / Acupuncturist", "中医师 / 针灸师") },
              { img: philipImg, name: t("Dr. Philip Lu", "陆医师"), role: t("Registered Massage Therapist", "注册按摩治疗师") },
            ].map((member) => (
              <motion.div
                key={member.name}
                className="group relative overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <h3 className="font-heading text-2xl text-section-dark-foreground">{member.name}</h3>
                    <p className="text-gold-light text-sm tracking-wider">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-section-dark py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <Clock className="text-gold" size={28} />
            <h3 className="font-heading text-xl text-section-dark-foreground">{t("Open 7 Days", "每天营业")}</h3>
            <p className="text-section-dark-foreground/60 text-sm">10:00 AM – 9:00 PM</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <MapPin className="text-gold" size={28} />
            <h3 className="font-heading text-xl text-section-dark-foreground">{t("Parker Place", "百家店")}</h3>
            <p className="text-section-dark-foreground/60 text-sm">Unit 1140, 4380 No. 3 Rd, Richmond</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Phone className="text-gold" size={28} />
            <h3 className="font-heading text-xl text-section-dark-foreground">{t("Call Us", "致电我们")}</h3>
            <a href="tel:6042854968" className="text-gold-light text-sm hover:text-gold transition-colors">(604) 285-4968</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background text-center">
        <div className="container mx-auto max-w-2xl">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">{t("Ready to Feel Better?", "准备好感受更好了吗？")}</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground font-light mb-6">
            {t("Our Hands Let You Really Feel Better", "让我们的双手让您真正感到舒适")}
          </h2>
          <div className="decorative-line mb-6" />
          <Link
            to="/contact-us/"
            className="inline-block px-10 py-4 bg-gold text-primary-foreground text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            {t("Book Your Visit Today", "今天就预约")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
