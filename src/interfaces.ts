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

export interface ContainerCard {
    emptyingFee: string;
    dailyFee: string;
    shortContainerInfo: string;
    length: string;
    width: string;
    placementFee: string;
    logo: any;
    unsortedWaste: string;
    title: string;
    gardenWaste: string;
    combustibleWaste: string;
    height: string;
}
