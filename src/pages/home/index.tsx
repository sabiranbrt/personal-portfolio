import { ReactSVG } from "react-svg";
import FacebookLogo from "../../assets/icons/faceebook.svg";
import InstaLogo from "../../assets/icons/instagram.svg";
import LinkedInLogo from "../../assets/icons/linkedin.svg";
import WhatsAppLogo from "../../assets/icons/whatsapp.svg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home_page_items">
      <div className="container">
        <div className="home_page">
          <div className="image">
            <motion.div
              className="profile_image"
              animate={{
                borderRadius: [
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 60% 70% 40% / 50% 60% 30% 60%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                ],
              }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 1,
              }}
            ></motion.div>
          </div>
          <div className="title">
            <h1 className="head_text">Sabiran Shah</h1>
            <div className="description">
              <p className="head_title">
                A great web developer knows how to combine the art of design
                with the science of programming to create beautiful, functional
                websites.
              </p>
              <p>
                Mobile development is not just about creating an app; it’s about
                creating an experience that fits in the palm of your hand.
              </p>
              <div className="social_sites">
                <a href="#">
                  <ReactSVG src={FacebookLogo} />
                </a>
                <a href="#">
                  <ReactSVG src={InstaLogo} />
                </a>
                <a href="#">
                  <ReactSVG src={LinkedInLogo} />
                </a>
                <a href="#">
                  <ReactSVG src={WhatsAppLogo} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
