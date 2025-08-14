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
              key={`skill-category-${skillCategory.category}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow w-full sm:w-80 lg:w-96 xl:w-[400px]"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {skillCategory.category}
              </h3>

              {/* Sous-catégories si présentes */}
              {skillCategory.subcategories && skillCategory.subcategories.length > 0 ? (
                <div className="space-y-6">
                  {skillCategory.subcategories.map((sub, subIndex) => (
                    <div key={`subcat-${skillCategory.category}-${sub.name}`}>
                      <h4 className="text-sm font-semibold text-gray-600 mb-3">
                        {sub.name}
                      </h4>
                      <div className="space-y-2">
                        {sub.items.map((item, itemIndex) => {
                          const level = Math.max(0, Math.min(5, item.level ?? 0));
                          return (
                            <motion.div
                              key={`skill-${skillCategory.category}-${sub.name}-${item.name}`}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: (index * 0.08) + (subIndex * 0.05) + (itemIndex * 0.03) }}
                              viewport={{ once: true }}
                              className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                            >
                              <span className="font-medium text-gray-700">{item.name}</span>
                              <div className="flex space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <motion.div
                                    key={`dot-${skillCategory.category}-${sub.name}-${item.name}-${i}`}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: (index * 0.08) + (subIndex * 0.05) + (itemIndex * 0.03) + (i * 0.02) }}
                                    viewport={{ once: true }}
                                    className={`w-2 h-2 rounded-full ${i < level ? 'bg-blue-500' : 'bg-gray-300'}`}
                                  />
                                ))}
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Fallback: items plats
                <div className="space-y-3">
                  {skillCategory.items?.map((item, skillIndex: number) => {
                    const level = Math.max(0, Math.min(5, item.level ?? 0));
                    return (
                      <motion.div
                        key={`skill-${skillCategory.category}-${item.name}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <span className="font-medium text-gray-700">{item.name}</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={`skill-dot-${skillCategory.category}-${item.name}-${i}`}
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ delay: (index * 0.1) + (skillIndex * 0.05) + (i * 0.02) }}
                              viewport={{ once: true }}
                              className={`w-2 h-2 rounded-full ${
                                i < level ? 'bg-blue-500' : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
