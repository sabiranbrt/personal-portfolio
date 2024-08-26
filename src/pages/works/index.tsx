import { useState } from "react";
import WebApp from "../../assets/images/Item.png";
import WebApp1 from "../../assets/images/item2.png";
import clsx from "clsx";
import { motion } from "framer-motion";

const Works = () => {
  const tabsItems = [
    {
      tabs: "All",
      subtabs: [
        {
          image: <img src={WebApp} alt="" />,
          title: "Personal Portfolio",
          subtitle: "Web Application",
        },
        {
          image: <img src={WebApp} alt="" />,
          title: "Personal Portfolio",
          subtitle: "Web Application",
        },
        {
          image: <img src={WebApp} alt="" />,
          title: "Personal Portfolio",
          subtitle: "Web Application",
        },
        {
          image: <img src={WebApp} alt="" />,
          title: "Personal Portfolio",
          subtitle: "Web Application",
        },
      ],
    },
    {
      tabs: "Web Application",
      subtabs: [
        {
          image: <img src={WebApp1} alt="" />,
          title: "Personal Portfolio",
          subtitle: "Web Application",
        },
      ],
    },
    {
      tabs: "Mobile App",
      subtabs: [
        {
          image: <img src={WebApp} alt="" />,
          title: "Personal Portfolio",
          subtitle: "Web Application",
        },
        {
          image: <img src={WebApp} alt="" />,
          title: "Personal Portfolio",
          subtitle: "Web Application",
        },
        {
          image: <img src={WebApp} alt="" />,
          title: "Personal Portfolio",
          subtitle: "Web Application",
        },
        {
          image: <img src={WebApp} alt="" />,
          title: "Personal Portfolio",
          subtitle: "Web Application",
        },
      ],
    },
  ];

  const [showTabs, setShowTabs] = useState("All");

  const handleTabs = (items: string) => {
    setShowTabs(items);
  };

  return (
    <div className="work_page">
      <div className="container">
        <div className="work_wrapper">
          <div className="title">
            <h3 className="head_title">Works</h3>
            <h2 className="sub_title">Creative Portfolio</h2>
          </div>
          <div className="work_tabs">
            <div className="tabs_wrapper">
              <div className="tab_bar">
                {tabsItems.map((items) => {
                  return (
                    <div
                      className={clsx(
                        "tab_bar_item",
                        items.tabs === showTabs ? "active" : null
                      )}
                      onClick={() => handleTabs(items.tabs)}
                    >
                      <h4>{items.tabs}</h4>
                    </div>
                  );
                })}
              </div>

              {tabsItems.map((items) => {
                return (
                  <>
                    {items.tabs === showTabs ? (
                      <div className="tab_items_wrapper">
                        {items.subtabs.map((items) => {
                          return (
                            <motion.div
                              className="tab_items"
                              initial={{ scale: 0.9 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              {items.image}
                              <div className="tab_detail">
                                <h3>{items.title}</h3>
                                <h5>{items.subtitle}</h5>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    ) : null}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
