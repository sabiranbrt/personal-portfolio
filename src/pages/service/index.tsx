import CreativeDesign from "../../assets/icons/logo1.svg";
import WebDesign from "../../assets/icons/logo2.svg";
import SeoMarketing from "../../assets/icons/logo3.svg";
import MobileApp from "../../assets/icons/logo4.svg";
import { ReactSVG } from "react-svg";

const Service = () => {
  const serviceItems = [
    {
      logo: <ReactSVG src={CreativeDesign} />,
      title: "Creative Design",
      discription:
        "Most common methods for designing websites that work well on desktop...",
    },
    {
      logo: <ReactSVG src={WebDesign} />,
      title: "Web Design",
      discription:
        "Most common methods for designing websites that work well on desktop...",
    },
    {
      logo: <ReactSVG src={SeoMarketing} />,
      title: "SEO Marketing",
      discription:
        "Most common methods for designing websites that work well on desktop...",
    },
    {
      logo: <ReactSVG src={MobileApp} />,
      title: "Mobile App",
      discription:
        "Most common methods for designing websites that work well on desktop...",
    },
  ];

  return (
    <div className="service_page">
      <div className="container">
        <div className="service_wrapper">
          <div className="title">
            <h3 className="head_title">Services</h3>
            <h2 className="sub_title">What I Do </h2>
          </div>
        </div>
        <div className="box_wrapper">
          {serviceItems.map((items) => {
            return (
              <div className="box_items">
                <div className="logo">{items.logo}</div>
                <div className="title_wrap">
                  <h4>{items.title}</h4>
                  <p className="para">{items.discription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
