"use client"

import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface FilterDropdownProps {
  label: string,
  values: string[]
}

export default function FilterDropdown({ label, values }: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <button
        type="button"
        id="dropdownDefaultButton"
        className="text-white bg-cyan-800 font-medium rounded text-sm h-8 px-4 text-center inline-flex items-center"
        onClick={() => setIsOpen(!isOpen)}>
        {label}<MdKeyboardArrowDown className="text-xl" />
      </button>

      {isOpen && (
        <div id="dropdown" className={`absolute z-10 bg-white rounded min-w-32 border border-zinc-300`}>
          <ul className="p-2 text-sm" aria-labelledby="dropdownDefaultButton">
            {values.map((value, index) => (
              <li key={index}>
                <button type="button" className="w-full text-start border-s-2 hover:border-cyan-800 px-4 py-2 mb-1">{value}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
