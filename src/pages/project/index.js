import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

// images from the asset folder in the image file
import DiceeChallange from '../../assets/images/DiceeChallange.png'
import DrumKit from '../../assets/images/DrumKit.png'
import TinDog from '../../assets/images/TinDog.png'
import C from '../../assets/images/C.png'

// projects' id, name, stacks, icon and url data
export const projects = [
  {
    id: 1,
    name: 'Dicee-Challange',
    desc:
      'Helps you to roll the Dice digitally',
    stack: 'HTML CSS JAVASCRIPT',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Divyansh06Sharma/Dice-Challenge',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://divyansh06sharma.github.io/Dice-Challenge/',
    },
    imgUrl: DiceeChallange,
  },
  {
    id: 2,
    name: 'Drum-Kit',
    desc: 'You get your own D.rum with different voices',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Divyansh06Sharma/Drum-Kit',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://divyansh06sharma.github.io/Drum-Kit/',
    },
    imgUrl: DrumKit,
  },
  {
    id: 3,
    name: 'Tin-Dog',
    desc: 'This is an amazing project for your Dog to find his soulmate',
    stack: 'React JS',
    imgUrl: TinDog,

    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Divyansh06Sharma/Tindog',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://divyansh06sharma.github.io/Tindog/',
    },
  },
  {
    id: 5,
    name: 'CV',
    desc: 'A project that displays all information about Me',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Divyansh06Sharma/CV-2',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://divyansh06sharma.github.io/CV-2/',
    },
    imgUrl: C,
  },
  {
    id: 4,
    name: 'Tin-Dog',
    desc: 'This is an amazing project for your Dog to find his soulmate',
    stack: 'React JS',
    imgUrl: TinDog,

    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Divyansh06Sharma/Tindog',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://divyansh06sharma.github.io/Tindog/',
    },
  },
  {
    id: 1,
    name: 'Dicee-Challange',
    desc:
      'Helps you to roll the Dice digitally',
    stack: 'HTML CSS JAVASCRIPT',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Divyansh06Sharma/Dice-Challenge',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://divyansh06sharma.github.io/Dice-Challenge/',
    },
    imgUrl: DiceeChallange,
  },
  {
    id: 5,
    name: 'CV',
    desc: 'A project that displays all information about Me',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Divyansh06Sharma/CV-2',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://divyansh06sharma.github.io/CV-2/',
    },
    imgUrl: C,
  },
  {
    id: 6,
    name: 'Drum-Kit',
    desc: 'You get your own Drum with different voices',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Divyansh06Sharma/Drum-Kit',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://divyansh06sharma.github.io/Drum-Kit/',
    },
    imgUrl: DrumKit,
  },

]
