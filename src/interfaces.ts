export interface UserDetails {
    firstName: string;
    lastName: string;
    socialSecurity: string;
    phoneNumber: string;
    email: string;
    address: string;
    zipCode: string;
    city: string;
    [key: string]: any;
}

export interface Payload {
    deliveryDate: string;
    pickupDate: string;
    coordinates: string;
    firstName: string;
    lastName: string;
    socialSecurity: string;
    phoneNumber: string;
    email: string;
    address: string;
    zipCode: string;
    city: string;
    [key: string]: any;
}
