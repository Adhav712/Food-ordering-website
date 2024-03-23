import { useSelector } from "react-redux"
import { Restaurantgroupcard } from "./Restaurantgroupcard"
import { useState } from "react";
import { EmptyCart } from './EmptyCart'

const Carts = () => {

    const selector = useSelector((store) => store.cart.cartItems)
    const cart = useSelector((store) => store.cart)

    // const totalCalc = () => {
    //     let value = selector.map((acc) => {
    //         console.log(acc);
    //         let price = 0
    //         price = acc.card.info.price / 100 * acc.quantity 
    //         console.log(price);
    //         // console.log(first);
    //         // item.card.info.price / 100 * item.quantity
    //     })
    //     console.log(value);
    // }
    // console.log(totalCalc());
    console.log(cart);
    console.log(selector);

    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0

        selector.forEach(item => {
            totalPrice += item.card.info.price / 100 * item.quantity
        })
        return { totalPrice, totalQuantity }
    }

    let [showexit, setshowexit] = useState(true)

    return (<div className="">
        <div className=" mt-48 mx-56 max-sm:mx-10 max-md:mx-12 max-lg:mx-28 max-xl:mx-52 max-2xl:mx-64 items-center ">
            <div className="">
                {selector.length > 0 ?
                    <div className="">
                        <h1 className="text-center text-6xl font-semibold my-10">Cart</h1>

                        < Restaurantgroupcard data={selector} exit={showexit} />

                        <div className=" ">
                            <h1 className="w-[32em] py-2 px-8 font-semibold text-2xl
                 bg-[#f3c77b] text-gray-900 fixed  bottom-0">  total ({getTotal().totalQuantity} items) </h1>
                            <h1 className="w-[32em] py-2 px-8 font-semibold text-2xl
                 bg-[#f3c77b] text-gray-900 fixed  bottom-0"> ₹ {getTotal().totalPrice}</h1>
                        </div>

                    </div>
                    : <EmptyCart className="shadow-none " />
                }</div>
        </div>
    </div >
    )
}

export default Carts