import { Ticket, Receipt, Trash2, IdCard, FileText, Home, HandCoins, Briefcase, Car, Building, Users, Hammer, Scale, Heart } from "lucide-react";

export interface Service {
  id: string;
  label: string;
  icon: any;
  href: string;
  category: string;
}

export interface ServiceCategory {
  name: string;
  icon: any;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    name: "Transportation & Licensing",
    icon: Car,
    services: [
      { id: "parking-fine", label: "Parking fine", icon: Ticket, href: "/services/parking-fine", category: "Transportation & Licensing" },
      { id: "drivers-license", label: "Driver's license application", icon: IdCard, href: "/services/drivers-license", category: "Transportation & Licensing" },
      { id: "vehicle-registration", label: "Vehicle registration", icon: Car, href: "/services/vehicle-registration", category: "Transportation & Licensing" },
      { id: "license-renewal", label: "License renewal", icon: IdCard, href: "/services/license-renewal", category: "Transportation & Licensing" },
    ]
  },
  {
    name: "Tax & Finance",
    icon: Receipt,
    services: [
      { id: "taxes", label: "Taxes", icon: Receipt, href: "/services/taxes", category: "Tax & Finance" },
      { id: "income-tax", label: "Income tax filing", icon: FileText, href: "/services/income-tax", category: "Tax & Finance" },
      { id: "property-tax", label: "Property tax", icon: Home, href: "/services/property-tax", category: "Tax & Finance" },
      { id: "business-tax", label: "Business tax", icon: Briefcase, href: "/services/business-tax", category: "Tax & Finance" },
    ]
  },
  {
    name: "Civic Services",
    icon: FileText,
    services: [
      { id: "birth-certificate", label: "Birth certificate", icon: FileText, href: "/services/birth-certificate", category: "Civic Services" },
      { id: "marriage-certificate", label: "Marriage certificate", icon: FileText, href: "/services/marriage-certificate", category: "Civic Services" },
      { id: "death-certificate", label: "Death certificate", icon: FileText, href: "/services/death-certificate", category: "Civic Services" },
      { id: "address-change", label: "Address change", icon: Home, href: "/services/address-change", category: "Civic Services" },
      { id: "voter-registration", label: "Voter registration", icon: Users, href: "/services/voter-registration", category: "Civic Services" },
    ]
  },
  {
    name: "Social Services",
    icon: Heart,
    services: [
      { id: "social-benefits", label: "Social benefits", icon: HandCoins, href: "/services/social-benefits", category: "Social Services" },
      { id: "housing-assistance", label: "Housing assistance", icon: Home, href: "/services/housing-assistance", category: "Social Services" },
      { id: "healthcare", label: "Healthcare registration", icon: Heart, href: "/services/healthcare", category: "Social Services" },
      { id: "food-assistance", label: "Food assistance", icon: HandCoins, href: "/services/food-assistance", category: "Social Services" },
    ]
  },
  {
    name: "Business & Commerce",
    icon: Briefcase,
    services: [
      { id: "business-registration", label: "Business registration", icon: Briefcase, href: "/services/business-registration", category: "Business & Commerce" },
      { id: "business-license", label: "Business license", icon: FileText, href: "/services/business-license", category: "Business & Commerce" },
      { id: "trade-permit", label: "Trade permit", icon: Building, href: "/services/trade-permit", category: "Business & Commerce" },
      { id: "employer-registration", label: "Employer registration", icon: Users, href: "/services/employer-registration", category: "Business & Commerce" },
    ]
  },
  {
    name: "Public Works",
    icon: Hammer,
    services: [
      { id: "trash-container", label: "Request trash container", icon: Trash2, href: "/services/trash-container", category: "Public Works" },
      { id: "water-service", label: "Water service", icon: Hammer, href: "/services/water-service", category: "Public Works" },
      { id: "electricity-service", label: "Electricity service", icon: Hammer, href: "/services/electricity-service", category: "Public Works" },
      { id: "road-maintenance", label: "Road maintenance report", icon: Hammer, href: "/services/road-maintenance", category: "Public Works" },
    ]
  },
  {
    name: "Legal & Justice",
    icon: Scale,
    services: [
      { id: "court-records", label: "Court records", icon: FileText, href: "/services/court-records", category: "Legal & Justice" },
      { id: "legal-aid", label: "Legal aid request", icon: Scale, href: "/services/legal-aid", category: "Legal & Justice" },
      { id: "police-report", label: "Police report", icon: FileText, href: "/services/police-report", category: "Legal & Justice" },
    ]
  },
];

// Flatten all services for easy lookup
export const allServices: Service[] = serviceCategories.flatMap(cat => cat.services);

// Helper function to get service by ID
export const getServiceById = (id: string): Service | undefined => {
  return allServices.find(service => service.id === id);
};
