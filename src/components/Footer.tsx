import { Link } from "react-router-dom";
import { services } from "@/data/services";

const footerServices = services.slice(0, 5);

const Footer = () => (
  <footer className="bg-foreground text-neutral-300">
    <div className="container py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="inline-block">
            <span className="font-heading font-bold text-2xl text-background">
              MARTIN<span className="text-primary"> MEDIA</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-neutral-400 leading-relaxed max-w-xs">
            Медиа- и технологический партнёр для бизнеса. Видеопродакшн, контент-системы, AI-решения.
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
            <li><Link to="/martin-lab" className="text-sm text-neutral-400 hover:text-primary transition-colors">Martin LAB</Link></li>
            <li><Link to="/faq" className="text-sm text-neutral-400 hover:text-primary transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Контакты</h4>
          <ul className="space-y-2.5">
            <li><a href="mailto:hello@martinmedia.ru" className="text-sm text-neutral-400 hover:text-primary transition-colors">hello@martinmedia.ru</a></li>
            <li><a href="tel:+74951234567" className="text-sm text-neutral-400 hover:text-primary transition-colors">+7 (495) 123-45-67</a></li>
            <li className="text-sm text-neutral-400">Москва, Россия</li>
          </ul>
          <div className="mt-6">
            <Link to="/brief" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              Обсудить проект →
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-neutral-500">© {new Date().getFullYear()} Martin Media. Все права защищены.</p>
        <div className="flex items-center gap-6">
          <Link to="/faq" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">Политика конфиденциальности</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;