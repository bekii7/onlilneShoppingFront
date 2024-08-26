import React from 'react';

const CheckoutPage = () => {
  //be accumulator new yeserawt i think more efficient new
  //ena more delivery info kale chemrbet
  const cartItems = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 29.99 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 49.99 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 19.99 },
  ];

  const deliveryFee = 5.99;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0) + deliveryFee;

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <header className="ml-[40%]">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold  shadow-lg">Check Out</h1>
        </div>
      </header>
      <main className="container mx-auto py-10 px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="col-span-2">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mb-4">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <p className="font-medium">${item.price.toFixed(2)}</p>
              </div>
            ))}
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="font-medium">Delivery Fee</p>
              <p className="font-medium">${deliveryFee.toFixed(2)}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-xl font-bold">
              <p>Total</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">Delivery Information</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Address</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Address"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">City</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="City"
              />
            </div>
            <div className="mb-4">
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white shadow mt-6 py-4 px-6">
        <div className="container mx-auto flex justify-end">
          <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600">
            Place Order
          </button>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutPage;
