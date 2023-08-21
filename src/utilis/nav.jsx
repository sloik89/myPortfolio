import React from "react";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
const nav = [
  {
    name: "home",
    icon: <HiHome />,
    path: "/",
  },
  {
    name: "about",
    icon: <HiUser />,
    path: "/about",
  },
  {
    name: "services",
    icon: <HiRectangleGroup />,
    path: "/services",
  },
  {
    name: "work",
    icon: <HiViewColumns />,
    path: "/work",
  },
  {
    name: "testimonials",
    icon: <HiChatBubbleBottomCenterText />,
    path: "/testimonials",
  },
  {
    name: "contact",
    icon: <HiEnvelope />,
    path: "/contact",
  },
];
export default nav;
