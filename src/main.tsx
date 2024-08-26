import { StrictMode, useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/scss/main.scss";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Service from "./pages/service";
import Skill from "./pages/skill";
import Testimonials from "./pages/testimonial";
import Works from "./pages/works";

export const Nestedlayout = () => {
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
      <div className="sidebar">
        <div className="sidebar_page">
          <div className="sidebar_bottom">
            <div className="title">
              <h1>Sabiran Shah</h1>
            </div>
            <ul>
              <li>
                <a
                  href="#home"
                  className={activeSection === "#home" ? "active" : ""}
                  onClick={() => handleLinkClick("#home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={activeSection === "#about" ? "active" : ""}
                  onClick={() => handleLinkClick("#about")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className={activeSection === "#service" ? "active" : ""}
                  onClick={() => handleLinkClick("#service")}
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#skill"
                  className={activeSection === "#skill" ? "active" : ""}
                  onClick={() => handleLinkClick("#skill")}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#works"
                  className={activeSection === "#works" ? "active" : ""}
                  onClick={() => handleLinkClick("#works")}
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className={activeSection === "#testimonial" ? "active" : ""}
                  onClick={() => handleLinkClick("#testimonial")}
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeSection === "#contact" ? "active" : ""}
                  onClick={() => handleLinkClick("#contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Nestedlayout />
    </Router>
  </StrictMode>
);
