import { useSelector } from "react-redux"
import { Restaurantgroupcard } from "./Restaurantgroupcard"
import { useState } from "react";
import { EmptyCart } from './EmptyCart'

const Carts = () => {

    const selector = useSelector((store) => store.cart.cartItems)
    const selectors = useSelector((store) => store.cart.cartCount)
    console.log(selector.length);
    console.log(selectors);

    let [showexit, setshowexit] = useState(true)

    return (<div>
        <div className=" mt-48 mx-56 max-sm:mx-10 max-md:mx-12 max-lg:mx-28 max-xl:mx-52 max-2xl:mx-64 items-center ">
            <div className=" px-8">
                {selector.length > 0 ?
                    <div>
                        <h1 className="text-center text-6xl font-semibold my-10">Cart</h1>
                        < Restaurantgroupcard data={selector} exit={showexit} />
                    </div>
                    : <EmptyCart />
                }</div>

        </div>
    </div >
    )
}

export default Carts