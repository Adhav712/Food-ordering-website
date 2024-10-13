import { useSelector } from "react-redux";
import { Restaurantgroupcard } from "./Restaurantgroupcard";
import { useState } from "react";
import { EmptyCart } from "./EmptyCart";

const Carts = () => {
  // local storage

  let [showexit, setshowexit] = useState(true);
  const selector = useSelector((store) => store.cart.cartItems);
  const cart = useSelector((store) => store.cart);
  const count = useSelector((store) => store.cart.cartCount);

  const getTotal = () => {
    let totalPrice = 0;
    selector.forEach((item) => {
      console.log(item.card.info);
      totalPrice +=
        (item.card.info.price / 100) * item.quantity ||
        (item.card.info.defaultPrice / 100) * item.quantity;
    });
    return { totalPrice };
  };
  //   {Math.floor(getTotal().totalPrice)}
  return (
    <div className="">
      <div className=" mt-48 mx-56 max-sm:mx-10 max-md:mx-12 max-lg:mx-28 max-xl:mx-52 max-2xl:mx-64 items-center ">
        <div className="">
          {selector.length > 0 ? (
            <div className="">
              <h1 className="text-center text-6xl font-semibold my-10">Cart</h1>
              <Restaurantgroupcard data={selector} exit={showexit} />
              {/* A right Side card Showing the total price of the cart */}
              <div className="bg-white h-full">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="">
                    <h1 className="text-3xl font-semibold my-2">Total</h1>
                    <h1 className="text-3xl font-semibold my-2">
                      ₹ {Math.floor(getTotal().totalPrice)}
                    </h1>
                  </div>
                  <button
                    className="bg-black text-white px-4 py-2 my-2 rounded-lg"
                    onClick={() => {
                      alert("Order Placed Successfully 🎉");
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <EmptyCart className="shadow-none " />
          )}
        </div>
      </div>
    </div>
  );
};

export default Carts;
