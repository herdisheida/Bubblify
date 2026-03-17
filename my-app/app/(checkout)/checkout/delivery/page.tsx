'use client' // TODO change thie / remove this


export default function DeliveryPage({}) {

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Delivery Information</h1>

        {/* 
        In the first page of checkout (/checkout/delivery) the user needs to decide if
        he wants to arrange a store-pickup or have it delivered
        */}

        {/* 
        If he decides to have it delivered, the next page (/checkout/info) will ask to
        input the following information: name, address, city, telephone and postal
        code
        5. If he decides to arrange a store-pickup, the next page (/checkout/info) will
        ask to input only the name and telephone
        */}

        <button className="bg-sky-500 hover:bg-sky-700 text-white px-6 py-3 rounded mt-4 mr-4 transition-colors"
          onClick={() => (window.location.href = "/checkout/info", { type: "pickup" })}>
            Store Pickup
        </button>

        <button className="bg-sky-500 hover:bg-sky-700 text-white px-6 py-3 rounded mt-4 ml-4 transition-colors"
          onClick={() => (window.location.href = "/checkout/info", { type: "delivery" })}>
            Deliver to Address
        </button>
    </div>
  );
}