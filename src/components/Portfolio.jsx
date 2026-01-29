import React from "react";
import SubHeading from "./SubHeading";
import { allPortfolio } from "../constant";

const Portfolio = ({ page }) => {
  let portfolioList;

  if (page === "web-development") {
    portfolioList = allPortfolio.filter(
      (item) => item.category === "Web Development"
    );
  } else if (page === "app-development") {
    portfolioList = allPortfolio.filter(
      (item) => item.category === "App Development"
    );
  } else if (page === "ai-development") {
    portfolioList = allPortfolio.filter(
      (item) => item.category === "AI Development"
    );
  } else {
    // Show a mix OR just the first few from each category for Home page
    // Let's show first 2 of each
    const web = allPortfolio
      .filter((item) => item.category === "Web Development")
      .slice(0, 2);
    const app = allPortfolio
      .filter((item) => item.category === "App Development")
      .slice(0, 2);
    const ai = allPortfolio
      .filter((item) => item.category === "AI Development")
      .slice(0, 2);
    portfolioList = [...web, ...app, ...ai];
  }
  return (
    <div className="py-[5rem] wrapper flex flex-col items-center gap-5">
      <SubHeading heading="Our Portfolio" />
      <h2
        data-aos="fade-up"
        className="heading-2 max-w-[60rem] mx-auto text-center"
      >
        Delivering Excellence: Our Recent Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl mx-auto mt-5">
        {portfolioList.map(({ img, id, title, link }) => (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square sm:aspect-square rounded-xl overflow-hidden group block"
            key={id}
            data-aos="fade-up"
          >
            <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-[#0a1828db] z-0 transition-opacity duration-300 group-hover:opacity-90"></div>
            <img
              loading="lazy"
              src={img}
              width="200"
              height="200"
              className={`-z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110`}
              alt={title}
            />
            <h3 className="text-xl absolute p-3 bottom-0 left-0 w-full bg-[#0f2136] text-center text-white">
              {title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
