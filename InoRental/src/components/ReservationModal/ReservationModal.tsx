import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import type { House } from "../../../src/types/property";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  house: House;
  pricePerNight: number;
}

function ReservationModal({ isOpen, onClose, house, pricePerNight }: ReservationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future Stripe integration will go here
    console.log("Reservation submitted:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <FaTimes className="text-xl text-gray-600" />
        </button>

        <h2 className="text-2xl font-bold mb-4">Complete Your Reservation</h2>
        <p className="text-sm text-gray-600 mb-4">{house.title}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="mt-1 w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Check-in Date</label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleInputChange}
              className="mt-1 w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Check-out Date</label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleInputChange}
              className="mt-1 w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Number of Guests</label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              className="mt-1 w-full p-2 border rounded-lg"
              required
            >
              {[...Array(house.max_guests)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} {i === 0 ? "guest" : "guests"}
                </option>
              ))}
            </select>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between text-sm">
              <span>${pricePerNight} x 5 nights</span>
              <span>${(pricePerNight * 5).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span>Service fee</span>
              <span>${(pricePerNight * 0.12).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold mt-2">
              <span>Total before taxes</span>
              <span>${(pricePerNight * 5 + pricePerNight * 0.12).toFixed(2)}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:opacity-90"
          >
            Confirm Reservation
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Stripe payment processing will be added here
        </p>
      </div>
    </div>
  );
}

export default ReservationModal;