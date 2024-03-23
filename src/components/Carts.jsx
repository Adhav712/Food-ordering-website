import { useSelector } from "react-redux"
import { Restaurantgroupcard } from "./Restaurantgroupcard"
import { useState } from "react";
import { EmptyCart } from './EmptyCart'

const Carts = () => {

    let [showexit, setshowexit] = useState(true)
    const selector = useSelector((store) => store.cart.cartItems)
    const cart = useSelector((store) => store.cart)
    const count = useSelector((store) => store.cart.cartCount)

    // const totalCalc = () => {
    //     let value = selector.map((acc) => {
    //         //(acc);
    //         let price = 0
    //         price = acc.card.info.price / 100 * acc.quantity 
    //         //(price);
    //         // console.log(first);
    //         // item.card.info.price / 100 * item.quantity
    //     })
    //     console.log(value);
    // }
    // console.log(totalCalc());


    const getTotal = () => {
        let totalPrice = 0
        selector.forEach(item => {
            totalPrice += item.card.info.price / 100 * item.quantity
        })
        return { totalPrice }
    }

    return (<div className="">
        <div className=" mt-48 mx-56 max-sm:mx-10 max-md:mx-12 max-lg:mx-28 max-xl:mx-52 max-2xl:mx-64 items-center ">
            <div className="">
                {selector.length > 0 ?
                    <div className="">
                        <h1 className="text-center text-6xl font-semibold my-10">Cart</h1>

                        < Restaurantgroupcard data={selector} exit={showexit} />

                        <div className=" ">
                            <h1 className="w-[32em] py-2 px-8 
                 bg-[#f3c77b]  fixed  bottom-0 font-semibold text-2xl text-gray-900" >Total : ₹ {Math.floor(getTotal().totalPrice)}</h1>
                        </div>

                    </div>
                    : <EmptyCart className="shadow-none " />
                }</div>
        </div>
    </div >
    )
}

export default Carts