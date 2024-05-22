import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/hlogo.png",
  siteUrl: "https://blog.formfitness.com.tr",
  siteName: "Form Fitness Blog",
  siteDescription:
    "Formda Kal, Güçlü Yaşa. En İyi Fitness İpuçları ve Egzersiz Rutinleri",
  siteThumbnail: "/hlogo.png",
  nav: [
    { label: "Yazılar", href: "/posts" },
    { label: "Hakkımızda", href: "/about" },
    { label: "Form Fitness", href: "https://formfitness.com.tr/" },
  ],
  social: {
    github: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "https://www.instagram.com/formfitnessvip/",
  },
};
export default siteConfig;
