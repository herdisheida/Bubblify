import { Bubble } from "./bubbles";

export interface Order { 
    method:      DeliveryMethod;

    name:        string;
    telephone:   string;

    address?:    string; // optional: if delivery
    city?:       string; // optional: if delivery
    postalCode?: string; // optional: if delivery
}

export type DeliveryMethod = "delivery" | "pickup"

export interface CartItem {
  bubble: Bubble
  quantity: number
}


// for fetching orders
export interface OrderResponse {
  customer: Order
  items: CartItem[]
}