import {
  Layout,
  Sidebar as SidebarIcon,
  Navigation,
  Menu,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

export const layoutMenuItems = [
  {
    title: "Page layouts",
    icon: Layout,
    children: ["Default", "Compact", "Wide", "Fluid"],
  },
  {
    title: "Sidebars",
    icon: SidebarIcon,
    children: ["Left", "Right", "Both", "None"],
  },
  {
    title: "Navbars",
    icon: Navigation,
    children: ["Fixed", "Static", "Hidden"],
  },
  {
    title: "Vertical navigation",
    icon: ArrowDown,
    children: ["Collapsed", "Expanded", "Compact"],
  },
  {
    title: "Horizontal navigation",
    icon: ArrowRight,
    children: ["Basic", "Advanced", "Mega menu"],
  },
  {
    title: "Menu levels",
    icon: Menu,
    children: ["Level 2.1", "Level 2.2", "Level 2.3"],
  },
];
