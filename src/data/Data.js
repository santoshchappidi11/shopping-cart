import image1 from "../Images/img-1.jpg";
import image2 from "../Images/img-2.jpg";
import image3 from "../Images/img-3.jpg";
import image4 from "../Images/img-4.jpg";
import image5 from "../Images/img-5.jpg";
import image6 from "../Images/img-6.jpg";
import image7 from "../Images/img-7.jpg";
import image8 from "../Images/img-8.jpg";
import image9 from "../Images/img-9.jpg";
import image10 from "../Images/img-10.jpg";

const shoppingData = [
  {
    id: 1,
    name: "Soundcore by Anker Life Q30 Hybrid",
    image: image1,
    price: "700",
    rating: 4,
    numReviews: 10,
    inStock: true,
    delivery: true,
    viewId: "h1",
  },
  {
    id: 2,
    name: "JBL TUNE 600BTNC",
    image: image2,
    price: "490",
    rating: 4.5,
    numReviews: 12,
    inStock: true,
    delivery: true,
    viewId: "h2",
  },
  {
    id: 3,
    name: "Skullcandy Hesh Evo Wireless Over-Ear Headphone",
    image: image3,
    price: "970",
    rating: 5,
    numReviews: 8,
    inStock: true,
    delivery: false,
    viewId: "h3",
  },
  {
    id: 4,
    name: "PowerLocus Bluetooth Over-Ear Headphones",
    image: image4,
    price: "230",
    rating: 3.5,
    numReviews: 8,
    inStock: false,
    delivery: true,
    viewId: "h4",
  },
  {
    id: 5,
    name: "[2 Pack] iClever BTH03 Kids Wireless Headphones",
    image: image5,
    price: "450",
    rating: 3,
    numReviews: 8,
    inStock: true,
    delivery: true,
    viewId: "h5",
  },
  {
    id: 6,
    name: "Gorsun Lightweight Stereo Wired Children's Headsets for Kids Adults",
    image: image6,
    price: "510",
    rating: 4,
    numReviews: 8,
    inStock: true,
    delivery: false,
    viewId: "h6",
  },
  {
    id: 7,
    name: "Skullcandy Crusher Wireless Over-Ear Headphone",
    image: image7,
    price: "1480",
    rating: 4.5,
    numReviews: 13,
    inStock: false,
    delivery: true,
    viewId: "h7",
  },
  {
    id: 8,
    name: "Soundcore by Anker Life Q30",
    image: image8,
    price: "750",
    rating: 4,
    numReviews: 20,
    inStock: true,
    delivery: false,
    viewId: "h8",
  },
  {
    id: 9,
    name: "Sony Wireless Headphones WH-CH510",
    image: image9,
    price: "469",
    rating: 4.5,
    numReviews: 10,
    inStock: false,
    delivery: true,
    viewId: "h9",
  },
  {
    id: 10,
    name: "Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones",
    image: image10,
    price: "1890",
    rating: 5,
    numReviews: 15,
    inStock: true,
    delivery: false,
    viewId: "h10",
  },
];

export default shoppingData;

