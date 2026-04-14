import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Современная платформа электронной коммерции на React, Node.js и MongoDB. Реальный функционал корзины, авторизация пользователей и интеграция платежей.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600&h=400',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'AI Dashboard Analytics',
      description: 'Интеллектуальная панель аналитики с визуализацией данных в реальном времени. Использует машинное обучение для прогнозирования трендов и поведения пользователей.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400',
      tags: ['Python', 'TensorFlow', 'D3.js'],
      link: '#'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'Безопасное мобильное банковское приложение с биометрической аутентификацией, мгновенными переводами и отслеживанием расходов в реальном времени.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600&h=400',
      tags: ['React Native', 'Firebase', 'Stripe'],
      link: '#'
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'Современная социальная платформа с функциями реального времени: чат, видеозвонки, трансляции и умная лента контента на основе ИИ.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600&h=400',
      tags: ['Next.js', 'WebRTC', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 5,
      title: 'Cloud Storage Service',
      description: 'Масштабируемое облачное хранилище с сквозным шифрованием, автоматической синхронизацией и функциями совместной работы.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600&h=400',
      tags: ['AWS', 'Docker', 'TypeScript'],
      link: '#'
    },
    {
      id: 6,
      title: 'Gaming Portfolio Website',
      description: 'Игровая веб-платформа с 3D-визуализацией, анимациями и интерактивным портфолио для игровых разработчиков и стримеров.',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600&h=400',
      tags: ['Three.js', 'GSAP', 'Unity'],
      link: '#'
    }
  ];

  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'AWS/Cloud', level: 75 }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0f0f0f 100%)' }}>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes neonPulse {
          0%, 100% { 
            box-shadow: 0 0 5px rgba(239, 68, 68, 0.5),
                         0 0 10px rgba(239, 68, 68, 0.3),
                         0 0 20px rgba(239, 68, 68, 0.2);
          }
          50% { 
            box-shadow: 0 0 10px rgba(239, 68, 68, 0.7),
                         0 0 20px rgba(239, 68, 68, 0.5),
                         0 0 40px rgba(239, 68, 68, 0.3);
          }
        }
        
        @keyframes textNeon {
          0%, 100% { 
            text-shadow: 0 0 10px rgba(239, 68, 68, 0.8),
                         0 0 20px rgba(239, 68, 68, 0.6),
                         0 0 30px rgba(239, 68, 68, 0.4),
                         0 0 40px rgba(239, 68, 68, 0.2);
          }
          50% { 
            text-shadow: 0 0 20px rgba(239, 68, 68, 1),
                         0 0 40px rgba(239, 68, 68, 0.8),
                         0 0 60px rgba(239, 68, 68, 0.6),
                         0 0 80px rgba(239, 68, 68, 0.4);
          }
        }
        
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(239, 68, 68, 0.3); }
          50% { border-color: rgba(239, 68, 68, 0.6); }
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(239, 68, 68, 0.4);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
                      0 0 20px rgba(239, 68, 68, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        .project-card {
          position: relative;
          overflow: hidden;
        }
        
        .project-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.8), transparent);
          transform: translateY(100%);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-card.active .project-overlay,
        .project-card:hover .project-overlay {
          transform: translateY(0);
        }
        
        .neon-text {
          animation: textNeon 3s ease-in-out infinite;
        }
        
        .nav-glass {
          background: rgba(15, 15, 15, 0.8);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .skill-bar {
          background: linear-gradient(90deg, #ef4444, #dc2626);
          box-shadow: 0 0 10px rgba(239, 68, 68, 0.5),
                      0 0 20px rgba(239, 68, 68, 0.3);
          transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.5;
          pointer-events: none;
        }
      `}</style>

      {/* Animated Gradient Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(-45deg, #0f0f0f, #1a1a2e, #2d1f3d, #1a1a2e, #0f0f0f)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite',
          zIndex: 0
        }}
      />

      {/* Floating Orbs */}
      <div className="orb floating" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)', top: '10%', left: '10%', animationDelay: '0s' }} />
      <div className="orb floating" style={{ width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(220, 38, 38, 0.2) 0%, transparent 70%)', top: '60%', right: '10%', animationDelay: '2s' }} />
      <div className="orb floating" style={{ width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(248, 113, 113, 0.2) 0%, transparent 70%)', bottom: '20%', left: '30%', animationDelay: '4s' }} />

      {/* Mouse Glow Effect */}
      <div 
        className="fixed pointer-events-none"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, transparent 70%)',
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          transition: 'left 0.3s ease-out, top 0.3s ease-out',
          zIndex: 1
        }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="nav-glass fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold text-white neon-text"
            whileHover={{ scale: 1.05 }}
          >
            TAKAYAMA-RIZ
          </motion.h1>
          <div className="flex gap-8">
            {['Home', 'Projects', 'Skills', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="text-gray-300 hover:text-red-400 transition-colors duration-300 relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" style={{ boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)' }} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="glass-card inline-block px-6 py-2 rounded-full mb-8"
          >
            <span className="text-red-400 text-sm font-medium">✨ Available for work</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6"
          >
            Creative{' '}
            <span className="text-red-500 neon-text">Developer</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Building digital experiences with passion, precision, and cutting-edge technology
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-6 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(239, 68, 68, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-red-600 text-white rounded-2xl font-semibold transition-all duration-300"
              style={{ boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)' }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card px-8 py-4 text-white rounded-2xl font-semibold"
            >
              Contact Me
            </motion.a>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-2"
            >
              <div className="w-1.5 h-3 bg-red-500 rounded-full" style={{ boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)' }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-red-400 text-sm font-medium tracking-wider uppercase">Portfolio</span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Featured <span className="text-red-500 neon-text">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A selection of my recent work. Click or hover on cards to explore project details
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`glass-card project-card rounded-3xl overflow-hidden cursor-pointer ${activeProject === project.id ? 'active' : ''}`}
                onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                  
                  {/* Project Title Overlay */}
                  <div className="absolute top-4 left-4 right-4">
                    <motion.div 
                      className="glass-card px-3 py-1.5 rounded-xl inline-block"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-xs text-red-400 font-medium">Project {index + 1}</span>
                    </motion.div>
                  </div>

                  {/* Hover Overlay with Info */}
                  <AnimatePresence>
                    {(activeProject === project.id) && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/30 flex items-center justify-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center"
                          style={{ boxShadow: '0 0 30px rgba(239, 68, 68, 0.6)' }}
                        >
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Slide-up Info Panel */}
                <div className="project-overlay p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-red-600/30 text-red-400 text-xs rounded-full border border-red-500/40"
                        style={{ boxShadow: '0 0 8px rgba(239, 68, 68, 0.2)' }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-red-400 font-medium text-sm hover:text-red-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>

                {/* Card Footer */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs text-gray-400">
                        {tag}{tagIndex < Math.min(1, project.tags.length - 2) ? ', ' : ''}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="text-xs text-red-400">+{project.tags.length - 2}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-red-400 text-sm font-medium tracking-wider uppercase">Expertise</span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              My <span className="text-red-500 neon-text">Skills</span>
            </h2>
          </motion.div>

          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white font-semibold text-lg">{skill.name}</span>
                  <motion.span 
                    className="text-red-400 font-bold"
                    whileHover={{ scale: 1.2, textShadow: '0 0 20px rgba(239, 68, 68, 0.8)' }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                  <motion.div
                    className="skill-bar h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-4 md:grid-cols-6 gap-6"
          >
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-3"
              >
                <div 
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center"
                  style={{ boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)' }}
                >
                  <span className="text-white font-bold text-lg">{tech[0]}</span>
                </div>
                <span className="text-gray-400 text-xs text-center">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-red-400 text-sm font-medium tracking-wider uppercase">Get in Touch</span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Let's <span className="text-red-500 neon-text">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg">Have a project in mind? Let's create something amazing together.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12"
          >
            <form className="grid gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="text-gray-400 text-sm mb-2 block">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 transition-all duration-300"
                    placeholder="John Doe"
                    style={{ boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)' }}
                  />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="text-gray-400 text-sm mb-2 block">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </motion.div>
              </div>
              
              <motion.div whileFocus={{ scale: 1.01 }}>
                <label className="text-gray-400 text-sm mb-2 block">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </motion.div>
              
              <motion.div whileFocus={{ scale: 1.01 }}>
                <label className="text-gray-400 text-sm mb-2 block">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(239, 68, 68, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-2xl transition-all duration-300"
                style={{ boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)' }}
              >
                Send Message
              </motion.button>
            </form>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-center text-gray-400 mb-6">Or find me on</p>
              <div className="flex justify-center gap-6">
                {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-card px-6 py-3 rounded-xl text-gray-300 hover:text-red-400 transition-all duration-300"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.h1 
            className="text-xl font-bold text-white neon-text"
            whileHover={{ scale: 1.05 }}
          >
            TAKAYAMA-RIZ
          </motion.h1>
          <p className="text-gray-500 text-sm">
            © 2024 Portfolio. Crafted with ❤️ and lots of ☕
          </p>
          <div className="flex gap-4">
            {['Privacy', 'Terms'].map((item) => (
              <a key={item} href="#" className="text-gray-500 hover:text-red-400 text-sm transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;