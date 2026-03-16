export interface Orders {
    orders: Order[];
}

export interface Order {
    id:         number;

    name:       string;
    telephone:  string;

    address?:    string; // optional: if delivery
    city?:       string; // optional: if delivery
    postalCode?: string; // optional: if delivery

}