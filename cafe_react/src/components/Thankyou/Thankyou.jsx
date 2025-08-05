import React, { useState, useEffect } from "react";
import P from "../P";
import H from "../H";

const ThankYou = () => {
  const [orderDetails] = useState({
    orderNumber: "CF-2024-001",
    customerName: "John Doe",
    items: [
      { name: "Cappuccino", quantity: 2, price: 5.5 },
      { name: "Croissant", quantity: 1, price: 3.25 },
      { name: "Americano", quantity: 1, price: 4.75 },
    ],
    total: 19.0,
    estimatedTime: "15-20 minutes",
    orderDate: new Date().toLocaleDateString(),
    orderTime: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  });

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const handleContinueShopping = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-lg">
          {/* Main thank you card */}
          <div
            className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50 transition-all duration-800 ${
              isAnimated
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Success Icon and Header */}
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
              </div>

              <H style="text-3xl font-bold mb-2 text-green-700">
                Order Confirmed!
              </H>
              <P
                text="Thank you for your order. Your delicious coffee is being prepared."
                style="text-lg"
              />
            </div>

            {/* Order Details */}
            <div className="space-y-6">
              {/* Order Info */}
              <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-100">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <P
                      text="Order Number"
                      style="font-medium text-gray-600 mb-1"
                    />
                    <p className="text-amber-700 font-bold">
                      {orderDetails.orderNumber}
                    </p>
                  </div>
                  <div>
                    <P
                      text="Estimated Time"
                      style="font-medium text-gray-600 mb-1"
                    />
                    <p className="text-amber-700 font-bold">
                      {orderDetails.estimatedTime}
                    </p>
                  </div>
                  <div>
                    <P
                      text="Order Date"
                      style="font-medium text-gray-600 mb-1"
                    />
                    <p className="text-gray-800">{orderDetails.orderDate}</p>
                  </div>
                  <div>
                    <P
                      text="Order Time"
                      style="font-medium text-gray-600 mb-1"
                    />
                    <p className="text-gray-800">{orderDetails.orderTime}</p>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div>
                <P
                  text="Order Summary"
                  style="font-medium text-gray-700 mb-3"
                />
                <div className="bg-white/60 rounded-xl p-4 border border-gray-100">
                  {orderDetails.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{item.name}</p>
                        <P
                          text={`Quantity: ${item.quantity}`}
                          style="text-sm text-gray-500"
                        />
                      </div>
                      <p className="font-semibold text-amber-700">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}

                  <div className="flex justify-between items-center pt-3 mt-3 border-t-2 border-amber-200">
                    <p className="text-lg font-bold text-gray-800">Total</p>
                    <p className="text-xl font-bold text-amber-700">
                      ${orderDetails.total.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Customer Info */}
              <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                <P
                  text="Customer Details"
                  style="font-medium text-gray-700 mb-2"
                />
                <p className="text-gray-800 font-medium">
                  {orderDetails.customerName}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <button
                  onClick={handleContinueShopping}
                  className="w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 transition duration-200 font-medium rounded-xl"
                >
                  Continue Shopping
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center space-y-2">
                <button className="text-amber-600 hover:text-amber-700 font-semibold transition duration-200 text-sm">
                  Contact Support
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-6 text-center">
            <P
              text="We'll notify you when your order is ready for pickup!"
              style="text-sm opacity-75"
            />
          </div>

          {/* Notification Banner */}
          <div
            className={`mt-4 bg-green-100 border border-green-200 rounded-xl p-4 transition-all duration-1000 delay-500 ${
              isAnimated
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <P
                  text="You'll receive updates about your order status."
                  style="text-sm text-green-800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
