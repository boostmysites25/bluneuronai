import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";

export { logoImg };

export const companyDetails = {
  phone: "+1 555-0123", // Placeholder, updated from "0000000000"
  address: "Innovation Hub, Tech City, USA", // Generic placeholder
  email: "info@bluneuronai.com",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
];

// Web Development Services (Service 2)
export const webDevelopmentServices = [
  {
    id: 1,
    title: "Full-Stack Development",
    icon: require("./assets/images/icons/webdev.png"),
    description:
      "Comprehensive front-end and back-end development using modern frameworks like React, Node.js, and Python to build powerful, scalable web applications.",
  },
  {
    id: 2,
    title: "E-Commerce Solutions",
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Custom e-commerce platforms that drive sales. We integrate secure payment gateways, inventory management, and intuitive user interfaces.",
  },
  {
    id: 3,
    title: "Custom Web Applications",
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Tailor-made web applications designed to solve specific business challenges. We focus on specific workflows and user needs to deliver maximum value.",
  },
  {
    id: 4,
    title: "Progressive Web Apps (PWA)",
    icon: require("./assets/images/icons/landing-page.png"), // Reusing icon
    description:
      "Delivering app-like experiences on the web. Our PWAs are fast, reliable, and engaging, working seamlessly across desktop and mobile browsers.",
  },
];

// App Development Services (Service 1)
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Building seamless, high-performance iOS applications using Swift and Objective-C. We ensure your app delivers a premium user experience on all Apple devices.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "Creating robust and scalable Android applications with Java and Kotlin. Our apps are designed to reach a wide audience with optimal performance and stability.",
  },
  {
    id: 3,
    title: "Cross-Platform Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Leveraging Flutter and React Native to build beautiful, native-like apps for both iOS and Android from a single codebase, reducing time-to-market.",
  },
  {
    id: 4,
    title: "Enterprise Mobile Solutions",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "Developing secure and efficient mobile solutions tailored for enterprise needs, streamlining operations and enhancing workforce productivity.",
  },
];

// AI Development Services (Service 3)
export const aiDevelopmentServices = [
  {
    id: 1,
    title: "Machine Learning Solutions",
    icon: require("./assets/svgs/machine-learning.svg").default,
    description:
      "Custom ML models that learn from your data to predict trends, automate decision-making, and optimize operations for maximum efficiency.",
  },
  {
    id: 2,
    title: "Natural Language Processing",
    icon: require("./assets/svgs/nlp.svg").default,
    description:
      "Advanced NLP systems for chatbots, sentiment analysis, and automated text processing that enhance customer interaction and insight generation.",
  },
  {
    id: 3,
    title: "Computer Vision",
    icon: require("./assets/svgs/computer-vision.svg").default,
    description:
      "Visual recognition systems for quality control, security, and user engagement, turning visual data into actionable business intelligence.",
  },
  {
    id: 4,
    title: "Predictive Analytics",
    icon: require("./assets/svgs/predictive-analytics.svg").default,
    description:
      "Data-driven forecasting tools that help you anticipate market shifts, customer behaviors, and operational risks before they happen.",
  },
];

// portfolio
// export const portfolio = [
//   {
//     id: 1,
//     title: "Figo Tech",
//     img: require("./assets/images/portfolio/1.jpeg"),
//     imgFit: "object-cover",
//   },
//   {
//     id: 2,
//     title: "News Feed",
//     img: require("./assets/images/portfolio/2.jpeg"),
//     imgFit: "object-cover",
//   },
//   {
//     id: 3,
//     title: "Food Application",
//     img: require("./assets/images/portfolio/3.png"),
//     imgFit: "object-contain",
//   },
//   {
//     id: 4,
//     title: "Crio Load App",
//     img: require("./assets/images/portfolio/4.jpg"),
//     imgFit: "object-cover",
//   },
// ];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO of Innovative Tech Corp",
    img: require("./assets/images/testimonial1.png"),
    desc: "“Partnering with Bluneuron AI has been nothing short of a revelation for our organization. Their unwavering commitment to ethical AI has not only streamlined our operations but has also resonated deeply with our core values”",
  },
  {
    id: 2,
    name: "Sarah Jardin",
    position: "Director of Operations at Green Future Ltd",
    img: require("./assets/images/testimonial2.png"),
    desc: "“The exceptional team at Bluneuron AI took the time to thoroughly understand our unique challenges and crafted bespoke solutions that far exceeded our expectations.”",
  },
  {
    id: 3,
    name: "Velicia Jamez",
    position: "CTO of Health Innovations Group",
    img: require("./assets/images/testimonial3.png"),
    desc: "“Bluneuron AI stands at the forefront of ethical artificial intelligence. Their invaluable insights and expertise have been instrumental as we navigate the intricate landscape of implementing AI technologies within our business.”",
  },
];