export const shoppingViewData = [
  {
    id: "h1",
    name: "Soundcore by Anker Life Q30 Hybrid Active Noise Cancelling Headphones with Multiple Modes, Hi-Res Sound, Custom EQ via App, 40H Playtime, Comfortable Fit, Bluetooth Headphones, Multipoint Connection",
    image: image1,
    price: "700",
    rating: 4,
    numReviews: 10,
    brand: "Soundcore",
    color: "Black",
    connectivity: "Wireless",
    modelname: "A3028",
    formfactor: "Over Ear",
    description:
      "Advanced Noise Cancellation Technology: Maintain your focus with Life Q30’s hybrid active noise cancellation. Dual noise-detecting microphones pick up and filter out up to 95% of low-frequency ambient sound to ensure nothing distracts you from your music. Ultimate Noise Cancellation Experience: Customize Life Q30’s noise cancellation with 3 modes—Transport minimizes airplane engine noise, Outdoor reduces traffic and wind, and Indoor dampens the sound of busy offices with people talking in the background. Hi-Res Music: Hear every detail of your favorite songs thanks to Life Q30’s 40mm drivers. The highly-flexible silk diaphragms reproduce thumping bass and crisp treble that extends up to 40kHz for improved clarity.",
    inStock: true,
    delivery: true,
  },
  {
    id: "h2",
    name: "JBL TUNE 600BTNC - Noise Cancelling On-Ear Wireless Bluetooth Headphone - Pink",
    image: image2,
    price: "490",
    rating: 4.5,
    numReviews: 12,
    brand: "JBL",
    color: "pink",
    connectivity: "Wireless",
    modelname: "JBL TUNE 600BTNC - Pink",
    formfactor: "On Ear",
    description:
      "Color:Pink Introducing the JBL TUNE600BTNC active noise-cancelling wireless on-ear headphones, a flat-folding lightweight and compact solution for everyday use. The JBL TUNE600BTNC feature 32 mm JBL drivers that helps deliver JBL Pure Bass sound. Sound that can be enjoyed without unnecessary noise for more than 12 hours wirelessly and can be fully recharged in only 2 hours. And thanks to the additional detachable cable, music can be enjoyed endlessly in wired mode, with or without Active Noise-Cancelling. Made with durable materials and designed in four fresh colors, the JBL TUNE600BTNC allow you to connect to your world quickly thanks to buttons on the ear cups that allow for easy hands-free management of calls and music.",
    inStock: true,
    delivery: true,
  },
  {
    id: "h3",
    name: "Skullcandy Hesh Evo Wireless Over-Ear Headphone - '92 Blue",
    image: image3,
    price: "970",
    rating: 5,
    numReviews: 8,
    brand: "Skullcandy",
    color: "Blue",
    connectivity: "Wireless",
    modelname: "Hesh Evo",
    formfactor: "Over Ear",
    description:
      "You don’t have to shell out hundreds of dollars for full, rich sound and wireless freedom. Hesh Evo gives you all that and much more for far less than other so-called “premium” headphones. The 4th generation Hesh Evo combines a proven design with all the features you need and none that you don’t. All controls — call, track change, and volume — are right at your fingertips with easy-to-use tactile buttons. Don’t remember where you left your headphones? Don’t sweat it — Hesh Evo comes with Tile finding technology built-in. Battery life is an impressive 22 hours. Even more impressive, Rapid Charge capability provides 3 hours of listening time on only 10 minutes of charge. Hesh Evo is travel-ready, too. It folds flat to fit perfectly into your bag.",
    inStock: true,
    delivery: false,
  },
  {
    id: "h4",
    name: "PowerLocus Bluetooth Over-Ear Headphones, Wireless Stereo Foldable Headphones Wireless and Wired Headsets with Built-in Mic, Micro SD/TF, FM for iPhone/Samsung/iPad/PC (Black/Red)",
    image: image4,
    price: "230",
    rating: 3.5,
    numReviews: 8,
    brand: "PowerLocus",
    color: "Black/Red",
    connectivity: "Wireless, Wired",
    modelname: "Hesh Evo",
    formfactor: "Over Ear",
    description:
      "The Future is Wireless- Foldable Over-Ear Bluetooth Headphones are designed from Californian engineers to provide you with premium experience and revolutionize your imagination for wireless headphones! Hands-Free Calls are supported! With P2 headphones, you will never miss any calls. Accept or decline incoming calls while you are wearing them. Enjoy long wireless playtime for your Playlists, Movies and Videos without any lag and distortion! Improved bluetooth connection V5.0 with range up to 33ft and possibility to have 2 devices paired simultaneously. Wireless headphone which we built with the highest quality premium materials in order to bring your daily life the comfort you need. Great headphone for the library, office hours, travel, gym, jogging etc. So many options with PowerLocus over ear headphones! Use them with Bluetooth, AUX cable, Micro SD/TF card and even FM radio mode. Compatible with all smartphones, laptops, tablets, PC - iPhone, Samsung, Nexus, Huawei, Macbook, iPod, iPad etc.",
    inStock: false,
    delivery: true,
  },
  {
    id: "h5",
    name: "[2 Pack] iClever BTH03 Kids Wireless Headphones - Colorful Lights Headphones for Kids with MIC, Volume Control Online Schooling - Children Headsets on Ear for School iPad Tablet Airplane, Blue/Pink",
    image: image5,
    price: "450",
    rating: 3,
    numReviews: 8,
    brand: "IClever",
    color: "Blue, Pink",
    connectivity: "Wireless",
    modelname: "BTH03",
    formfactor: "On Ear",
    description:
      "If your child is getting one-on-one online tutoring, this pair of headphones will enable them to stay fully focused while talking using the built-in mic and phone call capabilities. The kids headphones with microphone intelligently free up your kids, hands to do their work and simultaneously keeps them off their phone while working. Wander freely with Bluetooth 5.0 technology and see where the music will take you! Or feel free to do things around the house while youre on the call - the choice is yours! Its always better to have options, which is why you can either talk and listen continuously for 20 hrs on one charge, or if youre staying put, just plug-in using the Aux jack to charge and get an uninterrupted signal simultaneously. We all know kids can be tough on their belongings, which is why we designed the iClever youth headphones to be capable of withstanding all sorts of abuse. No more broken headphones",
    inStock: true,
    delivery: true,
  },
  {
    id: "h6",
    name: "Kids Headphones, Gorsun Lightweight Stereo Wired Children's Headsets for Kids Adults Adjustable Headband Toddler Headset for Smartphones Computer Pad Earphones",
    image: image6,
    price: "510",
    rating: 4,
    numReviews: 8,
    brand: "Gorsun",
    color: "Orange",
    connectivity: "Wired",
    modelname: "778",
    formfactor: "On Ear",
    description:
      "safe and soft material witout any sharp corner protects your kids from any scratch injury. The headphone is durable which allows to be twisted or bent, built-in volume limiter at a level of 103db avoid heearing injure and could also be used in the trains and aeroplanes.",
    inStock: true,
    delivery: false,
  },
  {
    id: "h7",
    name: "Skullcandy Crusher Wireless Over-Ear Headphone - Gray/Tan (S6CRW-K590)",
    image: image7,
    price: "1480",
    rating: 4.5,
    numReviews: 13,
    brand: "Skullcandy",
    color: "White",
    connectivity: "Wireless",
    modelname: "S6CRW-K590",
    formfactor: "In Ear",
    description:
      "Crusher offers an audio experience unlike any other on the market – one that puts you front row for your favorite music and movies. Utilizing two full-range 40mm audio drivers and additional dual bass drivers, crusher transforms your audio into an immersive experience you don’t just hear, you feel. Pair that with wireless technology and up to 40 hours of battery life, and you have a Premium Bluetooth headphone with powerful bass you can feel",
    inStock: false,
    delivery: true,
  },
  {
    id: "h8",
    name: "Roll over image to zoom in Philips H9505 Hybrid Active Noise Canceling (ANC) Over Ear Wireless Bluetooth Pro-Performance Headphones, Comfort Fit and 27 Hours of Playtime, Dual Device Connect, Alexa Built-in, TAH9505BK",
    image: image8,
    price: "750",
    rating: 4,
    numReviews: 20,
    brand: "Philips Audio",
    color: "Black",
    connectivity: "Wireless, Wired",
    modelname: "Overhead Headphones",
    formfactor: "Over Ear",
    description:
      "Inspiration. Motivation. Concentration. With excellent Active Noise Canceling (ANC) and clear sound for calls, these Philips H9505 wireless over-ear headphones have you covered.",
    inStock: true,
    delivery: false,
  },
  {
    id: "h9",
    name: "Sony Wireless Headphones WH-CH510: Wireless Bluetooth On-Ear Headset with Mic for Phone-Call, Black",
    image: image9,
    price: "469",
    rating: 4.5,
    numReviews: 13,
    brand: "Sony",
    color: "Black",
    connectivity: "Wireless",
    modelname: "WHCH510/B",
    formfactor: "On Ear",
    description:
      "Get dynamic sound and all-day listening in a wireless headphone The zero-compromise wh-ch510 wireless headphones feature an extra-long battery life of up to 35 hours 30mm drivers bring crisp clear sound No matter what you’re listening to Make hands-free calls with the built-in microphone and recharge with the updated USB-C connection.",
    inStock: false,
    delivery: true,
  },
  {
    id: "h10",
    name: "Beats Studio3 Wireless Noise Cancelling Over-Ear HeadphonesBeats Studio3 Wireless Noise Cancelling Over-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 22 Hours of Listening Time, Built-in Microphone - Matte Black (Latest Model)",
    image: image10,
    price: "1890",
    rating: 5,
    numReviews: 15,
    brand: "Beats",
    color: "Matte Black",
    connectivity: "Wireless, Wired",
    modelname: "Studio3",
    formfactor: "Over Ear",
    description:
      "Beats studio3 Wireless headphones deliver a premium listening experience with Pure Adaptive Noice Canceling (Pure ANC) to actively block external noice and real-time audio calibration to preserve clarity, range and emotion. ",
    inStock: true,
    delivery: false,
  },
];