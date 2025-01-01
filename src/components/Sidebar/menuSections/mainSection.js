import { GoHome } from "react-icons/go";
import { FiLayout } from "react-icons/fi";
import { PiSwatches } from "react-icons/pi";
import { RiStickyNoteLine } from "react-icons/ri";
import { RiListOrdered2 } from "react-icons/ri";

export const mainMenuItems = [
  {
    title: "dashboard".toLowerCase(),
    icon: GoHome,
    link: "/",
  },
  {
    title: "layouts".toLowerCase(),
    icon: FiLayout,
    children: [
      "Default Layout",
      "Layout 2",
      "Layout 3",
      "Layout 4",
      "Layout 5",
      "Layout 6",
      "Layout 7 Coming soon",
    ],
    childrenLinks: ["/", "/", "/", "/", "/", "/"],
  },
  {
    title: "themes".toLowerCase(),
    icon: PiSwatches,
    children: ["Default", "Material Coming soon", "clean Coming soon"],
    childrenLinks: ["/", "/", "/"],
  },
  {
    title: "starter kit".toLowerCase(),
    icon: RiStickyNoteLine,
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
    childrenLinks: ["/", "/", "/"],
  },
  {
    title: "changelog".toLowerCase(),
    icon: RiListOrdered2,
    link: "/",
    optional: "4.0",
  },
];
