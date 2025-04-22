export const ServiceCards = [
  {
    img: "/businessDevelopmentIcon.png",
    alt: "Business Development Logo",
    heading: "Business Development",
    pera: "We help you uncover new opportunities, build strong partnerships, and scale faster with tailored strategies designed to grow your brand sustainably in today’s evolving digital landscape.",
    href: "/business-development",
  },
  {
    img: "/digitalMarketingIcon.png",
    alt: "Digital Marketing Logo",
    heading: "Digital Marketing",
    pera: "From SEO and social media to paid ads and content—our team crafts performance-driven campaigns that build awareness, drive traffic, and turn visitors into loyal customers.",
    href: "/digital-marketing",
  },
  {
    img: "/investmentStrategiesIcon.png",
    alt: "Investment Strategies Logo",
    heading: "Investment Strategies",
    pera: "We guide startups and growing businesses with smart investment strategies focused on risk management, long-term growth, and maximizing returns through data-backed decision-making.",
    href: "/investment-strategies",
  },
  {
    img: "/marketAnalysisIcon.png",
    alt: "Market Analysis Logo",
    heading: "Market Analysis",
    pera: "We dig deep into industry trends, consumer behavior, and competitor data to give you insights that drive smarter business decisions and keep you ahead of the curve.",
    href: "/market-analysis",
  },
  {
    img: "/projectManagementIcon.png",
    alt: "Project Management Logo",
    heading: "Project Management",
    pera: "Our agile project management approach ensures deadlines are met, communication is clear, and deliverables stay aligned with your goals—every step of the way.",
    href: "/project-management",
  },
  {
    img: "/webDevelopmentIcon.png",
    alt: "Web Development Logo",
    heading: "Web Development",
    pera: "From sleek websites to dynamic web apps, we build fast, responsive, and scalable digital experiences that perform well and leave lasting impressions on your users.",
    href: "/web-development",
  },
];

export const ServiceSlideData = [
  "Bussiness development,",
  "Digital Marketing,",
  "Investment Strategies,",
  "Market Analysis,",
  "Project Management,",
  "Web Development,",
];

export const HowWeCompleteProjectsData = {
  src:"/howWeCompleteProject.png",
  alt:"Chart Analysis Logo",
  cards:[
    {
      img:"/goals.png",
      alt:"Goals Logo",
      heading:"Understand Goals",
      pera:"We begin by understanding client goals, audience, and expectations clearly and quickly."
    },
    {
      img:"/strategy.png",
      alt:"Strategy Logo",
      heading:"Plan Strategically",
      pera:"A custom plan is made using SEO, ads, and content in perfect sync."
    },
    {
      img:"/execution.png",
      alt:"Execution Logo",
      heading:"Execute Flawlessly",
      pera:"We launch campaigns smoothly, track results, and tweak for the best performance."
    }
  ]
}

export const floatingDotsData = Array.from({ length: 50 }, (_, id) => ({
  id,
  color: [
    "bg-red-600", "bg-green-600", "bg-pink-400", "bg-gray-300",
    "bg-neutral-500", "bg-red-800", "bg-yellow-300", "bg-orange-400",
    "bg-orange-100", "bg-green-100"
  ][Math.floor(Math.random() * 10)], 
  p: "4",
  x: Math.floor(Math.random() * 2000),
  y: Math.floor(Math.random() * 700)
}));