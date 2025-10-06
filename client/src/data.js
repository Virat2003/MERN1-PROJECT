
import { AiFillCar } from "react-icons/ai";
import { FaHouseUser, FaWarehouse } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { GiStorageBox } from "react-icons/gi";

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
