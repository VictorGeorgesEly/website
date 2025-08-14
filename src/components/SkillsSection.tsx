import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types/portfolio";

interface SkillsSectionProps {
  skills: Skill[];
  className?: string;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, className }) => {
  return (
    <section id="skills" className={cn("py-20 bg-white", className)}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Compétences Techniques
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-full mx-auto">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={`skill-category-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow w-full sm:w-80 lg:w-96 xl:w-[400px]"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {skillCategory.category}
              </h3>

              <div className="space-y-3">
                {skillCategory.items.map((skill: string, skillIndex: number) => (
                  <motion.div
                    key={`skill-${skillCategory.category}-${skillIndex}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="font-medium text-gray-700">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={`skill-dot-${skillCategory.category}-${skillIndex}-${i}`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: (index * 0.1) + (skillIndex * 0.05) + (i * 0.02) }}
                          viewport={{ once: true }}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? 'bg-blue-500' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
