import svg1 from '../../images/svg-1.svg';
import svg2 from '../../images/svg-2.svg';
import svg3 from '../../images/svg-3.svg';


export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Banking',
    headline: 'Unlimited Transactions With Zero Fees',
    description: 'Get Access to our exclusive app for free!',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: svg1,
    alt: 'car',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Power',
    headline: 'Get Everything You Want From A Bank',
    description: 'Get Access to our exclusive app for free!',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: svg2,
    alt: 'Two',
    dark: false,
    //primary is for colour of button
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join Our Team',
    headline: 'Creating an account is easy',
    description: 'Get everything set up in under 10 minutes. All you need to do is enter your informationa and you are all set',
    buttonLabel: 'Start Now',
    imgStart: false,
    img: svg3,
    alt: 'papers',
    dark: false,
    primary: false,
    darkText: true
};