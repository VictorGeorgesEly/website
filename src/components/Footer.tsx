import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("bg-black border-t border-white/10", className)}>
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white/60 text-sm"
          >
            © {currentYear} Portfolio DevOps. Tous droits réservés.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
