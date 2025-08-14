import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { PersonalInfo } from "@/types/portfolio";
import {highlights} from "@/constants/portfolio.ts";

interface AboutSectionProps {
  personalInfo: PersonalInfo;
  className?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ personalInfo, className }) => {

  return (
    <section id="about" className={cn("py-20 bg-gray-50", className)}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-12 items-center">
          {/* Profile Image */}
          {personalInfo.profileImage && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-1 flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600/20 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={personalInfo.profileImage ? "md:col-span-3" : "md:col-span-4"}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              DevOps Engineer & Fullstack Developer
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Passionné par l'automatisation et l'optimisation des processus de développement,
              je combine mon expertise en développement fullstack avec les meilleures pratiques DevOps
              pour créer des solutions robustes et scalables.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Mon parcours m'a permis de maîtriser l'ensemble de la chaîne de développement,
              depuis la conception d'applications jusqu'à leur déploiement et maintenance en production.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Télécharger mon CV
            </motion.button>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {item.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
