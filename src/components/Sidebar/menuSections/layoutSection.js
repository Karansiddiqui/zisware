import { FiLayout } from "react-icons/fi";
import {
  PiColumns,
  PiRows,
  PiArrowFatLinesDown,
  PiArrowFatLinesRight,
  PiArrowElbowDownRight,
} from "react-icons/pi";

export const layoutMenuItems = [
  {
    title: "Page layouts",
    icon: FiLayout,
    children: [
      "Static layout",
      "No header",
      "No footer",
      "Fixed header",
      "Fixed header",
      "Boxed page",
      "Boxed content",
    ],
    childrenSection: ["3", "2", "1"],
  },
  {
    title: "Sidebars",
    icon: PiColumns,
    children: ["Left", "Right", "Both", "None"],
  },
  {
    title: "Navbars",
    icon: PiRows,
    children: [
      "Single navbar",
      "Multiple navbars",
      "Content navbar",
      "Color options",
      "Sizing options",
      "Navbar components",
    ],
  },
  {
    title: "Vertical navigation",
    icon: PiArrowFatLinesDown,
    children: [
      "Navigation styles",
      "Collapsible menu",
      "Accordion menu",
      "Bordered navigation",
      "Right icons",
      "Badges",
      "Disabled items",
    ],
  },
  {
    title: "Horizontal navigation",
    icon: PiArrowFatLinesRight,
    children: [
      "Navigation styles",
      "Navigation elements",
      "Tabbed navigation",
      "Disabled navigation links",
      "Horizontal mega menu",
    ],
  },
  {
    title: "Menu levels",
    icon: PiArrowElbowDownRight,
    children: ["Second level", "Second level with child", "Second level"],
  },
];
