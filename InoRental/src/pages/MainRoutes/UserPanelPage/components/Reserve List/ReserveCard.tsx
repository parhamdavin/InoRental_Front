interface PropertyPhoto {
  image: string;
}

interface Property {
  title: string;
  photos: PropertyPhoto[];
}

interface BookingItem {
  property: Property;
  status: string;
  check_in_date: string;
  check_out_date: string;
}

interface ReserveCardProps {
  item: BookingItem;
  setBookingDetail: (detail: { propertyData: BookingItem; isShow: boolean }) => void;
}

function ReserveCard({ item, setBookingDetail }: ReserveCardProps) {
  return (
    <div
      onClick={() => setBookingDetail({ propertyData: item, isShow: true })}
      className="w-full h-36 cursor-pointer hover:bg-gray-100 rounded-xl transition-all flex gap-2 flex-none p-2 md:px-4 md:py-2"
    >
      {/* thubmnail */}
      <div className="w-28 md:w-36 flex-none h-full bg-gray-200 rounded-xl overflow-hidden">
        <img
          src={item.property.photos[0].image}
          alt="Property Thumbnail"
          className="size-full object-cover"
        />
      </div>
      {/* place info */}
      <div className="px-1.5 py-2 h-full flex flex-col justify-around">
        <p className="uppercase md:text-lg font-bold">{item.status}</p>
        <h4 className="md:text-lg font-semibold">{item.property.title}</h4>
        <span className="text-sm text-gray-700 line-clamp-2 md:text-base font-medium">
          check in: {item.check_in_date} <br /> check out: {item.check_out_date}
        </span>
      </div>
    </div>
  );
}

export default ReserveCard;
