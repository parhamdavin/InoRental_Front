export interface Host {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_picture_url: string | null;
  bio: string | null;
  created_at: string;
  updated_at: string;
}

export interface Photo {
  photo_id: number;
  image: string;
  description: string | null;
  uploaded_at: string;
  property: number;
}

export interface PropertyPhoto {
  image: string;
}

export interface Availability {
  start_date: string;
  end_date: string;
  price: number;
}

export interface Property {
  id: number;
  title: string;
  description: string;
  photos: PropertyPhoto[];
  price_per_night: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  max_guests: number;
  created_at: string;
  updated_at: string;
}

export interface House extends Property {
  property_type: string;
  room_category: string;
  amenities: string[];
  rules: string[];
  address_street: string;
  address_city: string;
  address_state: string;
  address_zip_code: string;
  address_country: string;
  latitude: number | null;
  longitude: number | null;
  num_bedrooms: number | null;
  num_beds: number | null;
  num_bathrooms: number | null;
  availabilities: Availability[];
  host: {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    profile_picture_url?: string;
  };
}

export interface PropertyResponse {
  data: Property;
  message?: string;
  status?: string;
} 