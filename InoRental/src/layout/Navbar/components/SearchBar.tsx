import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  isScrolled: boolean;
}

function SearchBar({ isScrolled }: SearchBarProps) {
  return (
    <div
      className={`${
        isScrolled ? "mt-5 px-4 relative" : "px-2"
      } flex justify-center transition-all`}
    >
      <div
        className={`flex ${
          isScrolled ? "w-fit" : "w-full"
        } rounded-full shadow-xl border transition-all duration-500 border-gray-200 overflow-hidden divide-x divide-gray-200 max-w-3xl text-sm font-medium`}
      >
        <div className="px-6 py-3 md:flex flex-col justify-center flex-1 hidden cursor-pointer hover:bg-gray-200 transition-all ">
          <div className={`${isScrolled && "hidden"} text-gray-500`}>Where</div>
          <div
            className={`${
              isScrolled && "text-base"
            } transition-all text-black font-semibold`}
          >
            {isScrolled ? "Any Where" : "Search destinations"}
          </div>
        </div>
        <div className="px-6 py-3 md:flex flex-col justify-center hidden cursor-pointer hover:bg-gray-200 transition-all ">
          <div className={`${isScrolled && "hidden"} text-gray-500`}>
            Check in
          </div>
          <div
            className={`${
              isScrolled && "text-base"
            } transition-all text-black font-semibold`}
          >
            {isScrolled ? "Any Where" : "Add dates"}
          </div>
        </div>
        <div
          className={`${
            isScrolled && "md:hidden"
          } px-6 py-3 md:flex flex-col justify-center hidden cursor-pointer hover:bg-gray-200 transition-all`}
        >
          <div className={`${isScrolled && "hidden"} text-gray-500`}>
            Check out
          </div>
          <div
            className={`${
              isScrolled && "text-base"
            } transition-all text-black font-semibold`}
          >
            Add dates
          </div>
        </div>

        <div className="px-6 py-3 flex flex-1 md:flex-none cursor-pointer hover:bg-gray-200 transition-all  items-center">
          <div className="mr-4 md:block hidden">
            <div className={`${isScrolled && "hidden"} text-gray-500`}>Who</div>
            <div
              className={`${
                isScrolled && "text-base"
              } transition-all text-black font-semibold`}
            >
              Add guests
            </div>
          </div>

          <div className="flex-1 h-full md:hidden">
            <input
              type="text"
              className="w-full h-full outline-0 text-lg"
              placeholder="search house's"
            />
          </div>

          <button className="bg-pink-600 text-white p-2 rounded-full">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
