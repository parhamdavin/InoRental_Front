import { useEffect, useRef, useState } from "react";
import useHorizontalTouchScroll from "../../../../../utils/hooks/useTouchScroll";
import { FaArrowRight } from "react-icons/fa";
import { housesList } from "../../../../../utils/houseData";
import HouseCard from "./HouseCard";

interface HouseListProps {
  title: string;
  city: string;
}

function HouseList({ title, city }: HouseListProps) {
  const containerRef = useRef(null);
  useHorizontalTouchScroll(null, null, containerRef);
  const [houseData, setHouses] = useState<any[]>([]);

  useEffect(() => {
    const filtered = housesList.filter(
      ({ location }: { location: { city: string } }) => location.city === city
    );
    setHouses(filtered);
  }, []);

  return (
    <div className="py-2 my-6 space-y-6">
      <h4 className="text-xl font-semibold md:text-4xl px-4 text-gray-800 flex items-center">
        {title}
        <p className="text-xl mx-2">
          <FaArrowRight />
        </p>
      </h4>

      <div
        ref={containerRef}
        className="flex house-block px-4 cursor-grab gap-x-2 items-center overflow-auto hidden-scroll-bar space-x-6"
      >
        {houseData.map((house: any) => (
          <HouseCard key={house.id} {...{ house }} />
        ))}
      </div>
    </div>
  );
}

export default HouseList;
