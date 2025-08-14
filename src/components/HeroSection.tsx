import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { smoothScrollToSection } from "@/lib/navigation";
import type { PersonalInfo } from "@/types/portfolio";

interface HeroSectionProps {
  personalInfo: PersonalInfo;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ personalInfo, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [nameLetters, setNameLetters] = useState<string[]>([]);
  const [titleLetters, setTitleLetters] = useState<string[]>([]);
  const [visibleNameCount, setVisibleNameCount] = useState(0);
  const [visibleTitleCount, setVisibleTitleCount] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Suivre la position de la souris pour les effets de lumière
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Initialiser les lettres
  useEffect(() => {
    setNameLetters(personalInfo.name.split(''));
    setTitleLetters(personalInfo.title.split(''));
  }, [personalInfo.name, personalInfo.title]);

  // Animation progressive des lettres
  useEffect(() => {
    if (nameLetters.length === 0) return;

    let nameIndex = 0;
    let titleIndex = 0;
    let nameComplete = false;

    const animateLetters = () => {
      // Animation des lettres du nom
      if (!nameComplete && nameIndex < nameLetters.length) {
        setVisibleNameCount(nameIndex + 1);
        nameIndex++;

        setTimeout(() => {
          requestAnimationFrame(animateLetters);
        }, 100); // Timing fluide entre les lettres
      }
      // Démarrer l'animation du titre après une pause
      else if (!nameComplete && nameIndex >= nameLetters.length) {
        nameComplete = true;
        setTimeout(() => {
          const animateTitle = () => {
            if (titleIndex < titleLetters.length) {
              setVisibleTitleCount(titleIndex + 1);
              titleIndex++;
              setTimeout(() => {
                requestAnimationFrame(animateTitle);
              }, 60); // Plus rapide pour le titre
            }
          };
          animateTitle();
        }, 400);
      }
    };

    // Démarrer l'animation après un délai
    const startDelay = setTimeout(() => {
      animateLetters();
    }, 600);

    return () => {
      clearTimeout(startDelay);
    };
  }, [nameLetters, titleLetters]);

