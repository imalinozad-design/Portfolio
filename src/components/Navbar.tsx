import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Skills", href: "#skills" },
  { num: "03", label: "Experience", href: "#experience" },
  { num: "04", label: "Projects", href: "#projects" },
  { num: "05", label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/95 transition-all duration-300 ${
        scrolled ? "border-b border-border shadow-lg shadow-background/50" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3 flex items-center justify-between h-14 sm:h-16">
        <a href="#" className="font-mono text-primary text-base sm:text-lg md:text-xl font-bold flex-shrink-0 hover:text-primary/80 transition-colors">
          &lt;AN /&gt;
        </a>

        {/* Desktop nav - visible on lg and above */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="font-mono text-xs xl:text-sm text-muted-foreground hover:text-primary transition-colors duration-200 px-3 py-2 rounded hover:bg-primary/5"
            >
              <span className="text-primary">{link.num}.</span> <span>{link.label}</span>
            </motion.a>
          ))}
          <div className="w-px h-6 bg-border mx-2" />
          <a
            href="#contact"
            className="font-mono text-xs xl:text-sm border border-primary text-primary px-4 py-2 rounded hover:bg-primary/10 transition-colors duration-200 font-medium"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger - visible on md and below */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary p-2 rounded hover:bg-primary/10 transition-colors flex-shrink-0"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

    </motion.nav>

    {/* Mobile menu drawer - outside nav */}
    <AnimatePresence>
      {mobileOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-card z-50 md:hidden shadow-2xl flex flex-col overflow-y-auto"
          >
            {/* Close button */}
            <div className="flex items-center justify-end p-4 sm:p-6 border-b border-border/30">
              <button
                onClick={() => setMobileOpen(false)}
                className="text-primary hover:bg-primary/10 p-2 rounded transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu items */}
            <div className="flex-1 flex flex-col">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="px-6 py-5 sm:py-6 font-mono text-base sm:text-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-200 flex items-center gap-4 border-b border-border/30"
                >
                  <span className="text-primary font-bold text-xl">{link.num}.</span>
                  <span className="flex-1">{link.label}</span>
                  <span className="text-primary/50 text-sm">→</span>
                </motion.a>
              ))}
            </div>

            {/* CTA Section */}
            <div className="p-6 sm:p-8 border-t border-border/30 bg-background/20">
              <motion.a
                href="#contact"
                onClick={handleNavClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                className="block w-full px-6 py-3 sm:py-4 rounded font-mono text-sm sm:text-base border border-primary text-primary hover:bg-primary/15 transition-colors duration-200 text-center font-medium mb-4"
              >
                Get In Touch
              </motion.a>
              <p className="font-mono text-xs sm:text-sm text-muted-foreground text-center">
                imalinozad@gmail.com
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
};

export default Navbar;
