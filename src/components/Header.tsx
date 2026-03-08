import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import yangLogo from "@/assets/yang-logo.jpg";

const navItems = [
  { path: "/", en: "Home", zh: "首页" },
  { path: "/about/", en: "About", zh: "关于我们" },
  { path: "/chinese-traditional-medicine/", en: "Traditional Chinese Medicine", zh: "中医治疗" },
  { path: "/registered-massage-therapy/", en: "Registered Massage Therapy", zh: "注册按摩治疗" },
  { path: "/contact-us/", en: "Contact Us", zh: "联系我们" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLang();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-section-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={yangLogo} alt="Yang's Health Therapeutic Clinic" className="h-12 w-12 rounded-full object-cover" />
          <div className="hidden sm:block">
            <span className="text-section-dark-foreground font-heading text-lg font-semibold leading-tight block">
              {t("Yang's Health", "百醫堂")}
            </span>
            <span className="text-gold-light text-xs tracking-widest uppercase">
              {t("Therapeutic Clinic", "健康治疗中心")}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm tracking-wider uppercase transition-colors duration-200 hover:text-gold ${
                location.pathname === item.path ? "text-gold" : "text-section-dark-foreground"
              }`}
            >
              {lang === "en" ? item.en : item.zh}
            </Link>
          ))}
          <div className="flex items-center gap-2 ml-4 border-l border-gold/30 pl-4">
            <button
              onClick={() => setLang("en")}
              className={`text-xs uppercase tracking-wider transition-colors ${lang === "en" ? "text-gold" : "text-section-dark-foreground/60 hover:text-section-dark-foreground"}`}
            >
              EN
            </button>
            <span className="text-section-dark-foreground/40">|</span>
            <button
              onClick={() => setLang("zh")}
              className={`text-xs tracking-wider transition-colors ${lang === "zh" ? "text-gold" : "text-section-dark-foreground/60 hover:text-section-dark-foreground"}`}
            >
              中文
            </button>
          </div>
          <a href="tel:6042854968" className="flex items-center gap-2 text-gold text-sm ml-2">
            <Phone size={14} />
            <span className="hidden xl:inline">(604) 285-4968</span>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-section-dark-foreground p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-section-dark/98 backdrop-blur-md border-t border-gold/20">
          <nav className="container mx-auto py-4 px-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm tracking-wider uppercase py-2 transition-colors ${
                  location.pathname === item.path ? "text-gold" : "text-section-dark-foreground"
                }`}
              >
                {lang === "en" ? item.en : item.zh}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-gold/20">
              <button onClick={() => setLang("en")} className={`text-xs ${lang === "en" ? "text-gold" : "text-section-dark-foreground/60"}`}>EN</button>
              <span className="text-section-dark-foreground/40">|</span>
              <button onClick={() => setLang("zh")} className={`text-xs ${lang === "zh" ? "text-gold" : "text-section-dark-foreground/60"}`}>中文</button>
            </div>
            <a href="tel:6042854968" className="flex items-center gap-2 text-gold text-sm pt-2">
              <Phone size={14} /> (604) 285-4968
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
