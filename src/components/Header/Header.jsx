import React from "react";
import { Bell, Search, User } from "lucide-react";

export function Header() {
  return (
    <header
      style={{ width: `calc(100% - 244px)` }}
      className="fixed  h-16 bg-white border-b flex items-center justify-between px-6"
    >
      <div className="flex items-center flex-1">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 hover:bg-gray-100 rounded-full">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User size={20} className="text-gray-600" />
          </div>
          <span className="text-sm font-medium">John Doe</span>
        </div>
      </div>
    </header>
  );
}
