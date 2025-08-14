import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { Experience } from "@/types/portfolio";

interface ExperienceSectionProps {
  experiences: Experience[];
  className?: string;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences, className }) => {
  return (
    <section id="experience" className={cn("py-20 bg-white", className)}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Expérience Professionnelle
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={`experience-${index}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-10 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    {/* Company Image */}
                    {experience.companyImage && (
                      <div className="md:col-span-1 flex justify-center">
                        <div className="w-full h-24 bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                          <img
                            src={experience.companyImage}
                            alt={`Logo ${experience.company}`}
                            className="w-full h-full object-contain p-2"
                          />
                        </div>
                      </div>
                    )}

                    {/* Vertical Separator */}
                    {experience.companyImage && (
                      <div className="hidden md:block absolute left-[27%] top-8 bottom-8 w-px bg-gray-300 z-10"></div>
                    )}

                    {/* Experience Content */}
                    <div className={experience.companyImage ? "md:col-span-3" : "md:col-span-4"}>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-0">
                          {experience.title}
                        </h3>
                        <span className="text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-full text-sm w-fit">
                          {experience.period}
                        </span>
                      </div>

                      <h4 className="text-lg font-semibold text-gray-700 mb-4">
                        {experience.company}
                      </h4>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech: string, techIndex: number) => (
                          <span
                            key={`tech-${experience.title}-${techIndex}`}
                            className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200 hover:border-blue-300 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
