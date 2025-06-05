import { useState } from "react";
import { BiWalk } from "react-icons/bi";
import { FaGlobe, FaBars, FaServicestack } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import LoginModal from "../../../components/LoginModal/LoginModal";
import SignupModal from "../../../components/SignupModal/SignupModal";

interface HeaderSectionProps {
  isScrolled: boolean;
}

function HeaderSection({ isScrolled }: HeaderSectionProps) {
  const [selectedTab, setSelectedTab] = useState("Homes");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const location = useLocation();
  const isHouseDetailsPage = location.pathname.includes('/house/');

  const handleLoginClick = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleSignupClick = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  const handleCloseModals = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
  };

  return (
    <>
      <div
        className={`${
          isScrolled 
            ? isHouseDetailsPage 
              ? "absolute w-full bg-white shadow-md z-50" 
              : "absolute w-full"
            : "relative"
        } md:flex items-center hidden justify-between px-6 py-4 transition-all duration-300`}
      >
        {/* Logo */}
        <div className="text-orange-600 font-bold text-xl flex items-end gap-x-2 justify-between">
          <p>
            <img src="/logo.png" className="size-10" />
          </p>
          <p className="text-3xl font-bold">airbnb</p>
        </div>

        {/* Navigation Tabs */}
        <nav
          className={`${
            isScrolled
              ? "invisible opacity-0 -translate-y-4"
              : "visible opacity-100 translate-y-0"
          } transition-all flex space-x-8 items-center`}
        >
          {["Homes", "Experiences", "Services"].map((tab) => (
            <div
              key={tab}
              className={`flex flex-col items-center cursor-pointer ${
                selectedTab === tab ? "text-black font-semibold" : "text-gray-500"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab === "Homes" && <HiHome className="text-4xl" />}
              {tab === "Experiences" && <BiWalk className="text-4xl" />}
              {tab === "Services" && <FaServicestack className="text-4xl" />}
              <span className="text-sm mt-1">{tab}</span>
              {selectedTab === tab && (
                <div className="h-1 w-full bg-black mt-1 rounded" />
              )}
            </div>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center space-x-4">
          <span className="text-sm font-semibold text-gray-700 cursor-pointer">
            Become a host
          </span>
          <FaGlobe className="text-gray-700 cursor-pointer" />
          <button 
            onClick={handleLoginClick}
            className="text-sm font-semibold text-gray-700 cursor-pointer hover:text-orange-500 transition-colors"
          >
            Log in
          </button>
          <button 
            onClick={handleSignupClick}
            className="text-sm font-semibold bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
          >
            Sign up
          </button>
          <FaBars className="text-gray-700 cursor-pointer" />
        </div>
      </div>

      {/* Auth Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={handleCloseModals}
        mode="login"
      />
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={handleCloseModals}
      />
    </>
  );
}

export default HeaderSection;
