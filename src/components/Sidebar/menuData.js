import {
  Home,
  LayoutDashboard,
  Package,
  ShoppingCart,
  FileText
} from "lucide-react"

export const mainMenuItems = [
  {
    title: "Home",
    icon: Home,
    children: ["Dashboard", "Analytics", "Projects", "Team"]
  },
  {
    title: "Layouts",
    icon: LayoutDashboard,
    children: [
      "Page layouts",
      "Sidebars",
      "Navbars",
      "Vertical navigation",
      "Horizontal navigation",
      "Menu levels"
    ]
  },
  {
    title: "Themes",
    icon: Package,
    children: ["Light", "Dark", "System", "Custom"]
  },
  {
    title: "Starter kit",
    icon: ShoppingCart,
    children: ["Basic", "Advanced", "Enterprise"]
  },
  {
    title: "Changelog",
    icon: FileText,
    children: ["Version 4.0", "Version 3.0", "Version 2.0", "Version 1.0"]
  }
]
