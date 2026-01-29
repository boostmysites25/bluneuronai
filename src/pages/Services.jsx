import React from "react";
const WebsiteHeader = React.lazy(() => import("../components/website/WebsiteHeader"));
const PageBanner = React.lazy(() => import("../components/website/PageBanner"));
const AllServices = React.lazy(() => import("../components/website/AllServices"));
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() => import("../components/JoinHappyCustomers"));
const WebsiteFooter = React.lazy(() => import("../components/website/WebsiteFooter"));

const Services = () => {
  return (
    <>
      <WebsiteHeader />
      <PageBanner
        title="Our Services"
        desc="At Bluneuron AI, we represent more than just a service provider; we are your dedicated partners in digital evolution. We foster an environment of relentless innovation, where our expert engineers and data scientists are constantly pushing the boundaries of what's possible to deliver next-generation AI and software solutions."
      />
      <AllServices />
      <OurValue />
      <WhyChooseUs />
      <Testimonials />
      <JoinHappyCustomers />
      <WebsiteFooter />
    </>
  );
};

export default Services;
