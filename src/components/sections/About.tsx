import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Database } from 'lucide-react';

const STRENGTHS = [
  {
    icon: <Code2 size={24} />,
    title: 'Clean Code',
    description: 'Writing readable, maintainable, and efficient code is my priority.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Web Development',
    description: 'Building responsive and accessible user interfaces with modern tech.',
  },
  {
    icon: <Database size={24} />,
    title: 'Data Structures',
    description: 'Strong foundation in DSA, optimizing logic for performance.',
  },
  {
    icon: <Cpu size={24} />,
    title: 'Continuous Learning',
    description: 'Always exploring new technologies to stay ahead of the curve.',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I am a 2nd Year B.Tech student majoring in Computer Science. My journey started with a fascination for how things work on the internet, which quickly evolved into a deep passion for software development. I specialize in bridging the gap between elegant design and complex backend systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STRENGTHS.map((strength, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                {strength.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{strength.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {strength.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
