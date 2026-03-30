import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { companyInfo } from "@/data/company";

const footerServices = services.slice(0, 5);

const Footer = () => (
  <footer className="bg-foreground text-neutral-300">
    <div className="container py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="inline-block">
            <span className="font-heading font-bold text-2xl text-primary">
              MARTIN MEDIA
            </span>
          </Link>
          <p className="mt-4 text-sm text-neutral-400 leading-relaxed max-w-xs">
            Агентство видеомаркетинга полного цикла. Видеопродакшн, TikTok, Reels, SMM, AI-видео и продвижение для бизнеса с 2015 года.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Услуги</h4>
          <ul className="space-y-2.5">
            {footerServices.map((s) => (
              <li key={s.slug}>
                <Link to={`/uslugi/${s.slug}`} className="text-sm text-neutral-400 hover:text-primary transition-colors">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/uslugi" className="text-sm text-primary hover:text-primary/80 transition-colors">
                Все услуги →
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Компания</h4>
          <ul className="space-y-2.5">
            <li><Link to="/o-kompanii" className="text-sm text-neutral-400 hover:text-primary transition-colors">О нас</Link></li>
            <li><Link to="/kejsy" className="text-sm text-neutral-400 hover:text-primary transition-colors">Кейсы</Link></li>
            <li><Link to="/blog" className="text-sm text-neutral-400 hover:text-primary transition-colors">Блог</Link></li>
            
            <li><Link to="/faq" className="text-sm text-neutral-400 hover:text-primary transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Контакты</h4>
          <ul className="space-y-2.5">
            <li><a href={`mailto:${companyInfo.email}`} className="text-sm text-neutral-400 hover:text-primary transition-colors">{companyInfo.email}</a></li>
            <li><a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="text-sm text-neutral-400 hover:text-primary transition-colors">{companyInfo.phoneFormatted}</a></li>
            <li className="text-sm text-neutral-400">{companyInfo.location}</li>
          </ul>
          <div className="mt-6">
            <Link to="/brief" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              Рассчитать стоимость проекта →
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-neutral-500">© {new Date().getFullYear()} Martin Media. Все права защищены.</p>
        <div className="flex items-center gap-6">
          <a href={`https://${companyInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">{companyInfo.website}</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;