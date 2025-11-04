
import { AiFillCar } from "react-icons/ai";
import { FaHouseUser, FaWarehouse } from "react-icons/fa";
import { BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";
import { GiStorageBox } from "react-icons/gi";
import { BiWifi } from "react-icons/bi";          // for WiFi icon
import { GiCctvCamera } from "react-icons/gi";    // for CCTV icon
import { FaSnowflake } from "react-icons/fa";   // from Font Awesome
import { TbAirConditioning } from "react-icons/tb";   // from Tabler icons
import { FaFireExtinguisher } from "react-icons/fa";



// import { FaHouseUser } from 'react-icons/fa'; 
// import { BsFillDoorOpenFill } from 'react-icons/bs'; 
import { AiOutlineDatabase } from 'react-icons/ai';

export const categories = [
  {
    label: "All",
    icon: <AiFillCar />, // you can keep a globe/world icon if you want
  },
  {
    img: "assests/parking.jpg",
    label: "Parking Spaces",
    icon: <AiFillCar />,
    description: "Find and book parking spots easily",
  },
  {
    img: "assests/room.jpg",
    label: "Rooms",
    icon: <FaHouseUser />,
    description: "Rent a private or shared room",
  },
  {
    img: "assests/modern_cat.webp",
    label: "Offices/Meeting Rooms",
    icon: <BsPersonWorkspace />,
    description: "Book workspaces or meeting areas",
  },
  {
    img: "assests/storage_cat.webp",
    label: "Storage",
    icon: <FaWarehouse />,
    description: "Secure storage spaces for your needs",
  },
//   {
//     label: "Event Venues",
//     icon: <GiPartyPopper />,
//     description: "Book spaces for parties or events",
//   },
//   {
//     label: "Outdoor Spaces",
//     icon: <GiCampingTent />,
//     description: "Find open-air spaces for activities",
//   },
];


export const types=[
  {
    name:"An entire place",
    description:"Guests have the whole space to themsevels",
    icon: <FaHouseUser />
  },
  {
    name:"Room",
    description:"Guests have their own room in a house",
    icon:<BsFillDoorOpenFill />
  },
  {
    name:"Storage",
    description:"Space to store items-Warehouse corner,garage,storage room",
    icon:<AiOutlineDatabase/>
  },
]

export const facilities=[
  {
    name:"Wi-Fi",
    icon:<BiWifi/>,
  },
  {
    name:"Parking",
    icon:<AiFillCar/>,
  },
  {
    name:"Air Conditioning",
    icon:<TbAirConditioning />,
  },
    {
    name: "Security cameras",
    icon: <GiCctvCamera />,
  },
    {
    name: "Fire extinguisher",
    icon: <FaFireExtinguisher />,
  },
    {
    name: "Dedicated workspace",
    icon: <BsPersonWorkspace />
  },
]