  // Particules lumineuses améliorées
  const lightParticles = Array.from({ length: 50 }, (_, i) => (
    <motion.div
      key={`light-${i}`}
      className="absolute rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${2 + Math.random() * 4}px`,
        height: `${2 + Math.random() * 4}px`,
        background: `radial-gradient(circle, ${
          ['#60a5fa', '#a78bfa', '#22d3ee', '#f59e0b', '#ec4899'][Math.floor(Math.random() * 5)]
        }, transparent)`,
        boxShadow: `0 0 ${10 + Math.random() * 20}px ${
          ['#60a5fa', '#a78bfa', '#22d3ee', '#f59e0b', '#ec4899'][Math.floor(Math.random() * 5)]
        }`,
      }}
      animate={{
        y: [0, -50 - Math.random() * 50, 0],
        x: [0, Math.random() * 30 - 15, 0],
        opacity: [0, 0.8, 0],
        scale: [0.5, 1.2, 0.5],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        repeat: Infinity,
        delay: Math.random() * 3,
        ease: "easeInOut",
      }}
    />
  ));

  // Rayons lumineux
  const lightRays = Array.from({ length: 8 }, (_, i) => (
    <motion.div
      key={`ray-${i}`}
      className="absolute top-1/2 left-1/2 origin-left"
      style={{
        width: '200px',
        height: '2px',
        background: `linear-gradient(90deg, transparent, ${
          ['#60a5fa', '#a78bfa', '#22d3ee'][i % 3]
        }66, transparent)`,
        transform: `rotate(${i * 45}deg)`,
        filter: 'blur(1px)',
      }}
      animate={{
        scaleX: [0, 1, 0],
        opacity: [0, 0.7, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: i * 0.3,
        ease: "easeInOut",
      }}
    />
  ));

  return (
    <section
      ref={ref}
      id="home"
      className={cn("relative h-screen overflow-hidden", className)}
    >
      {/* Effet de lumière suivant la souris */}
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(59, 130, 246, 0.15), 
            rgba(147, 51, 234, 0.1), 
            transparent 70%)`,
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Aurore boréale effect */}
      <div className="absolute inset-0 z-[1]">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `linear-gradient(45deg, 
              transparent 30%, 
              rgba(59, 130, 246, 0.1) 50%, 
              rgba(147, 51, 234, 0.08) 60%, 
              rgba(34, 211, 238, 0.1) 80%, 
              transparent 90%)`,
            filter: 'blur(60px)',
          }}
          animate={{
            x: [-200, 200, -200],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-full h-full"
          style={{
            background: `linear-gradient(-45deg, 
              transparent 30%, 
              rgba(236, 72, 153, 0.1) 50%, 
              rgba(59, 130, 246, 0.08) 60%, 
              rgba(168, 85, 247, 0.1) 80%, 
              transparent 90%)`,
            filter: 'blur(80px)',
          }}
          animate={{
            x: [200, -200, 200],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Background parallax avec overlay amélioré */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-[120%] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${personalInfo.backgroundImage})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/70"></div>

        {/* Effet de vignette lumineuse */}
        <div className="absolute inset-0 bg-radial-gradient-custom opacity-60"></div>
      </motion.div>

      {/* Particules lumineuses */}
      <div className="absolute inset-0 z-[2]">
        {lightParticles}
      </div>

      {/* Rayons lumineux rotatifs */}
      <div className="absolute inset-0 z-[1] opacity-40">
        {lightRays}
      </div>

      {/* Orbes lumineux flottants */}
      <div className="absolute inset-0 z-[1]">
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              width: `${40 + Math.random() * 80}px`,
              height: `${40 + Math.random() * 80}px`,
              background: `radial-gradient(circle, ${
                ['rgba(59, 130, 246, 0.3)', 'rgba(147, 51, 234, 0.3)', 'rgba(34, 211, 238, 0.3)'][i % 3]
              }, transparent 70%)`,
              filter: `blur(${20 + Math.random() * 40}px)`,
            }}
            animate={{
              x: [0, 100 - Math.random() * 200, 0],
              y: [0, 100 - Math.random() * 200, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Formes géométriques animées avec effets lumineux */}
      <div className="absolute inset-0 z-[1]">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 right-20 w-32 h-32 border border-blue-500/40 rounded-full"
          style={{
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.5), inset 0 0 30px rgba(59, 130, 246, 0.2)',
            filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.7))',
          }}
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-32 left-16 w-24 h-24 border border-purple-500/40 rounded-full"
          style={{
            boxShadow: '0 0 25px rgba(147, 51, 234, 0.5), inset 0 0 25px rgba(147, 51, 234, 0.2)',
            filter: 'drop-shadow(0 0 15px rgba(147, 51, 234, 0.7))',
          }}
        />

        <motion.div
          animate={{
            rotate: [0, 180, 360],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-10 w-16 h-16 border border-cyan-400/50 rotate-45"
          style={{
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.6)',
            filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.8))',
          }}
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-32 w-20 h-20 rounded-lg backdrop-blur-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))',
            boxShadow: '0 0 40px rgba(147, 51, 234, 0.4), inset 0 0 20px rgba(59, 130, 246, 0.3)',
            filter: 'drop-shadow(0 0 15px rgba(147, 51, 234, 0.6))',
          }}
        />
      </div>

      {/* Contenu principal avec effets lumineux sur le texte */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex items-center justify-center h-full"
      >
        <div className="text-center text-white px-6 max-w-5xl">
          {/* Badge d'introduction avec effet lumineux */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
            className="mb-8"
          >
            <div className="inline-block p-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl mb-6"
                 style={{
                   boxShadow: '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 51, 234, 0.4)',
                   filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.5))',
                 }}>
              <motion.div
                className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)',
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.span
                  className="text-blue-400 font-medium text-lg"
                  animate={{
                    color: ["#60a5fa", "#a78bfa", "#22d3ee", "#60a5fa"],
                    textShadow: [
                      '0 0 10px rgba(59, 130, 246, 0.8)',
                      '0 0 20px rgba(147, 51, 234, 0.8)',
                      '0 0 15px rgba(34, 211, 238, 0.8)',
                      '0 0 10px rgba(59, 130, 246, 0.8)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  👋 Bonjour, je suis
                </motion.span>
              </motion.div>
            </div>
          </motion.div>

          {/* Nom avec effet de typing progressif et lueur */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))',
                }}>
              <motion.span
                className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  filter: [
                    'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))',
                    'drop-shadow(0 0 30px rgba(59, 130, 246, 0.8))',
                    'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {nameLetters.map((letter, index) => (
                  <motion.span
                    key={`name-${index}`}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={
                      index < visibleNameCount
                        ? {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            textShadow: '0 0 20px rgba(59, 130, 246, 0.8)'
                          }
                        : { opacity: 0, y: 20, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: 0
                    }}
                    className="inline-block"
                    whileHover={{
                      scale: 1.1,
                      textShadow: '0 0 30px rgba(59, 130, 246, 1)',
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </motion.span>
            </h1>
          </motion.div>

          {/* Titre avec effet de typing progressif et lueur améliorée */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-4xl mb-6 font-bold min-h-[3rem]">
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  filter: [
                    'drop-shadow(0 0 15px rgba(59, 130, 246, 0.8))',
                    'drop-shadow(0 0 25px rgba(147, 51, 234, 0.8))',
                    'drop-shadow(0 0 20px rgba(34, 211, 238, 0.8))',
                    'drop-shadow(0 0 15px rgba(59, 130, 246, 0.8))'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {titleLetters.map((letter, index) => (
                  <motion.span
                    key={`title-${index}`}
                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                    animate={
                      index < visibleTitleCount
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0, y: 15, scale: 0.9 }
                    }
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: 0
                    }}
                    className="inline-block"
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </motion.span>
            </h2>
            <motion.div
              className="h-1 mx-auto rounded-full"
              style={{
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.6)',
              }}
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 1, delay: 2.5 }}
            />
          </motion.div>

          {/* Description avec animation de mots et lueur */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <motion.p
              className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-light"
              style={{
                color: '#f8fafc'
              }}
              animate={{
                textShadow: [
                  '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(59,130,246,0.3)',
                  '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(147,51,234,0.4)',
                  '2px 2px 6px rgba(0,0,0,0.8), 0 0 15px rgba(34,211,238,0.3)',
                  '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(59,130,246,0.3)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {personalInfo.description}
            </motion.p>
          </motion.div>

          {/* Boutons CTA avec effets lumineux améliorés */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <button
                onClick={() => smoothScrollToSection('contact')}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center text-white shadow-2xl overflow-hidden cursor-pointer"
                style={{
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 51, 234, 0.4)',
                  filter: 'drop-shadow(0 10px 20px rgba(59, 130, 246, 0.4))',
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{
                    opacity: [0, 0.3, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  ✨ Me contacter
                </span>
              </button>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <button
                onClick={() => smoothScrollToSection('projects')}
                className="group relative px-8 py-4 border-2 border-white/30 hover:border-white/60 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center backdrop-blur-lg bg-white/10 hover:bg-white/20 text-white shadow-2xl overflow-hidden cursor-pointer"
                style={{
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                  filter: 'drop-shadow(0 5px 15px rgba(255, 255, 255, 0.2))',
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ scale: 0, rotate: 180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  🚀 Découvrir mes projets
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Indicateur de scroll avec effet lumineux */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/80 text-center cursor-pointer"
          whileHover={{
            scale: 1.1,
            filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.8))',
          }}
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="w-8 h-12 border-2 border-white/40 rounded-full mx-auto mb-3 bg-white/5 backdrop-blur-sm relative overflow-hidden"
               style={{
                 boxShadow: '0 0 20px rgba(59, 130, 246, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.1)',
               }}>
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-4 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mx-auto mt-2"
              style={{
                boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)',
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <motion.p
            className="text-sm font-medium"
            animate={{
              opacity: [0.7, 1, 0.7],
              textShadow: [
                '1px 1px 2px rgba(0,0,0,0.8), 0 0 10px rgba(59,130,246,0.5)',
                '1px 1px 2px rgba(0,0,0,0.8), 0 0 20px rgba(147,51,234,0.6)',
                '1px 1px 2px rgba(0,0,0,0.8), 0 0 10px rgba(59,130,246,0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✨ Explorez mon univers
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};
