import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import PageBanner from "@/components/PageBanner";
import parkerPlaceMap from "@/assets/parker-place-map.jpg";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Contact = () => {
  const { t } = useLang();

  return (
    <div>
      <PageBanner title={t("Contact Us", "联系我们")} subtitle={t("Get in Touch", "与我们联系")} />

      {/* Contact Info + Form */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            {/* Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">{t("Contact Information", "联系信息")}</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-light mb-6">
                {t("We'd Love to Hear From You", "期待您的来电")}
              </h2>
              <div className="decorative-line !mx-0 mb-8" />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-heading text-lg text-foreground mb-1">{t("Address", "地址")}</h4>
                    <p className="text-muted-foreground text-sm">Unit 1140, Parker Place (百家店)</p>
                    <p className="text-muted-foreground text-sm">4380 No. 3 Road, Richmond, BC V6X 3V7</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-gold shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-heading text-lg text-foreground mb-1">{t("Phone", "电话")}</h4>
                    <a href="tel:6042854968" className="text-muted-foreground text-sm hover:text-gold transition-colors">(604) 285-4968</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-gold shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-heading text-lg text-foreground mb-1">{t("Email", "邮箱")}</h4>
                    <a href="mailto:info@richmondacupuncturermt.ca" className="text-muted-foreground text-sm hover:text-gold transition-colors">info@richmondacupuncturermt.ca</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-gold shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-heading text-lg text-foreground mb-1">{t("Hours of Operation", "营业时间")}</h4>
                    <p className="text-muted-foreground text-sm">{t("Monday – Sunday", "周一 – 周日")}: 10:00 AM – 9:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-section-dark section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">{t("Find Us", "找到我们")}</p>
            <h2 className="font-heading text-3xl md:text-4xl text-section-dark-foreground font-light mb-4">
              {t("Our Location", "我们的位置")}
            </h2>
            <div className="decorative-line" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Google Map */}
            <div className="aspect-video rounded-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.8!2d-123.1368!3d49.1668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674e72e4c5d8f%3A0x2a5b7e5e0c7b3e8a!2sParker+Place!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Yang's Health Therapeutic Clinic Location"
              />
            </div>

            {/* Parker Place Map */}
            <div>
              <h3 className="font-heading text-xl text-section-dark-foreground mb-4">
                {t("Parker Place Mall Directory", "百家店商场导览")}
              </h3>
              <img src={parkerPlaceMap} alt="Parker Place Mall Map - Unit 1140" className="w-full rounded-sm shadow-lg" />
              <p className="text-section-dark-foreground/60 text-sm mt-3 text-center">
                {t("We are located at Unit 1140, Lower Level", "我们位于底层1140号单元")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
