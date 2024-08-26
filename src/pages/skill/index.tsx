const Skill = () => {
  const skillsCount = [
    {
      title1: "Development & Skills",
      title2: "Language Skills",
      developmentSkills: [
        {
          item: "HTML & CSS/SCSS",
          percent: "90%",
        },
        {
          item: "BootStrap & Tailwind CSS",
          percent: "85%",
        },
        {
          item: "JavaScript",
          percent: "70%",
        },
        {
          item: "React JS",
          percent: "75%",
        },
        {
          item: "React Native",
          percent: "60%",
        },
        {
          item: "React Query",
          percent: "60%",
        },
      ],
      languageSkills: [
        {
          item: "English",
          percent: "70%",
        },
        {
          item: "Nepali",
          percent: "90%",
        },
        {
          item: "Bengali",
          percent: "90%",
        },
        {
          item: "Hindi",
          percent: "90%",
        },
      ],
    },
  ];

  return (
    <div className="skill_page">
      <div className="container">
        <div className="skill_wrapper">
          <div className="title">
            <h3 className="head_title">Skills</h3>
            <h2 className="sub_title">Experience & Skills</h2>
          </div>
          <div className="skills_wrap">
            {skillsCount.map((item) => {
              return (
                <>
                  <div className="skills_points">
                    <h4>{item.title1}</h4>
                    <div className="count">
                      {item.developmentSkills.map((item) => {
                        return (
                          <div className="box">
                            <div className="box_color">
                              <p className="head_title">
                                {item.item} - {item.percent}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="skills_points">
                    <h4>{item.title2}</h4>
                    <div className="count">
                      {item.languageSkills.map((item) => {
                        return (
                          <div className="box">
                            <div className="box_color">
                              <p className="head_title">
                                {item.item} - {item.percent}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
