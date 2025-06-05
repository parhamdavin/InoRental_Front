import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { housesList } from "../../../utils/houseData";
import { FaStar, FaBed, FaBath, FaUserFriends, FaHeart, FaShare } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface House {
  id: string;
  title: string;
  description: string;
  price: number;
  location: {
    city: string;
    country: string;
    address: string;
    lat: number;
    lng: number;
  };
  thumbnail: string;
  rating: number;
  reviews: number;
  amenities: string[];
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  host: {
    name: string;
    avatar: string;
  };
  isSuperhost: boolean;
}

function HouseDetailPage() {
  const { id } = useParams();
  const [house, setHouse] = useState<House | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const foundHouse = housesList.find((h) => h.id === id);
    if (foundHouse) {
      setHouse(foundHouse);
    }
  }, [id]);

  if (!house) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">House not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      {/* Title and Rating Section */}
      <div className="mb-4 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{house.title}</h1>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FaHeart className={`text-xl ${isFavorite ? 'text-red-500' : 'text-gray-400'}`} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <FaShare className="text-xl text-gray-400" />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-600 mt-2">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold">{house.rating}</span>
            <span>({house.reviews} reviews)</span>
          </div>
          <span className="hidden sm:inline">·</span>
          <span>{house.location.city}, {house.location.country}</span>
        </div>
      </div>

      {/* Main Image */}
      <div className="mb-6 sm:mb-12 relative group">
        <img
          src={house.thumbnail}
          alt={house.title}
          className="w-full h-[300px] sm:h-[500px] object-cover rounded-2xl"
        />
        <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <BsArrowLeft className="text-xl" />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <BsArrowRight className="text-xl" />
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
        {/* Left Column - Details */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          {/* Host Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6 sm:pb-8">
            <div className="flex items-center gap-4">
              <img
                src={house.host.avatar}
                alt={house.host.name}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-orange-500"
              />
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold">Hosted by {house.host.name}</h2>
                {house.isSuperhost && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                    <MdVerified className="text-blue-500 text-lg" />
                    <span className="font-medium">Superhost</span>
                  </div>
                )}
              </div>
            </div>
            <button className="w-full sm:w-auto px-6 py-2 border rounded-lg hover:bg-gray-50 transition-all">
              Contact host
            </button>
          </div>

          {/* House Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 border-b pb-6 sm:pb-8">
            <div className="flex items-start gap-3">
              <div className="p-3 bg-orange-100 rounded-lg">
                <FaUserFriends className="text-orange-500 text-xl" />
              </div>
              <div>
                <p className="font-semibold text-base sm:text-lg">{house.guests} guests</p>
                <p className="text-sm sm:text-base text-gray-600">Maximum occupancy</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-3 bg-orange-100 rounded-lg">
                <FaBed className="text-orange-500 text-xl" />
              </div>
              <div>
                <p className="font-semibold text-base sm:text-lg">{house.bedrooms} bedrooms</p>
                <p className="text-sm sm:text-base text-gray-600">{house.beds} beds</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-3 bg-orange-100 rounded-lg">
                <FaBath className="text-orange-500 text-xl" />
              </div>
              <div>
                <p className="font-semibold text-base sm:text-lg">{house.baths} baths</p>
                <p className="text-sm sm:text-base text-gray-600">Full bathrooms</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="border-b pb-6 sm:pb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">About this place</h2>
            <p className="text-sm sm:text-base text-gray-600 whitespace-pre-line leading-relaxed">{house.description}</p>
          </div>

          {/* Amenities */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">What this place offers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {house.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm sm:text-base text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 border rounded-2xl p-4 sm:p-6 shadow-lg bg-white">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div>
                <span className="text-2xl sm:text-3xl font-bold">${house.price}</span>
                <span className="text-sm sm:text-base text-gray-600"> / night</span>
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span className="font-semibold">{house.rating}</span>
                <span className="text-gray-600">({house.reviews})</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 sm:py-4 rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl">
              Reserve
            </button>
            
            <p className="text-center text-sm sm:text-base text-gray-600 mt-4">
              You won't be charged yet
            </p>

            {/* Price Breakdown */}
            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span>${house.price} x 5 nights</span>
                <span>${house.price * 5}</span>
              </div>
              <div className="flex justify-between">
                <span>Service fee</span>
                <span>${Math.round(house.price * 0.12)}</span>
              </div>
              <div className="border-t pt-2 sm:pt-3 mt-2 sm:mt-3 font-semibold flex justify-between">
                <span>Total before taxes</span>
                <span>${Math.round(house.price * 5 + house.price * 0.12)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseDetailPage;


