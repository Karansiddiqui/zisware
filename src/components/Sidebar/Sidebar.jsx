import React, { useState } from "react";
import { LayoutDashboard } from "lucide-react";
import { SidebarItem } from "./SidebarItem";
import { mainMenuItems } from "./menuSections/mainSection";
import { layoutMenuItems } from "./menuSections/layoutSection";

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("Home");

  const isChildActive = (children) => {
    return children?.includes(activeItem) ?? false;
  };

  const renderMenuItems = (items) =>
    items.map((item) => (
      <SidebarItem
        key={item.title}
        icon={<item.icon size={20} />}
        title={item.title}
        isActive={activeItem === item.title}
        hasActiveChild={isChildActive(item.children)}
        onClick={() => setActiveItem(item.title)}
      >
        {item.children && (
          <div className="space-y-2">
            {item.children.map((subItem) => (
              <div
                key={subItem}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveItem(subItem);
                }}
                className={`cursor-pointer transition-colors duration-300
                  ${
                    activeItem === subItem
                      ? "text-white bg-[#454b54] px-2 py-1 rounded"
                      : "text-gray-400 hover:text-white"
                  }`}
              >
                {subItem}
              </div>
            ))}
          </div>
        )}
      </SidebarItem>
    ));

  return (
    <div className="w-64 ">
      <div className="p-4 fixed overflow-y-auto max-w-screen  text-white h-screen bg-[#252b36] sliderbar">
        <div className="flex items-center mb-8">
          <LayoutDashboard className="h-8 w-8 text-blue-500" />
          <span className="text-xl font-bold ml-2">Zisware</span>
        </div>

        <div className="mb-4 px-3">
          <div className="text-xs font-semibold text-gray-400 uppercase">
            MAIN
          </div>
        </div>

        <nav className="space-y-2">{renderMenuItems(mainMenuItems)}</nav>

        <div className="mt-8 mb-4 px-3">
          <div className="text-xs font-semibold text-gray-400 uppercase">
            LAYOUT
          </div>
        </div>

        <nav className="space-y-2">{renderMenuItems(layoutMenuItems)}</nav>
      </div>
    </div>
  );
}
