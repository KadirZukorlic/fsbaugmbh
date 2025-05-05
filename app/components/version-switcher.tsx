"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface VersionSwitcherProps {
  versions: string[];
  defaultVersion: string;
}

export function VersionSwitcher({
  versions,
  defaultVersion,
}: VersionSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState(defaultVersion);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectVersion = (version: string) => {
    setSelectedVersion(version);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        <span>Version: {selectedVersion}</span>
        <ChevronDown className="w-4 h-4 ml-2" />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
          <ul className="py-1 overflow-auto text-base rounded-md max-h-60 focus:outline-none sm:text-sm">
            {versions.map((version) => (
              <li
                key={version}
                onClick={() => selectVersion(version)}
                className={`cursor-pointer select-none relative py-2 pl-3 pr-9 ${
                  selectedVersion === version
                    ? "text-white bg-red-600"
                    : "text-gray-900 hover:bg-gray-100"
                }`}
              >
                {version}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
