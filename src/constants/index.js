import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  thrvst_logo_test,
  appStore,
  googlePlay,
  awsLogo,
  pythonLogo,
  reactLogo,
  meet_team,
  cover_pic
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Demos",
    url: "#demos",
  },
  {
    id: "2",
    title: "Our Story",
    url: "#ourstory",
  },
  {
    id: "3",
    title: "Are you ready to THRVST?",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSf1bjOG7oqsA4uxE2oiG9CoN6xTpl32XIUWkFsobUi5F85M7A/viewform?usp=header",
  },
  {
    id: "4",
    title: "Contact Us",
    url: "#contact-us",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Join Waitlist",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdw74J7t-5FPPQWI4skcRahkMBr-JqUaqqFmV6AhlB8svFQkg/viewform?usp=header",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const ourStory = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const featuresText =
  `Our state of the art computer vision & machine learning models allow students \
 and professionals to enrich their motor skill development exponentially.`;

export const featuresText2 = `Find out if you are THRVST-ing safely and effectively.`;

export const featuresText3 = `Analyze your THRVST performance in: Thoracic, Lumbar, and Cervical adjustments. (more to come...)`;

export const featuresContent = [
  {
    id: "0",
    title: "Real-time Pose Analysis",
    text: featuresText,
  },
  {
    id: "1",
    title: "Instantaneous Feedback",
    text: featuresText2,
  },
  {
    id: "2",
    title: "Multiple Adjustment Support",
    text: featuresText3,
  },
];

export const featuresApps = [
  {
    id: "0",
    title: "App Store",
    icon: appStore,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Google Play",
    icon: googlePlay,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "aws",
    icon: awsLogo,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Python",
    icon: pythonLogo,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "react",
    icon: reactLogo,
    width: 34,
    height: 34,
  },
];

export const demos = [
  {
    id: "0",
    title: "Thoracic",
    text: "Explore THRVST tracking for thoracic adjustments...",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    youtubeUrl: "https://youtu.be/qD8Ecg7tzSE",
  },
  {
    id: "1",
    title: "Lumbar",
    text: "Explore THRVST tracking for lumbar adjustments...",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    comingSoon: true,
  },
  {
    id: "2",
    title: "Cervical",
    text: "Explore THRVST tracking for cervical adjustments...",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    comingSoon: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
