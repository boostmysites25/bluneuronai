import React, { lazy } from "react";
import bannerImg from "../assets/images/banner.webp";
import SubHeading from "../components/SubHeading";
import {
  appDevelopmentServices,
  webDevelopmentServices,
  aiDevelopmentServices,
} from "../constant";
import TrustWorthySection from "../components/TrustWorthySection";
import appDevAboutImg from "../assets/images/landingpage/app-dev-about.webp";
import webDevAboutImg from "../assets/images/landingpage/web-dev-about.webp";
import aiDevAboutImg from "../assets/images/landingpage/ai-dev-about.png";

const LandingHeader = lazy(() =>
  import("../components/landingPages/LandingHeader")
);
const LandingFooter = lazy(() =>
  import("../components/landingPages/LandingFooter")
);
const ContactForm = lazy(() =>
  import("../components/landingPages/ContactForm")
);
const Portfolio = lazy(() => import("../components/Portfolio"));
const ConnectWithUs = lazy(() => import("../components/ConnectWithUs"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));

const LandingPage = ({ page }) => {
  const isWebLanding = page === "web-development";
  const isAppLanding = page === "app-development";
  const isAILanding = page === "ai-development";

  let services;
  if (isWebLanding) {
    services = webDevelopmentServices;
  } else if (isAppLanding) {
    services = appDevelopmentServices;
  } else {
    services = aiDevelopmentServices;
  }

  return (
    <>
      <LandingHeader />
      <section id="banner" className="h-screen relative text-white">
        <div className="absolute top-0 w-full h-full bg-secondary/90"></div>
        <img
          loading="lazy"
          src={bannerImg}
          sizes="(max-width: 600px) 200px, 
         (max-width: 1200px) 800px, 
         1200px"
          className="w-full h-full absolute -z-10 object-cover object-center"
          alt=""
        />
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-5 justify-center items-center h-full relative z-10"
        >
          <p className="text-xl">
            Welcome to{" "}
            <span className="text-primary font-semibold">
              Bluneuron AI
            </span>
          </p>
          <h1 className="heading-1 text-stroke">
            {isWebLanding
              ? "Crafting High-Performance Websites that Drive Results"
              : isAppLanding
                ? "Innovation-Driven App Development Services"
                : "Pioneering the Future with Intelligent AI Solutions"}
          </h1>
          <p className="sub-heading">
            {isAILanding
              ? "Empowering Your Business with Ethical & Scalable AI"
              : "Engineering the Future with Ethical AI and Superior Code"}
          </p>
        </div>
      </section>
      <section id="about" className="text-white wrapper pt-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={
                isWebLanding
                  ? webDevAboutImg
                  : isAppLanding
                    ? appDevAboutImg
                    : aiDevAboutImg
              }
              className="object-cover h-full rounded-lg"
              alt="about us"
              width="600"
              height="400"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading
                heading={
                  isWebLanding
                    ? "Web Development"
                    : isAppLanding
                      ? "App Development"
                      : "AI Development"
                }
              />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={
                    isWebLanding
                      ? webDevAboutImg
                      : isAppLanding
                        ? appDevAboutImg
                        : aiDevAboutImg
                  }
                  className="object-cover h-full rounded-lg w-full"
                  alt="about"
                  width="200"
                  height="200"
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                {isWebLanding
                  ? "Next-Gen Web Solutions for Forward-Thinking Brands"
                  : isAppLanding
                    ? "Turning Concepts into High-Impact Mobile Apps"
                    : "Intelligent Solutions for a Complex World"}
              </h2>
              <p className="desc">
                {isWebLanding
                  ? "We blend creative design with robust engineering to build web platforms that do more than just exist—they perform. Our full-stack approach ensures your website is scalable, secure, and optimized to convert visitors into loyal customers."
                  : isAppLanding
                    ? "Every successful app starts with a great idea. We take that idea and engineer it into a feature-rich, user-friendly mobile experience. Whether for iOS or Android, our apps are built to scale and delight users at every touchpoint."
                    : "Artificial Intelligence is more than a buzzword; it's a catalyst for growth. We build bespoke AI models that automate processes, predict trends, and enhance decision-making, ensuring your business stays ahead of the curve."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="wrapper py-[5rem] flex flex-col gap-5 items-center"
      >
        <SubHeading
          heading={
            isWebLanding
              ? "Web Development Services"
              : isAppLanding
                ? "App Development Services"
                : "AI Development Services"
          }
        />
        <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-center"
        >
          {isWebLanding
            ? "Enhancing Brands with Engaging Web Experiences"
            : isAppLanding
              ? "Building Apps that Define the Future"
              : "Automate, Optimize, and Innovate with AI"}
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              data-aos="fade-up"
              className="bg-tertiary items-center rounded-lg p-5 flex text-center flex-col"
            >
              <img
                loading="lazy"
                src={service.icon}
                className="h-[3.5rem] md:h-[4.5rem] object-contain"
                alt={service.title}
                width="100"
                height="100"
              />
              <h6 className="text-xl font-medium mt-2">{service.title}</h6>
              <p className="desc mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <TrustWorthySection />
      <Portfolio page={page} />
      <WhyChooseUs />
      <Testimonials />
      <ConnectWithUs />
      <JoinHappyCustomers />
      <ContactForm />
      <LandingFooter />
    </>
  );
};

export default LandingPage;
