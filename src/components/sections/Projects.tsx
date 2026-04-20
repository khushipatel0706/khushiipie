import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const PROJECTS = [
  {
    title: 'Student Management System',
    description: 'A comprehensive system to manage student records, grades, and attendance. Built with robust database architecture.',
    tech: ['Java', 'JDBC', 'MySQL', 'JavaFX'],
    github: 'https://github.com',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A highly interactive and 3D portfolio showcasing my work and skills, featuring smooth animations and modern design.',
    tech: ['React', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
    github: 'https://github.com',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Sorting Visualizer',
    description: 'An educational tool to visualize various sorting algorithms in real-time, helping students understand time complexity.',
    tech: ['C++', 'JavaScript', 'HTML5/CSS3'],
    github: 'https://github.com',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:flex justify-between items-end"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>
          <p className="text-muted-foreground mt-4 md:mt-0 max-w-md">
            A selection of my recent work, highlighting my problem-solving skills and technical versatility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group rounded-2xl overflow-hidden glass border border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 border-t border-border/50 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <FaGithub size={16} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
