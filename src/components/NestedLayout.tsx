import { useEffect, useMemo, useRef, useState } from "react";
import Home from "../pages/home";
import About from "../pages/about";
import Service from "../pages/service";
import Skill from "../pages/skill";
import Works from "../pages/works";
import Testimonials from "../pages/testimonial";
import Contact from "../pages/contact";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../types/use-dimension";
import MenuToggle from "./MenuToggle";

const Nestedlayout = () => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const menuItemsUl = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const [activeSection, setActiveSection] = useState("#home");

  const handleLinkClick = (section: string) => {
    setActiveSection(section);
  };

  // Define refs for each section
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const serviceRef = useRef<HTMLElement>(null);
  const skillRef = useRef<HTMLElement>(null);
  const worksRef = useRef<HTMLElement>(null);
  const testimonialRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sectionRefs = useMemo(
    () => ({
      "#home": homeRef,
      "#about": aboutRef,
      "#service": serviceRef,
      "#skill": skillRef,
      "#works": worksRef,
      "#testimonial": testimonialRef,
      "#contact": contactRef,
    }),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, // Adjust this threshold based on when you want to detect the section in view
      }
    );

    // Observe each section
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  return (
    <div className="nested_layout">
      <div className="menu-toggle">
        <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
      </div>
      <div className="sidebar">
        <motion.div
          className="sidebar_page"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <motion.div className="sidebar_bottom background" variants={sidebar}>
            <motion.div className="title" variants={menuItemsUl}>
              <motion.h1
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Sabiran Shah
              </motion.h1>
            </motion.div>
            <motion.ul variants={menuItemsUl}>
              <motion.li
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#home"
                  className={activeSection === "#home" ? "active" : ""}
                  onClick={() => handleLinkClick("#home")}
                >
                  Home
                </a>
              </motion.li>
              <motion.li
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#about"
                  className={activeSection === "#about" ? "active" : ""}
                  onClick={() => handleLinkClick("#about")}
                >
                  About
                </a>
              </motion.li>
              <motion.li
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#service"
                  className={activeSection === "#service" ? "active" : ""}
                  onClick={() => handleLinkClick("#service")}
                >
                  Service
                </a>
              </motion.li>
              <motion.li
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#skill"
                  className={activeSection === "#skill" ? "active" : ""}
                  onClick={() => handleLinkClick("#skill")}
                >
                  Skills
                </a>
              </motion.li>
              <motion.li
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#works"
                  className={activeSection === "#works" ? "active" : ""}
                  onClick={() => handleLinkClick("#works")}
                >
                  Works
                </a>
              </motion.li>
              <motion.li
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#testimonial"
                  className={activeSection === "#testimonial" ? "active" : ""}
                  onClick={() => handleLinkClick("#testimonial")}
                >
                  Testimonial
                </a>
              </motion.li>
              <motion.li
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#contact"
                  className={activeSection === "#contact" ? "active" : ""}
                  onClick={() => handleLinkClick("#contact")}
                >
                  Contact
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
      <div className="homepage">
        <div className="main_page">
          <section id="home" ref={sectionRefs["#home"]}>
            <Home />
          </section>
          <section id="about" ref={sectionRefs["#about"]}>
            <About />
          </section>
          <section id="service" ref={sectionRefs["#service"]}>
            <Service />
          </section>
          <section id="skill" ref={sectionRefs["#skill"]}>
            <Skill />
          </section>
          <section id="works" ref={sectionRefs["#works"]}>
            <Works />
          </section>
          <section id="testimonial" ref={sectionRefs["#testimonial"]}>
            <Testimonials />
          </section>
          <section id="contact" ref={sectionRefs["#contact"]}>
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};
export default Nestedlayout;
