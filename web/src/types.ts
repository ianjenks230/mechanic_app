export type VehicleCategory = 'Car' | 'Boat' | 'Motorcycle' | 'ATV' | 'Mower';

export const VEHICLE_CATEGORIES: VehicleCategory[] = [
  'Car',
  'Boat',
  'Motorcycle',
  'ATV',
  'Mower'
];

export type RequestStatus = 'Requested' | 'Accepted' | 'En Route' | 'Arrived' | 'Complete';

export const REQUEST_STATUSES: RequestStatus[] = [
  'Requested',
  'Accepted',
  'En Route',
  'Arrived',
  'Complete'
];

export type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  photos: string[];
};

export type Mechanic = {
  id: string;
  name: string;
  rating: number;
  responseTimeMins: number;
  jobsThisMonth: number;
  specialties: string[];
  categories: VehicleCategory[];
  locationArea: string;
  bio: string;
  portfolio: string[];
  certifications: string[];
  reviews: Review[];
};

export type LineItem = {
  description: string;
  amount: number;
};

export type Request = {
  id: string;
  mechanicId: string;
  mechanicName: string;
  vehicleType: VehicleCategory;
  symptoms: string;
  address: string;
  notes: string;
  status: RequestStatus;
  queuedOffline: boolean;
  createdAt: string;
  lineItems: LineItem[];
  total: number;
};
