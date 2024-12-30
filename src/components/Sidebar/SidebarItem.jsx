import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function SidebarItem({
  icon,
  title,
  children,
  isActive,
  hasActiveChild,
  onClick,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    onClick?.();
    if (children) {
      setIsOpen(!isOpen);
    }
  };

  const isHighlighted = isActive || hasActiveChild;

  return (
    <div>
      <div
        className={`flex items-center px-3 py-2 cursor-pointer rounded-lg mb-1
          transition-all duration-300 linear
          ${
            isHighlighted
              ? "bg-[#454b54] text-white"
              : "text-gray-300 hover:bg-[#252b36]"
          }`}
        onClick={handleClick}
      >
        <span
          className={`mr-2 transition-colors duration-300 ${
            isHighlighted ? "text-white" : "text-gray-400"
          }`}
        >
          {icon}
        </span>
        <span className="flex-1">{title}</span>
        {children && (
          <span
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <ChevronDown size={20} />
          </span>
        )}
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 linear ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="ml-8 border-l border-[#454b54] pl-4 space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
}
