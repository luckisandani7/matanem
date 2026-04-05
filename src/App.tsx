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
  CandlestickChart
} from "lucide-react";
import React, { useState, useEffect } from "react";

const NavLink = ({ href, title, subtitle, icon: Icon }: { href: string; title: React.ReactNode; subtitle: string; icon: any }) => {
  const isImageUrl = typeof Icon === 'string';

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02, x: 10 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex items-center gap-6 p-6 bg-black/40 border-l-4 border-white/5 hover:border-brand-red bg-[linear-gradient(45deg,rgba(255,0,0,0.02)_0%,transparent_100%)] hover:bg-[linear-gradient(45deg,rgba(255,0,0,0.05)_0%,transparent_100%)] transition-all duration-500 rounded-r-xl overflow-hidden shadow-2xl"
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/0 via-brand-red/5 to-brand-red/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Icon Container */}
      <motion.div 
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-16 h-16 flex items-center justify-center rounded-lg bg-black/60 border border-white/10 group-hover:border-brand-red/60 group-hover:bg-brand-red/10 transition-all duration-700 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]"
      >
        <motion.div
          animate={{ 
            filter: ["drop-shadow(0 0 0px rgba(255,0,0,0))", "drop-shadow(0 0 10px rgba(255,0,0,0.6))", "drop-shadow(0 0 0px rgba(255,0,0,0))"],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20 flex items-center justify-center"
        >
          {isImageUrl ? (
            <img 
              src={Icon} 
              alt="" 
              className="w-8 h-8 object-contain opacity-50 group-hover:opacity-100 group-hover:brightness-125 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          ) : (
            <Icon className="w-8 h-8 text-gray-500 group-hover:text-brand-red transition-all duration-500" />
          )}
        </motion.div>
        
        {/* Corner Accents - More Aggressive with Pulse */}
        <motion.div 
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-brand-red/0 group-hover:border-brand-red transition-all duration-500 group-hover:w-6 group-hover:h-6" 
        />
        <motion.div 
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-brand-red/0 group-hover:border-brand-red transition-all duration-500 group-hover:w-6 group-hover:h-6" 
        />
        
        {/* Hexagon-like Inner Glow */}
        <div className="absolute inset-0 bg-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1)_0%,transparent_70%)]" />
        </div>
      </motion.div>

      {/* Text Content */}
      <div className="relative z-10 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-display font-black text-xl tracking-tighter uppercase group-hover:text-brand-red transition-colors">
            {title}
          </h3>
          <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-brand-red/30 transition-colors" />
        </div>
        <p className="text-xs font-medium text-gray-500 uppercase tracking-[0.2em] group-hover:text-gray-400 transition-colors">
          {subtitle}
        </p>
      </div>

      <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
        <ChevronRight className="w-6 h-6 text-brand-red" />
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%] opacity-20" />
    </motion.a>
  );
};

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-red selection:text-white select-none">
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
          className="text-center mb-24"
        >
          <div className="inline-block mb-8 relative">
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-28 h-28 rounded-full flex items-center justify-center border-2 border-brand-red/50 shadow-[0_0_40px_rgba(255,0,0,0.2)] overflow-hidden bg-black"
            >
              <img 
                src="https://i.postimg.cc/q7kcCfng/ec5ca2d563770515847f644e8a3123a3.jpg" 
                alt="Lkey7 Icon"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
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
              className="absolute top-16 -right-40 z-20"
            >
              <div className="relative bg-brand-red text-white text-[9px] font-black px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_20px_rgba(255,0,0,0.4)] italic tracking-tighter border border-white/20 uppercase">
                We’re not criminals!!!
                <div className="absolute -right-1 bottom-0 w-2.5 h-2.5 bg-brand-red rounded-full shadow-[0_0_8px_rgba(255,0,0,0.5)]" />
                <div className="absolute -right-4 -bottom-2 w-1.5 h-1.5 bg-brand-red rounded-full shadow-[0_0_8px_rgba(255,0,0,0.5)]" />
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
              className="absolute top-4 -right-40 z-20"
            >
              <div className="relative bg-brand-red text-[9px] font-black px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_20px_rgba(255,0,0,0.4)] text-white italic tracking-tighter border border-white/20 uppercase">
                Welcome to my society...
                <div className="absolute -left-1 bottom-0 w-2.5 h-2.5 bg-brand-red rounded-full shadow-[0_0_8px_rgba(255,0,0,0.5)]" />
                <div className="absolute -left-4 -bottom-2 w-1.5 h-1.5 bg-brand-red rounded-full shadow-[0_0_8px_rgba(255,0,0,0.5)]" />
              </div>
            </motion.div>
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-black tracking-tighter mb-4 italic glitch-text text-white">
            SANDANI<span className="text-brand-red">FX</span>
          </h1>
          <p className="text-gray-500 font-bold tracking-[0.3em] uppercase text-xs mb-10">
            who's Lkey7? // THE ASURA PROTOCOL
          </p>
          
          <div className="flex justify-center gap-8">
            <motion.a
              href="https://t.me/LkeySeven"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#ff0000', filter: 'drop-shadow(0 0 8px rgba(255,0,0,0.5))' }}
              className="text-gray-600 transition-all duration-300"
            >
              <Send className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ y: -5, color: '#ff0000', filter: 'drop-shadow(0 0 8px rgba(255,0,0,0.5))' }} 
              className="text-gray-600 transition-all duration-300"
            >
              <MessageSquare className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ y: -5, color: '#ff0000', filter: 'drop-shadow(0 0 8px rgba(255,0,0,0.5))' }} 
              className="text-gray-600 transition-all duration-300"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>

        {/* Main Links */}
        <div className="grid gap-6 mb-24 text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <NavLink 
              href="https://naraka.sandanifx.my.id"
              title={<>Narakasura<span className="text-brand-red">AI</span></>}
              subtitle="Advanced Trading Intelligence // V1.0"
              icon="https://i.postimg.cc/N0dfY0Xg/hacker.png"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <NavLink 
              href="https://app.sandanifx.my.id"
              title={<>Trading<span className="text-brand-red">Apps</span></>}
              subtitle="Discipline Tracking Ecosystem"
              icon="https://i.postimg.cc/mgRHgtPT/income-statement.png"
            />
          </motion.div>
        </div>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center border-t border-white/5 pt-16"
        >
          <blockquote className="italic text-gray-600 max-w-lg mx-auto text-sm leading-relaxed">
            "In the realm of trading, only the disciplined survive. The rest are just liquidity for the Asuras."
          </blockquote>
          <div className="mt-8 flex flex-col items-center gap-2">
            <div className="w-12 h-[1px] bg-brand-red/30" />
            <p className="font-display text-[10px] tracking-[0.4em] text-brand-red font-black uppercase">
              EST. 2024 // SANDANIFX ECOSYSTEM
            </p>
          </div>
        </motion.div>
      </main>

      {/* Decorative Elements */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50" />
    </div>
  );
}
