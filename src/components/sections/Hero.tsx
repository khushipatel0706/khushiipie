import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

const TYPING_SPEED = 100;
const ROLE_TEXT = "2nd Year Computer Science Student";

export function Hero() {
  const [displayedRole, setDisplayedRole] = useState("");
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < ROLE_TEXT.length) {
        setDisplayedRole(ROLE_TEXT.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, TYPING_SPEED);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 rounded-full glass text-primary text-sm font-medium mb-6"
          >
            Welcome to my portfolio
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <br />
            <span className="text-gradient">Khushi Patel</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground h-10 mb-6">
            {displayedRole}<span className="animate-pulse">|</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Passionate about building scalable web applications and exploring the depths of computer science. Turning ideas into elegant, high-performance solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-hover transition-colors">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium hover:bg-muted transition-colors">
              Contact Me
            </a>
            <a href="/resume.pdf" download className="flex items-center gap-2 text-primary px-6 py-3 font-medium hover:underline">
              <Download size={18} /> Resume
            </a>
          </div>
        </motion.div>

        {/* Profile Picture */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-[400px] md:h-[600px] w-full relative z-0 flex items-center justify-center"
        >
          <div className="relative w-72 h-96 md:w-96 md:h-[32rem] rounded-[2rem] overflow-hidden glass border-4 border-white/20 shadow-2xl z-10 group">
            {/* 
              We are using a placeholder path for the profile picture.
              Please save your image as 'profile.jpg' inside the 'src/assets' folder.
            */}
            <img 
              src="/profile.jpg" 
              alt="Khushi Patel" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Decorative blur elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/30 rounded-full blur-[100px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
