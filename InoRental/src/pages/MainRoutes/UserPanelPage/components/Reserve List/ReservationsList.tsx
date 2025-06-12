import { useEffect, useState } from "react";
import ReserveCard from "./ReserveCard";
import responseExample from "./responseExample";
import ReserveListLoading from "./ReserveListLoading";
import { FaUser } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

interface PropertyPhoto {
  image: string;
}

interface Property {
  title: string;
  photos: PropertyPhoto[];
  host?: {
    first_name: string;
  };
}

interface BookingItem {
  property: Property;
  status: string;
  check_in_date: string;
  check_out_date: string;
}

interface BookingState {
  loading: boolean;
  bookingList: BookingItem[];
}

interface BookingDetailState {
  propertyData: BookingItem | null;
  isShow: boolean;
}

function ReservationsList() {
  const [{ bookingList, loading }, setBookingData] = useState<BookingState>({
    loading: false,
    bookingList: [],
  });
  const [{ isShow, propertyData }, setBookingDetail] = useState<BookingDetailState>({
    propertyData: null,
    isShow: false,
  });

  useEffect(() => {
    const fetchBookingsData = async () => {
      try {
        setBookingData((prev) => ({ ...prev, loading: true }));
        // Using responseExample for now since the API call is commented out
        setBookingData({ bookingList: responseExample, loading: false });
      } catch (error) {
        // Error handling commented out
      } finally {
        setBookingData((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchBookingsData();
  }, []);

  return (
    <div className="h-screen md:h-[34rem] flex flex-col overflow-auto gap-4 p-2 md:px-4 md:py-2">
      {/* booking list screen */}
      {loading ? (
        <ReserveListLoading />
      ) : (
        bookingList.map((item) => (
          <ReserveCard {...{ item, setBookingDetail }} />
        ))
      )}

      {/* propery info */}
      <div
        className={`${
          isShow ? "visible opacity-100" : "invisible opacity-0"
        } fixed inset-0 overflow-auto flex items-center justify-center transition-all z-50`}
      >
        <div
          onClick={() => setBookingDetail({ isShow: false, propertyData: null })}
          className="absolute inset-0 bg-gray-950/40 backdrop-blur"
        ></div>

        <div className="md:w-[40rem] flex-none md:h-[38rem] size-full p-2 md:px-4 md:py-2 bg-gray-100 md:rounded-xl flex flex-col relative">
          {/* close btn */}
          <button
            onClick={() =>
              setBookingDetail({ isShow: false, propertyData: null })
            }
            className="p-2 bg-gray-200 cursor-pointer text-[#ff385c] text-2xl rounded-full absolute top-4 right-4 md:right-6"
          >
            <CgClose />
          </button>
          {/* thumbnail */}
          <div className="w-full h-80 bg-gray-400 overflow-hidden rounded-2xl">
            <img
              src={propertyData?.property?.photos[0]?.image}
              alt="property-thumbnail"
              className="size-full object-cover"
            />
          </div>
          {/* rent info */}
          <div className="w-full p-2 flex-1">
            <p className="uppercase md:text-lg font-bold my-1">
              {propertyData?.status}
            </p>

            <h4 className="text-xl font-semibold mb-2">
              {propertyData?.property?.title}
            </h4>

            <p className="text-sm mt-0.5">
              check in: {propertyData?.check_in_date}
            </p>
            <p className="text-sm mt-0.5">
              check out: {propertyData?.check_out_date}
            </p>
            {/* host info */}
            <div className="w-11/12 h-40 flex flex-col md:flex-row items-start md:items-center my-4 rounded-xl md:p-2">
              <div className="size-28 flex-none md:size-32 flex items-center overflow-hidden justify-center rounded-full bg-gray-200">
                {/* <img
                  src={propertyData?.property?.host?.profile_picture_url}
                  alt="Host-Pofile-Pic"
                /> */}

                <FaUser className="text-8xl my-1 text-gray-600 md:text-8xl mt-8" />
              </div>

              <div className="w-full md:flex-1 mx-4 my-2 md:h-full space-y-4 py-2">
                <h4 className="text-2xl font-bold">
                  {propertyData?.property?.host?.first_name}
                </h4>

                <p className="line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Assumenda deserunt voluptate nemo placeat, quibusdam facere
                  nisi ab nihil corporis rerum dicta consectetur omnis sed sit
                  blanditiis praesentium, similique tempore voluptatibus sequi
                  deleniti velit? Distinctio ducimus nemo ipsam eveniet
                  consequatur reprehenderit praesentium. Ipsa laboriosam eaque
                  assumenda. Ipsum distinctio, sint animi praesentium non,
                  aliquam mollitia quaerat blanditiis assumenda veritatis
                  necessitatibus libero obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationsList;
