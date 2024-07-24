"use client";
import { useState } from "react";
import Image from "next/image";
import style from "@/styles/TabChange.module.css";

const data = [
  {
    data_id: "Popular",
    titleName: "Mobile Application Team",
    image: "https://www.mindinventory.com/img/explore-teams/mobile-application-team.webp",
    languages: ["Kotlin", "Swift", "Swift UI", "Flutter", "React Native"],
    teamComposition: ["UI/UX Designer", "Mobile Frontend Engineer", "Backend Engineer", "QA Engineer"],
    linkTab: "#",
  },
  {
    data_id: "Popular",
    titleName: "Saas Product Development",
    image: "https://www.mindinventory.com/img/explore-teams/saas-product-development.webp",
    languages: ["Reactjs", "Nodejs", "MongoDB", "GCP", "Docker", "Jenkins"],
    teamComposition: ["1 Business Analyst", "2 Front End & Backend Engineers", "2 Mobile App Programmers"],
    linkTab: "#",
  },
  {
    data_id: "Popular",
    titleName: "Web Development Team",
    image: "https://www.mindinventory.com/img/explore-teams/mobile-application-team.webp",
    languages: ["Kotlin", "Swift", "Swift UI", "Flutter", "React Native"],
    teamComposition: ["UI/UX Designer", "Mobile Frontend Engineer", "Backend Engineer", "QA Engineer"],
    linkTab: "#",
  },
  {
    data_id: "Product Engineering",
    titleName: "eCommerce Platform",
    image: "https://www.mindinventory.com/img/explore-teams/ecommerce-platform.webp",
    languages: ["Kotlin", "Swift", "Swift UI", "Flutter", "React Native"],
    teamComposition: ["UI/UX Designer", "Business Analyst", "Mobile App Developers"],
    linkTab: "#",
  },
  {
    data_id: "Product Engineering",
    titleName: "Collaboration and Communication Product",
    image: "https://www.mindinventory.com/img/explore-teams/collaboration-and-communication-product.webp",
    languages: ["Reactjs", "Nodejs", "MongoDB", "GCP", "Docker", "Jenkins"],
    teamComposition: ["Business Analyst", "Front End & Backend Engineers", "Mobile App Developers", "UI/UX Designer"],
    linkTab: "#",
  },
  {
    data_id: "SaaS",
    titleName: "OnDemand Ride Sharing Platform",
    image: "https://www.mindinventory.com/img/explore-teams/collaboration-and-communication-product.webp",
    languages: ["Reactjs", "Nodejs", "MongoDB"],
    teamComposition: ["1 Business Analyst", "2 Front End & Backend Engineers", "2 Mobile App Programmers", "1 UI/UX Designer", "1 DevOps Engineer"],
    linkTab: "#",
  },
];

const TabChange = () => {
  const [selectedTab, setSelectedTab] = useState(data[0].data_id);

  // Get unique tab names
  const tabs = [...new Set(data.map((item) => item.data_id))];

  // Filter cards based on the selected tab
  const filteredCards = data.filter((item) => item.data_id === selectedTab);

  return (
    <section className={`${style["explore-specialise-teams-maindiv"]}`}>
      <div className="mx-auto container">
        <div className={style["topbuttonsdiv"]}>
          <ul className={`${style["explore-tabs"]}`}>
            {tabs.map((tab) => (
              <li className={`${style["tabitem"]}`}>
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`${style["tabitembtn"]} ${selectedTab === tab ? style["active"] : ""}`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${style["cards-section-main"]}`}>
          {filteredCards.map((item, index) => (
            <div key={index} className={`${style["singlecardmain"]}`} data-id={item.data_id}>
              <div className={`${style["cardimagediv"]}`}>
                <Image width={500} height={220} src={item.image} alt={item.titleName} className={`${style["cardimg"]}`} />
              </div>
              <h4 className={`${style["cardtitle"]}`}>{item.titleName}</h4>
              <ul className={`${style["languagediv"]}`}>
                {item.languages.map((language, i) => (
                  <li key={language + i} className={`${style["languageitem"]}`}>
                    {language}
                  </li>
                ))}
              </ul>
              <div className={`${style["team-composition"]}`}>
                <h6 className={`${style["card-subheading"]}`}>Team Composition</h6>

                <ul className={`${style["team-list"]}`}>
                  {item.teamComposition.map((team, i) => (
                    <li key={i} className={`${style["teamlistitem"]}`}>
                      <span className={`${style["plus"]}`}>+</span>
                      <span>{team}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <img src={item.imagepath} alt={item.data_id} /> */}
              <div className={`${style["card-bottompart"]}`}>
                <div className={`${style["cardbtndiv"]}`}>
                  <a href="#" className={`${style["cardactionbtn"]}`}>
                    Get Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabChange;
