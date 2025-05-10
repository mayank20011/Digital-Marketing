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
    alt: "seo Logo",
    heading: "SEO",
    pera: "We help businesses boost their online visibility and rank higher on search engines with proven SEO strategies tailored for long-term success, quality traffic, and measurable growth through data-driven insights.",
    href: "/seo",
  },
  {
    img: "/marketAnalysisIcon.png",
    alt: "Content Marketing logo",
    heading: "Content Marketing",
    pera: "We craft engaging, value-driven content that builds brand authority, attracts your target audience, and drives meaningful engagement through strategic storytelling and consistent messaging.",
    href: "/content-marketing",
  },
  {
    img: "/projectManagementIcon.png",
    alt: "Performance Marketing Logo",
    heading: "Performance Marketing",
    pera: "We drive measurable growth through targeted performance campaigns that optimize ROI, reduce acquisition costs, and scale conversions using data, precision, and real-time insights.",
    href: "/performance-marketing",
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


export const generateFLoatingDotsdata = (count = 50) =>{
    const colors = ["bg-red-600", "bg-green-600", "bg-pink-400", "bg-gray-300",
    "bg-neutral-500", "bg-red-800", "bg-yellow-300", "bg-orange-400",
    "bg-orange-100", "bg-green-100"];
   return Array.from({length:count},(_,i)=>({
    id:i,
    x:Math.floor(Math.random() * window.innerWidth),
    y:Math.floor(Math.random()*window.innerHeight),
    color:colors[Math.floor(Math.random()*colors.length)],
   }))
}
