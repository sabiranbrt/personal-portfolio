import ProfileImage from "../../assets/images/profilephoto.jpg";
import CountUp from "react-countup";

const About = () => {
  const resumeList = [
    {
      title: "Education",
      resumeDetail: [
        {
          date: "2000 - 2012",
          title: "Bal kalayan Vidya Mandir",
          subtitle: "SLC",
        },
        {
          date: "2013 -2014",
          title: "Shikshadeep Secondary Boarding School",
          subtitle: "HSEB",
        },
        {
          date: "2017 -2022",
          title: "Purwanchal University School of Engineering",
          subtitle: "Bachelor",
        },
      ],
    },
    {
      title: "Experience",
      resumeDetail: [
        {
          date: "Oct 2022 - Dec 2022",
          title: "Code Logic Technology Pvt. Ltd.",
          subtitle: "Intership / Trainee",
        },
        {
          date: "Jan 2023 - Present",
          title: "Bal kalayan Vidya Mandir",
          subtitle: "Associate Software Enginner Level II",
        },
      ],
    },
  ];
  return (
    <div className="about_page">
      <div className="container">
        <div className="about_wrapper">
          <div className="about_img">
            <img src={ProfileImage} />
          </div>
          <div className="about_details">
            <div className="about_details_wrapper">
              <div className="title">
                <h3 className="head_title">About</h3>
                <h2 className="sub_title">
                  Sabiran Shah is a Web Developer based in Nepal.
                </h2>
              </div>
              <div className="discription">
                <p className="para">
                  I am a Web Developer, and I'm very passionate and dedicated to
                  my work. With 5 years experience as a professional Web
                  developer, I have acquired the skills and knowledge necessary
                  to make your project a success.
                </p>
                <a href="#" className="btn">
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="count">
        <div className="container">
          <div className="count_wrapper">
            <div className="count_items">
              <h3>
                <CountUp enableScrollSpy={true} scrollSpyOnce={true} end={4} />{" "}
                +
              </h3>
              <p className="para">Year Experience</p>
            </div>
            <div className="count_items">
              <h3>
                <CountUp enableScrollSpy={true} scrollSpyOnce={true} end={20} />{" "}
                +
              </h3>
              <p className="para">Projects</p>
            </div>
            <div className="count_items">
              <h3>
                <CountUp enableScrollSpy={true} scrollSpyOnce={true} end={20} />{" "}
                +
              </h3>
              <p className="para">Client</p>
            </div>
          </div>
        </div>
      </div>
      <div className="timeline">
        <div className="container">
          <div className="title">
            <h3 className="head_title">Resume</h3>
            <h2 className="sub_title">Experience & Education</h2>
          </div>
          <div className="timeline_experience_education">
            {resumeList.map((items) => {
              return (
                <div className="timeline_wrapper">
                  <h1>{items.title}</h1>
                  {items.resumeDetail.map((items) => {
                    return (
                      <ul className="timeline_list">
                        <li className="timeline_item">
                          <div className="date">
                            <h5>{items.date}</h5>
                          </div>
                          <div className="place">
                            <h3>{items.title}</h3>
                            <h2 className="para">{items.subtitle}</h2>
                          </div>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
