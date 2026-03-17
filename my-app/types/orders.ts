export interface Order {
    id:         number;

    type:    OrderType;

    name:       string;
    telephone:  string;

    address?:    string; // optional: if delivery
    city?:       string; // optional: if delivery
    postalCode?: string; // optional: if delivery

}

export type OrderType = "delivery" | "pickup";