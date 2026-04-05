import { motion, AnimatePresence } from "motion/react";
import { 
  TrendingUp, 
  BookOpen, 
  Shield, 
  Zap, 
  Skull, 
  ChevronRight, 
  ExternalLink,
  Send,
  MessageSquare,
  Instagram,
  LineChart
} from "lucide-react";
import React, { useState, useEffect } from "react";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05, x: 5 }}
    whileTap={{ scale: 0.95 }}
    className="group flex items-center justify-between p-6 bg-white/5 border border-white/10 hover:border-brand-red/50 hover:bg-brand-red/5 transition-all duration-300 rounded-xl relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-brand-red/0 via-brand-red/0 to-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="flex-1 text-center">
      <h3 className="font-display font-bold text-xl tracking-wider group-hover:text-brand-red transition-colors">
        {children}
      </h3>
    </div>
    <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-brand-red transition-colors" />
  </motion.a>
);

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-red selection:text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b0a0a,transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_120%,#1a0505,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6 relative">
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-24 h-24 rounded-full flex items-center justify-center border-2 border-brand-red/50 shadow-[0_0_30px_rgba(255,0,0,0.3)] overflow-hidden"
            >
              <img 
                src="https://i.postimg.cc/q7kcCfng/ec5ca2d563770515847f644e8a3123a3.jpg" 
                alt="Lkey7 Icon"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {/* Reply Bubble from outside (visible right side) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, x: -20, rotate: 5 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                x: 0, 
                rotate: -2,
                y: [0, 8, 0] 
              }}
              transition={{ 
                opacity: { delay: 2 },
                scale: { delay: 2 },
                x: { delay: 2 },
                rotate: { delay: 2 },
                y: { 
                  repeat: Infinity, 
                  duration: 4.5, 
                  ease: "easeInOut",
                  delay: 2 
                }
              }}
              className="absolute top-16 -right-36 z-20"
            >
              <div className="relative bg-brand-red text-white text-[8px] font-black px-3 py-1 rounded-full whitespace-nowrap shadow-[0_0_12px_rgba(255,0,0,0.5)] italic tracking-tight border border-white/10">
                We’re not criminals!!!
                
                {/* Trail pointing right towards the outside edge */}
                <div className="absolute -right-1 bottom-0 w-2 h-2 bg-brand-red rounded-full shadow-[0_0_6px_rgba(255,0,0,0.4)]" />
                <div className="absolute -right-3 -bottom-2 w-1.5 h-1.5 bg-brand-red rounded-full shadow-[0_0_6px_rgba(255,0,0,0.4)]" />
                <div className="absolute -right-5 -bottom-4 w-1 h-1 bg-brand-red rounded-full shadow-[0_0_6px_rgba(255,0,0,0.4)]" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.5, x: -20, rotate: -5 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                x: 0, 
                rotate: 2,
                y: [0, -8, 0] 
              }}
              transition={{ 
                opacity: { delay: 1 },
                scale: { delay: 1 },
                x: { delay: 1 },
                rotate: { delay: 1 },
                y: { 
                  repeat: Infinity, 
                  duration: 4, 
                  ease: "easeInOut",
                  delay: 1 
                }
              }}
              className="absolute top-4 -right-36 z-20"
            >
              <div className="relative bg-brand-red text-[8px] font-black px-3 py-1 rounded-full whitespace-nowrap shadow-[0_0_12px_rgba(255,0,0,0.5)] text-white italic tracking-tight border border-white/10">
                Welcome to my society...
                
                {/* Adjusted trail for smaller bubble and right shift */}
                <div className="absolute -left-1 bottom-0 w-2 h-2 bg-brand-red rounded-full shadow-[0_0_6px_rgba(255,0,0,0.4)]" />
                <div className="absolute -left-3 -bottom-2 w-1.5 h-1.5 bg-brand-red rounded-full shadow-[0_0_6px_rgba(255,0,0,0.4)]" />
                <div className="absolute -left-5 -bottom-4 w-1 h-1 bg-brand-red rounded-full shadow-[0_0_6px_rgba(255,0,0,0.4)]" />
              </div>
            </motion.div>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-black tracking-tighter mb-4 italic glitch-text">
            SANDANI<span className="text-brand-red">FX</span>
          </h1>
          <p className="text-gray-400 font-medium tracking-[0.2em] uppercase text-sm mb-8">
            who's Lkey7?
          </p>
          
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://t.me/LkeySeven"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: '#ff0000' }}
              className="text-gray-500 transition-colors"
            >
              <Send className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -3, color: '#ff0000' }}
              className="text-gray-500 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -3, color: '#ff0000' }}
              className="text-gray-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Main Links */}
        <div className="grid gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <NavLink href="https://naraka.sandanifx.my.id">
              Narakasura<span className="text-brand-red">AI</span>
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <NavLink href="https://app.sandanifx.my.id">
              Journal<span className="text-brand-red">Apps</span>
            </NavLink>
          </motion.div>
        </div>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center border-t border-white/10 pt-12"
        >
          <blockquote className="italic text-gray-500 max-w-lg mx-auto">
            "In the realm of trading, only the disciplined survive. The rest are just liquidity for the Asuras."
          </blockquote>
          <p className="mt-4 font-display text-xs tracking-widest text-brand-red font-bold">
            EST. 2024 // SANDANIFX ECOSYSTEM
          </p>
        </motion.div>
      </main>

      {/* Decorative Elements */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50" />
    </div>
  );
}
