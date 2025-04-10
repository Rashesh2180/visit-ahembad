"use client"; // Add this directive

import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa"; // Import trash icon
import { useCart } from "../../context/CartContext";

const CartPage = () => {
  const {
    cartItems,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <section className="sm:py-20 py-10 px-5 sm:px-10 bg-[#F1FFE0] text-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex sm:flex-row flex-col sm:items-center sm:justify-between gap-4 relative bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="flex max-sm:flex-col items-center gap-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="rounded-xl object-cover w-[280px] h-[280px]"
                    unoptimized
                  />
                  <div className="flex flex-col sm:items-start items-center">
                    <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                    <div className="inline-block mb-6 overflow-hidden items-center gap-1 border border-black rounded-full">
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        className="px-4 py-1 cursor-pointer text-lg hover:bg-black hover:text-white transition"
                      >
                        −
                      </button>
                      <span className="text-lg px-6 font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => incrementQuantity(item.id)}
                        className="px-4 py-1 cursor-pointer text-lg hover:bg-black hover:text-white transition"
                      >
                        +
                      </button>
                      
                    </div>
                    <p className="text-lg font-medium">Price:-
                   <span className="font-semibold"> ₹{parseFloat(item.price) * item.quantity}.00</span>
                  </p>
                  </div>
                </div>

                <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 cursor-pointer absolute top-5 sm:right-5 right-2 hover:text-red-700 transition"
                    title="Remove item"
                  >
                    <FaTrashAlt size={20} />
                  </button>
              </div>
            ))}

            <div className="text-right text-2xl font-bold mt-6">
              Subtotal: ₹{total}.00
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
