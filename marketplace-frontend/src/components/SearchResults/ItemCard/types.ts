export type ListingItem = {
    id: string;
    title: string;
    price: number;
    currency: 'AMD' | 'USD' | 'EUR'; // todo add currency dictionary
}