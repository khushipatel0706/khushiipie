import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const TIMELINE = [
  {
    type: 'education',
    title: 'B.Tech in Computer Science',
    organization: 'University Name',
    date: '2024 - Present (2nd Year)',
    description: 'Focusing on core computer science subjects including Data Structures, Algorithms, Database Management, and Operating Systems. Active member of the coding club.',
  },
  {
    type: 'experience',
    title: 'Freelance Web Developer',
    organization: 'Self-Employed',
    date: '2023 - Present',
    description: 'Building modern, responsive websites for local businesses using React and Tailwind CSS. Improving SEO and user engagement.',
  },
  {
    type: 'education',
    title: 'Higher Secondary Education',
    organization: 'School Name',
    date: '2022 - 2024',
    description: 'Graduated with distinction, specializing in Science and Mathematics. Developed initial interest in programming via school projects.',
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] top-4 bottom-4 w-0.5 bg-border md:left-1/2 md:-ml-[1px]" />

          <div className="space-y-12">
            {TIMELINE.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Icon Marker */}
                <div className="absolute left-0 md:left-1/2 md:-ml-7 w-14 h-14 rounded-full bg-background border-4 border-primary flex items-center justify-center text-primary z-10 shadow-lg">
                  {item.type === 'education' ? <GraduationCap size={24} /> : <Briefcase size={24} />}
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'
                }`}>
                  <div className="glass p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <h4 className="text-sm text-muted-foreground font-medium mb-4">
                      {item.organization}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
