import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services, serviceCategories } from "@/data/services";
import { ArrowRight, Play, Tv, Smartphone, TrendingUp, Boxes, UtensilsCrossed, Building2, Users, Bot, Megaphone, UserPlus, Camera, Sparkles, MessageCircle, Globe } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Video: Play,
  Clapperboard: Tv,
  Smartphone: Smartphone,
  BarChart3: TrendingUp,
  Box: Boxes,
  Bot: Bot,
  UtensilsCrossed: UtensilsCrossed,
  Film: Building2,
  Users: Users,
  Megaphone: Megaphone,
  UserPlus: UserPlus,
  Plane: Camera,
  Gamepad2: Sparkles,
  MessageCircle: MessageCircle,
  Globe: Globe,
};

const categoryColors: Record<string, string> = {
  production: "from-primary/20 to-primary/5 text-primary",
  content: "from-accent/30 to-accent/10 text-accent-foreground",
  ai: "from-primary/15 to-primary/5 text-primary",
  pr: "from-primary/20 to-primary/5 text-primary",
  dev: "from-primary/15 to-accent/10 text-primary",
  special: "from-accent/30 to-accent/10 text-accent-foreground",
};

const ServicesSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Направления</h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Единая экосистема: от стратегии и продакшна до AI-автоматизации
        </p>
      </motion.div>

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {serviceCategories.filter(c => c.id !== "special").map((cat) => (
          <span
            key={cat.id}
            className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-border bg-card text-muted-foreground"
          >
            {cat.label}
          </span>
        ))}
      </div>

      {/* Uniform grid with even rows */}
      {(() => {
        const filtered = services.filter(s => s.category !== "special");
        const cols = 3; // lg columns
        const remainder = filtered.length % cols;
        // If remainder is 1, move last item to a separate 2-col row with the previous item
        const mainItems = remainder === 1 ? filtered.slice(0, -4) : filtered;
        const lastRowItems = remainder === 1 ? filtered.slice(-4) : [];

        const renderCard = (service: typeof filtered[0], i: number) => {
          const Icon = iconMap[service.icon] || Play;
          const colorClass = categoryColors[service.category] || categoryColors.production;
          return (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                to={`/uslugi/${service.slug}`}
                className="group flex flex-col h-full p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="font-heading font-semibold text-sm text-foreground leading-snug">
                  {service.shortTitle}
                </h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2 flex-1">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Подробнее <ArrowRight size={12} />
                </div>
              </Link>
            </motion.div>
          );
        };

        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mainItems.map((service, i) => renderCard(service, i))}
            </div>
            {lastRowItems.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {lastRowItems.map((service, i) => renderCard(service, mainItems.length + i))}
              </div>
            )}
          </>
        );
      })()}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <Link to="/uslugi" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
          Все услуги <ArrowRight size={16} />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
