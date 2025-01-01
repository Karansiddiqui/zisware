import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { LiaAngleRightSolid } from "react-icons/lia";

export function SidebarItem({
  icon,
  title,
  height,
  optional,
  children,
  isActive,
  hasActiveChild,
  onClick,
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // If the item is active, keep it open
    if (isActive || hasActiveChild) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isActive, hasActiveChild]);

  const handleClick = () => {
    onClick?.(); // Trigger the onClick callback
    if (children) {
      setIsOpen((prev) => !prev); // Toggle the open state if there are children
    }
  };

  const isHighlighted = isActive || hasActiveChild;

  return (
    <div>
      <div
        className={`flex items-center px-5 py-[0.675rem] cursor-pointer
          transition-all duration-300 linear font-medium text-sm
          ${
            title === "Dashboard".toLowerCase()
              ? "bg-sidebarColor-hover text-white"
              : isHighlighted
              ? "bg-sidebarColor-hover text-white"
              : "text-gray-300 hover:bg-sidebarColor-hover"
          }`}
        onClick={handleClick}
      >
        <span
          className={`mr-2 transition-colors duration-300 font-bold text-white  ${
            title === "Dashboard".toLowerCase() && "self-start mt-[2.6px]"
          }`}
          style={{ fontSize: "1.4rem", strokeWidth: 2 }}
        >
          {icon}
        </span>

        {/* Apply title transformation only to non-Dashboard titles */}
        <span className="flex-1 ml-3 flex flex-col capitalize ">
          {title}
          {title === "Dashboard".toLowerCase() && (
            <span className="text-gray-400 normal-case">No pending orders</span>
          )}
        </span>

        {children ? (
          <span
            className={`transition-transform duration-300 text-[0.87rem]  ${
              isOpen && "rotate-90"
            }`}
          >
            <LiaAngleRightSolid
              style={{ fontSize: "14px", strokeWidth: 1.5 }}
            />
          </span>
        ) : (
          optional && (
            <span className="bg-[#0986ff] px-[9px] py-[2px] rounded-full text-[12px] font-bold">
              {optional}
            </span>
          )
        )}
      </div>
      <div
        className="overflow-hidden transition-all duration-300 linear"
        style={{
          maxHeight: isOpen ? `${height}px` : "0",
        }}
      >
        <div className="">{children}</div>
      </div>
    </div>
  );
}
