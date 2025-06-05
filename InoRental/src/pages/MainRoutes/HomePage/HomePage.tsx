import { v4 } from "uuid";
import HouseList from "./components/HouseBlock/HouseList";

function HomePage() {
  return (
    <div className="">
      <div className="space-y-12 max-w-[99%] mx-auto">
        <HouseList key={v4()} title="Popular homes in Paris" city="Paris" />

        <HouseList key={v4()} city="London" title="Popular homes in London" />

        <HouseList
          key={v4()}
          city="New York"
          title="Popular homes in New York"
        />
      </div>
    </div>
  );
}

export default HomePage;
