import { useSelector } from "react-redux"
import { Restaurantgroupcard } from "./Restaurantgroupcard"

const Carts = () => {

    const selector = useSelector((store) => store.cart.cartItems)
    console.log(selector);
    console.log(selector);

    return (<div>
        <div className="mx-56 max-sm:mx-10 max-md:mx-12 max-lg:mx-28 max-xl:mx-52 max-2xl:mx-64 items-center ">
            <h1 className="text-center text-6xl font-semibold my-10">Cart</h1>
            <div className="border-2 border-gray-400 px-4">
                < Restaurantgroupcard data={selector} />
            </div>
        </div>
    </div >
    )
}

export default Carts