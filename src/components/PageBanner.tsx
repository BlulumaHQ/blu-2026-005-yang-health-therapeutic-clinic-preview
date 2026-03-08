import pageBannerBg from "@/assets/page-banner-bg.jpg";

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => (
  <div className="page-banner">
    <img src={pageBannerBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="page-banner-overlay" />
    <div className="relative z-10 text-center px-4">
      <h1 className="font-heading text-4xl md:text-5xl text-section-dark-foreground font-light mb-3">{title}</h1>
      {subtitle && <div className="decorative-line mb-3" />}
      {subtitle && <p className="text-gold-light text-sm tracking-widest uppercase">{subtitle}</p>}
    </div>
  </div>
);

export default PageBanner;
