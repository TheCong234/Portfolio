"use client";
import { useEffect, useState } from "react";

const sections = ["Home", "About", "Portfolio", "Contact"];

export default function MainHeader() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActiveSection(id || "");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-500 bg-[#030014]">
      <div className="mx-auto px-[5%] sm:px-[5%] lg:px-[10%]">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#Home"
              className="text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent"
            >
              TheCong
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-8 flex items-center space-x-8">
              {sections.map((section, i) => (
                <a key={section} href={`#${section}`} className="group relative px-1 py-2 text-sm font-medium">
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      activeSection == section
                        ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-semibold"
                        : "text-[#e2d3fd] group-hover:text-white"
                    } `}
                  >
                    {section}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 ${
                      activeSection == section ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }  `}
                  ></span>
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            {isShowMenu ? (
              <button
                className="relative p-2 text-[#e2d3fd] hover:text-white transition-transform duration-300 ease-in-out transform rotate-90 scale-125"
                onClick={() => setIsShowMenu(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x w-6 h-6"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            ) : (
              <button
                className="relative p-2 text-[#e2d3fd] hover:text-white transition-transform duration-300 ease-in-out transform rotate-0 scale-100"
                onClick={() => setIsShowMenu(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu w-6 h-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isShowMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {sections.map((section, i) => (
            <a
              key={section}
              href={`#${section}`}
              className={`block px-4 py-3 text-lg font-medium transition-all  duration-500 ease-in-out  ${
                activeSection == section
                  ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
                  : "text-[#e2d3fd] hover:text-white"
              } ${isShowMenu ? "translate-x-0 opacity-100" : "translate-x-30 opacity-0"}`}
              style={{
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {section}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
