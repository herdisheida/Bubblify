import { OrderType } from "@/types/orders";

export default function DeliveryPage({ type }: { type: OrderType }) {

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Delivery Information</h1>

        {/* 
        4. If he decides to have it delivered, the next page (/checkout/info) will ask to
        input the following information: name, address, city, telephone and postal
        code

        5. If he decides to arrange a store-pickup, the next page (/checkout/info) will
        ask to input only the name and telephone
        */}

        <div>
            <input type="text" placeholder="Name"      className="border p-2 mb-4 w-full" />
            <input type="text" placeholder="Telephone" className="border p-2 mb-4 w-full" />

{/* TODO fix - delivery not showing */}
            {type === "delivery" ? (
                <>
                  <input type="text" placeholder="Address"      className="border p-2 mb-4 w-full" />
                  <input type="text" placeholder="City"         className="border p-2 mb-4 w-full" />
                  <input type="text" placeholder="Postal Code"  className="border p-2 mb-4 w-full" />
                </>
            ) : null}

        </div>
    </div>
  );
}