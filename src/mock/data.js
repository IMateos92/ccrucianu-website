import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ignacio Mateos | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Ignacio Mateos' website", // e.g: Welcome to my website
  img: 'https://cristinacrucianu.netlify.app/og.jpg',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Cristina',
  subtitle: "I'm the Product Carer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm a seasoned product manager at an ed-tech startup in Barcelona and above all, I define myself as a growth mindset person. For this reason, I host a podcast called Growth Mindset On to spread the #growthmindseton attitude.",
  paragraphTwo:
    'My growth attitude has taken me to learn 6 languages, live in 5 countries, build 2 businesses, finish 2 masters and start a podcast.',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/ccrucianu/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'timeline_manomano.png',
    title: 'ManoMano',
    subtitle: '👩‍💻 Product Manager',
    info: '',
    url: 'https://www.manomano.co.uk/',
    date: 'May 2020 - Present',
  },
  {
    id: nanoid(),
    img: 'timeline_phandeeyar_talk.png',
    title: 'Phandeeyar',
    subtitle: '🗣️ Speaker',
    info: 'User Research and User Interview to Build the Right Product',
    url: 'https://www.linkedin.com/events/userresearchanduserinterviewtobuildtherightproduct/',
    date: 'Aug 2020',
  },
  {
    id: nanoid(),
    img: 'timeline_hotjar_talk.png',
    title: 'Hotjar Talks',
    subtitle: '🗣️ Speaker',
    info: 'Actionable tips to avoid bias in your users interviews',
    url: 'https://www.hotjar.com/ecommerce-tips/ux/user-interviews/',
    date: 'Jul 2020',
  },
  {
    id: nanoid(),
    img: 'timeline_classgap.png',
    title: 'ClassGap',
    subtitle: '👩‍💻 Product Manager',
    info: '',
    url: 'https://www.classgap.com/en',
    date: 'Apr 2019 - Apr 2020',
  },
  {
    id: nanoid(),
    img: 'timeline_service_club.jpg',
    title: 'Service Club',
    subtitle: '👩‍💻 Product Manager',
    info: '',
    url: 'https://serviceclub.com/',
    date: 'Oct 2018 - Apr 2019',
  },
  {
    id: nanoid(),
    img: 'timeline_techbloom.jpg',
    title: 'TechBloom',
    subtitle: '🚀 Co-Founder',
    info: '',
    url: 'https://www.techbloom.org/',
  },
  {
    id: nanoid(),
    img: 'timeline_podcast.jpg',
    title: 'GrowthMindsetOn',
    subtitle: '🎙️ Podcast Host',
    info: '',
    url: 'https://open.spotify.com/show/3vJ8I1JrfGIW0vXVzGrCwy',
    date: 'Mar 2019 - Sep 2020',
  },
  {
    id: nanoid(),
    img: 'timeline_nuclio.png',
    title: 'Nuclio Venture Builder',
    subtitle: '👩‍💻 Product Manager',
    info: '',
    url: 'https://www.youtube.com/watch?v=TzlJEH90Os0',
    date: 'Oct 2018 - Nov 2018',
  },
  {
    id: nanoid(),
    img: 'timeline_helloveronica.jpg',
    title: 'HelloVeronica',
    subtitle: '🚀 Founder',
    info: '',
    url: '',
    date: 'Sep 2014 - Dec 2018',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ccrucianu@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/cristincrucianu',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ccrucianu/',
    },
  ],
};
