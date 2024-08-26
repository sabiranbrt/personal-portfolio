import { ReactSVG } from "react-svg";
import LocationLogo from "../../assets/icons/location.svg";
import MailLogo from "../../assets/icons/mail.svg";
import PhoneLogo from "../../assets/icons/phone.svg";
import SocialLogo from "../../assets/icons/social.svg";
import FacebookLogo from "../../assets/icons/faceebook.svg";
import InstaLogo from "../../assets/icons/instagram.svg";
import LinkedInLogo from "../../assets/icons/linkedin.svg";
import WhatsAppLogo from "../../assets/icons/whatsapp.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  const address = [
    {
      logo: <ReactSVG src={LocationLogo} />,
      title: "Address:",
      subtitle: "Biratnagar, Nepal",
      social: null,
    },
    {
      logo: <ReactSVG src={MailLogo} />,
      title: "Mail:",
      subtitle: "Sabiran Shah",
      social: null,
    },
    {
      logo: <ReactSVG src={PhoneLogo} />,
      title: "Phone:",
      subtitle: "+977-9842143869",
      social: null,
    },
    {
      logo: <ReactSVG src={SocialLogo} />,
      title: "Social:",
      subtitle: null,
      social: [
        {
          facebook: <ReactSVG src={FacebookLogo} />,
          instagram: <ReactSVG src={InstaLogo} />,
          linkedIn: <ReactSVG src={LinkedInLogo} />,
          whatsApp: <ReactSVG src={WhatsAppLogo} />,
        },
      ],
    },
  ];

  return (
    <div className="contact_page">
      <div className="container">
        <div className="contact_wrapper">
          <div className="title">
            <h3 className="head_title">Contact</h3>
            <h2 className="sub_title">Get in Touch</h2>
          </div>
          <div className="get_in_touch">
            <div className="address">
              {address.map((items) => {
                return (
                  <div className="address_logo">
                    <div className="logo">{items.logo}</div>
                    <div className="address_detail">
                      <h5 className="para">{items.title}</h5>
                      <h3>{items.subtitle}</h3>
                      {items.social?.map((items) => {
                        return (
                          <div className="social_sites">
                            <Link to="#">{items.facebook}</Link>
                            <Link to="#">{items.instagram}</Link>
                            <Link to="#">{items.linkedIn}</Link>
                            <Link to="#">{items.whatsApp}</Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="form">
              <form action="">
                <div className="form_wrapper">
                  <div className="form_text_box">
                    <input placeholder="Name" />
                    <input placeholder="Email" />
                  </div>
                  <div className="form_text_area">
                    <textarea placeholder="Message" rows={5} />
                    <a href="#" className="btn">
                      <span>Send Message</span>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
