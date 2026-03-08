import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import yangLogoWhite from "@/assets/yang-logo-white.png";
import yangLogo from "@/assets/yang-logo.jpg";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="bg-section-dark text-section-dark-foreground">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={yangLogo} alt="Yang's Health" className="h-14 w-14 rounded-full object-cover" />
              <div>
                <h3 className="font-heading text-xl text-gold">{t("Yang's Health", "百醫堂")}</h3>
                <p className="text-xs tracking-widest text-section-dark-foreground/60 uppercase">
                  {t("Therapeutic Clinic", "健康治疗中心")}
                </p>
              </div>
            </div>
            <p className="text-sm text-section-dark-foreground/70 leading-relaxed">
              {t(
                "Professional Traditional Chinese Medicine and Registered Massage Therapy in the heart of Richmond.",
                "位于列治文中心的专业中医和注册按摩治疗诊所。"
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-gold mb-4">{t("Quick Links", "快速链接")}</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-section-dark-foreground/70 hover:text-gold transition-colors">{t("Home", "首页")}</Link>
              <Link to="/about/" className="text-sm text-section-dark-foreground/70 hover:text-gold transition-colors">{t("About", "关于我们")}</Link>
              <Link to="/chinese-traditional-medicine/" className="text-sm text-section-dark-foreground/70 hover:text-gold transition-colors">{t("Traditional Chinese Medicine", "中医治疗")}</Link>
              <Link to="/registered-massage-therapy/" className="text-sm text-section-dark-foreground/70 hover:text-gold transition-colors">{t("Registered Massage Therapy", "注册按摩治疗")}</Link>
              <Link to="/contact-us/" className="text-sm text-section-dark-foreground/70 hover:text-gold transition-colors">{t("Contact Us", "联系我们")}</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg text-gold mb-4">{t("Contact", "联系方式")}</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-section-dark-foreground/70">
                  Unit 1140, Parker Place, 4380 No. 3 Road, Richmond, BC V6X 3V7
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gold shrink-0" />
                <a href="tel:6042854968" className="text-sm text-section-dark-foreground/70 hover:text-gold transition-colors">(604) 285-4968</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:info@richmondacupuncturermt.ca" className="text-sm text-section-dark-foreground/70 hover:text-gold transition-colors break-all">info@richmondacupuncturermt.ca</a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-lg text-gold mb-4">{t("Hours", "营业时间")}</h4>
            <div className="flex items-start gap-2">
              <Clock size={16} className="text-gold mt-0.5 shrink-0" />
              <div className="text-sm text-section-dark-foreground/70">
                <p>{t("Monday – Sunday", "周一 – 周日")}</p>
                <p>10:00 AM – 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-section-dark-foreground/10">
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-section-dark-foreground/40">
            © {new Date().getFullYear()} Yang's Health Therapeutic Clinic. All rights reserved.
          </p>
          <p className="text-xs text-section-dark-foreground/30">
            Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              Bluluma Design
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
