import { motion } from "framer-motion";
import clientsBanner from "@/assets/clients-banner.png";

const ClientsSection = () => (
  <section className="relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0, scale: 1.02 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <img
        src={clientsBanner}
        alt="Клиенты Martin Media — логотипы компаний, которые нам доверяют"
        className="w-full h-auto block"
      />
    </motion.div>
  </section>
);

export default ClientsSection;
