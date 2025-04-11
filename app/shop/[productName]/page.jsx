"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "../../../context/CartContext";
import Image from "next/image";
import jsonData from "../../../public/assets/text/en.json";


const data = jsonData?.shopping?.data;


const ProductDetail = () => {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    const nameFromURL = productName.replace(/-/g, " ").toLowerCase();
    const found = data.find((item) => item.title.toLowerCase() === nameFromURL);
    setProduct(found);
  }, [productName]);

  const handleAddToCart = () => {
    if (!product) return;
    setLoading(true);
    setTimeout(() => {
      addToCart(product, quantity);
      router.push("/cart");
    }, 1000);
  };

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product)
    return <div className="p-10 text-center">Product not found.</div>;

  return (
    <section className="sm:py-20 py-10 bg-[#EFEBFA]">
      <div className="flex items-center sm:mb-14 mb-7 main-container flex-wrap">
        <h2 className="text-3xl font-bold text-black">Shop:- </h2>
        <h3 className="text-2xl font-semibold text-black">{product.title}</h3>
      </div>
      <div className="main-container flex lg:gap-16 gap-8 max-md:flex-col items-center">
        <Image
          src={product.img}
          alt={product.title}
          width={600}
          height={400}
          unoptimized
          className="rounded-2xl object-cover flex-1 md:max-h-[500px] max-h-[300px] w-full"
        />
        <div className="flex-1">
          <h2 className="text-black sm:mb-8 mb-4 sm:text-4xl text-2xl font-semibold">{product.title}</h2>
          <p className="text-xl text-black mb-4">Price: <span className="font-semibold">₹{product.price}.00</span></p>
          <p className="text-base text-gray-700 mb-6">
           {product.desc}
          </p>

          <div className="flex items-center gap-4 mb-8 max-sm:justify-end">
            <span className="font-semibold text-lg text-black">Quantity:</span>
            <div className="flex items-center border border-black rounded-full overflow-hidden">
              <button
                onClick={decrement}
                className="px-4 cursor-pointer py-2 text-black hover:bg-black hover:text-white"
              >
                −
              </button>
              <span className="px-6 py-2 text-black">{quantity}</span>
              <button
                onClick={increment}
                className="px-4 text-black py-2 cursor-pointer hover:bg-black hover:text-white"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={loading}
            className="bg-black text-white hover:bg-white max-sm:ml-auto hover:text-black border border-black cursor-pointer px-6 py-3 rounded-full flex items-center gap-3"
          >
            {loading ? (
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full h-5 w-5"></span>
            ) : (
              "Add to Cart"
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
