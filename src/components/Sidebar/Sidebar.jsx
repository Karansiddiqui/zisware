import React, { useState, useRef, useEffect } from "react";
import SidebarHeader from "./SidebarHeader.jsx";
import SidebarCustomer from "./SidebarCustomer.jsx";
import { SidebarItem } from "./SidebarItem";
import { mainMenuItems } from "./menuSections/mainSection";
import { layoutMenuItems } from "./menuSections/layoutSection";

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("");
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setActiveItem(""); // Close the dropdown if clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isChildActive = (children) => {
    return children?.includes(activeItem) ?? false;
  };

  const renderMenuItems = (items) =>
    items.map((item, index) => {
      const SidebarContent = (
        <SidebarItem
          key={item.title}
          icon={<item.icon size={20} />}
          title={item.title}
          optional={item.optional}
          height={item.children ? 44 * item.children.length : 1000}
          isActive={activeItem === item.title}
          hasActiveChild={isChildActive(item.children)}
          isOpen={activeItem === item.title}
          onClick={() => setActiveItem(item.title)}
        >
          {item.children && (
            <div className="flex flex-col gap-[1px] mt-[1px]">
              {/* Render all layouts without 'Coming Soon' text */}
              {item.children
                .filter(
                  (subItem) => !subItem.toLowerCase().includes("coming soon")
                )
                .map((subItem, index) => {
                  // Ensure item.childrenSection exists and is an array
                  let sectionIndex = 0;
                  const isInSection =
                    Array.isArray(item.childrenSection) &&
                    item.childrenSection[sectionIndex] ===
                      (index + 1).toString() &&
                    sectionIndex++;
                  return (
                    <a
                      key={subItem}
                      href={
                        item.childrenLinks ? item.childrenLinks[index] : "#"
                      }
                      className={`hover:bg-sidebarColor-hover ${
                        isInSection ? "border-b-2 border-gray-700" : "" // Apply border if condition is met
                      }`}
                    >
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveItem(subItem);
                        }}
                        className={`flex cursor-pointer transition-colors duration-300 text-sm text-[#fff] py-3 pl-[60px] hover:bg-sidebarColor-hover
                        ${
                          activeItem === subItem
                            ? "text-white bg-slidebarColor px-2 py-1"
                            : "hover:text-white"
                        }
                      `}
                      >
                        {subItem}
                      </div>
                    </a>
                  );
                })}

              {/* Separate out and render 'Coming Soon' items */}
              {item.children
                .filter((subItem) =>
                  subItem.toLowerCase().includes("coming soon")
                )
                .map((comingSoonItem) => (
                  <a
                    key={comingSoonItem}
                    href="#"
                    className="hover:bg-sidebarColor-hover"
                  >
                    <div
                      className={`flex justify-between cursor-pointer transition-colors duration-300 text-sm text-[#919192] py-3 pl-[60px] hover:bg-sidebarColor-hover`}
                    >
                      {/* Remove 'Coming Soon' text from layout name */}
                      {comingSoonItem.replace("Coming soon", "").trim()}
                      <span className="text-xs mr-8 font-bold text-white">
                        Coming Soon
                      </span>
                    </div>
                  </a>
                ))}
            </div>
          )}
        </SidebarItem>
      );

      return (
        <>
          {item.link ? (
            <a
              key={item.title}
              href={item.link}
              className="block text-blue-400 hover:text-blue-600 transition-colors duration-300"
            >
              {SidebarContent}
            </a>
          ) : (
            SidebarContent
          )}
        </>
      );
    });

  return (
    <div className="w-[15.25rem] bg-sidebarColor" ref={sidebarRef}>
      <div className="fixed top-0 left-0 h-screen w-[15.25rem] bg-sidebarColor text-white">
        {/* Sidebar Header */}
        <SidebarHeader />

        {/* Content Section */}
        <div className="h-[calc(100vh-4rem)] overflow-y-auto sliderbar hover:cursor-pointer">
          {/* Customer Section */}
          <SidebarCustomer />
          {/* Main Section */}
          <div className="mb-4 px-5">
            <div className="text-xs font-semibold text-gray-400 uppercase">
              Main
            </div>
          </div>
          <nav className="space-y-[1px] ">{renderMenuItems(mainMenuItems)}</nav>

          {/* Layout Section */}
          <div className="my-4 px-5">
            <div className="text-xs font-semibold text-gray-400 uppercase">
              Layout
            </div>
          </div>
          <nav className="space-y-[1px]">
            {renderMenuItems(layoutMenuItems)}
          </nav>
        </div>
      </div>
    </div>
  );
}
