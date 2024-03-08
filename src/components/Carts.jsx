import { useSelector } from "react-redux"
import { Restaurantgroupcard } from "./Restaurantgroupcard"

const Carts = () => {

    const selector = useSelector((store) => store.cart.items)
    console.log(selector);
    const a = selector.length > 0 && selector.reduce((acc, prev) => {
        
        return acc?.card?.info?.name !== prev?.card?.info?.name
    })

    console.log(a);
    return (<div>
        <div className="mx-56 items-center ">
            <h1 className="text-center text-4xl font-semibold my-10">Cart</h1>
            <div className="border-2 border-gray-400 px-4">
                <Restaurantgroupcard data={selector} />
            </div>
        </div>
    </div >
    )
}

export default Carts