// AI Development Services (Service 3) & Main Services List
export const allServices = [
  {
    id: 1,
    title: "App Development",
    description:
      "Transforming ideas into high-performance mobile applications. We build intuitive, feature-rich apps for iOS and Android that engage users and drive business growth.",
    icon: require("./assets/images/icons/appdev.png"),
    detailContent:
      "In the mobile-first era, a powerful app is essential for business success. At BluneuronAI, we specialize in creating mobile experiences that resonate with users. \n\n Our App Development services cover the entire lifecycle, from concept and design to development and deployment. Whether you need a native iOS app, a versatile Android solution, or a cost-effective cross-platform application, our expert team delivers. We prioritize user-centric design, ensuring that every interaction is smooth and intuitive. Performance optimization is at our core, guaranteeing that your app runs flawlessly on a wide range of devices.",
  },
  {
    id: 2,
    title: "Full-stack Website Development",
    description:
      "End-to-end web solutions that blend creativity with technical excellence. From responsive front-ends to robust back-ends, we create websites that perform.",
    icon: require("./assets/images/icons/webdev.png"),
    detailContent:
      "Your website is your digital storefront. BluneuronAI delivers Full-stack Website Development services that ensure your online presence is both impactful and functional. \n\n We handle every aspect of web development. Our front-end developers craft stunning, responsive interfaces using the latest technologies like React and Vue.js. On the back-end, we build secure, scalable infrastructures using Node.js, Python, and robust databases. Whether it's a complex enterprise web application, a dynamic e-commerce platform, or a custom content management system, we build solutions that grow with your business.",
  },
  {
    id: 3,
    title: "AI Development",
    description:
      "Empowering your business with intelligent solutions. We harness the power of Artificial Intelligence to automate processes, gain insights, and innovate.",
    icon: require("./assets/images/icons/ai.png"),
    detailContent:
      "Artificial Intelligence is redefining what's possible. BluneuronAI is at the forefront of this revolution, offering bespoke AI Development services tailored to your unique challenges. \n\n Our expertise spans machine learning, natural language processing, and computer vision. We help businesses automate repetitive tasks, uncover hidden patterns in data through predictive analytics, and create intelligent agents that enhance customer service. From recommendation engines to fraud detection systems, our ethical and scalable AI solutions are designed to drive efficiency and unlock new opportunities for innovation.",
  },
];

// portfolio images (web development)
// Portfolio Projects
export const allPortfolio = [
  // Web Development Projects
  {
    id: 1,
    title: "5g Homes",
    img: require("./assets/web-development/5ghomes.webp"),
    link: "https://5ghighspeedinternet.co",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Cold Creekcap",
    img: require("./assets/web-development/cold-creekcap.webp"),
    link: "https://www.coldcreekcap.com",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Think Reality",
    img: require("./assets/web-development/think-reality.webp"),
    link: "https://thinkrealty.ae",
    category: "Web Development",
  },
  {
    id: 4,
    title: "Akash Mega Mart",
    img: require("./assets/web-development/akash-mega-mart.webp"),
    link: "https://akashmegamart.com/",
    category: "Web Development",
  },
  {
    id: 5,
    title: "Midwam – Immersive Experience Design Company",
    img: require("./assets/web-development/midwam.webp"),
    link: "https://www.midwam.com/en/about",
    category: "Web Development",
  },
  // App Development Projects
  {
    id: 6,
    title: "Akash Mega Mart Mobile App",
    img: require("./assets/app-development/akash_mega_mart-app.webp"),
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
    category: "App Development",
  },
  {
    id: 7,
    title: "FeelIt Mobile App",
    img: require("./assets/app-development/feelit_app.webp"),
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
    category: "App Development",
  },
  {
    id: 8,
    title: "Klikomics Mobile App",
    img: require("./assets/app-development/klikomics.webp"),
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
    category: "App Development",
  },
  {
    id: 9,
    title: "AutoSnap Mobile App",
    img: require("./assets/app-development/autosnap-app.webp"),
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
    category: "App Development",
  },
  {
    id: 10,
    title: "Rentop Bike and Car",
    img: require("./assets/app-development/rentop.webp"),
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
    category: "App Development",
  },
  // AI Development Projects
  {
    id: 11,
    title: "Find My AI Tool",
    img: require("./assets/ai/Find My AI Tool.png"),
    link: "https://findmyaitool.com",
    category: "AI Development",
  },
  {
    id: 12,
    title: "AI Art Generator – Vyro AI",
    img: require("./assets/ai/AI Art Generator – Vyro AI.webp"),
    link: "https://vyro.ai",
    category: "AI Development",
  },
  {
    id: 13,
    title: "Musicly – AI Music Generator",
    img: require("./assets/ai/Musicly – AI Music Generator.webp"),
    link: "https://musicly.ai",
    category: "AI Development",
  },
];
