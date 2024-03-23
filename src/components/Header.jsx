import images from "../images/goodfoodlogo.png";
import { Link } from "react-router-dom";
import { BadgePercent, Home, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

export const Header = () => {

  const cartCount = useSelector((store) => store.cart.cartItems);

  const totalCount = () => {
    let total = 0
    cartCount.forEach(element => {
      total += element.quantity
    });
    return total
  }

  console.log(totalCount());

  return (
    <div
      className="z-10 bg-white w-full
       fixed top-0 flex justify-between items-center
          max-sm:block max-md:px-1  max-lg:block  
      shadow-lg shadow-gray-300 px-32"
    >
      <div className="flex justify-center items-center pb-4">
        <Link to={"/home"}>
          {" "}
          <img
            src={images}
            alt="logo"
            className=" w-56  mx-5 max-sm:w-56 py-5  overflow-hidden"
          />
        </Link>
      </div>

      <ul className="flex items-center justify-center pb-4">
        <Link to={"/home"}>
          <li
            className=" flex justify-center items-center  outline-none mx-2 text-[1.4em] 
                     text-gray-500 font-semibold  max-sm:text-[15px]  max-xl:text-md  max-sm:mx-[0.4em] hover:text-[#fca729] "
          >
            <Home className="mx-1    text-gray-500 hover:text-[#fca729] w-[24px] max-sm:w-[18px] max-sm:mx-[2px]" />
            Home
          </li>
        </Link>
        {/* <Link className='flex items-center  ' to={'/contact'}>
                    <li
                        className=' flex justify-center items-center  mx-4 outline-none text-[1.4em] text-gray-500 font-semibold max-sm:text-md max-sm:text-[15px] max-sm:mx-[0.4em] hover:text-[#fca729]' >

                        <Contact className='mx-1   text-gray-500 hover:text-[#fca729] w-[24px] max-sm:w-[18px] max-sm:mx-[2px]' />
                        Contact us</li></Link> */}
        <Link to={"/offers"}>
          <li className="flex justify-center items-center  outline-none text-[1.4em] text-gray-500 font-semibold max-sm:text-md max-sm:text-[15px] max-sm:mx-[0.4em] hover:text-[#fca729]">
            <BadgePercent className="mx-1   text-gray-500 hover:text-[#fca729] w-[24px] max-sm:w-[18px] max-sm:mx-[2px]" />
            Offers
          </li>
        </Link>
        <Link to={"/carts"}>
          <li className=" flex justify-center items-center  outline-none  mx-4 text-[1.4em] text-gray-500 max-sm:text-[15px] font-semibold max-sm:text-md max-sm:mx-[0.4em] hover:text-[#fca729]">
            <ShoppingCart className="mx-2 text-gray-500 hover:text-[#fca729] w-[24px] max-sm:w-[18px] max-sm:mx-[2px]" />

            <span className="text-[#fca729] mx-1   ">
              {totalCount() || 0}
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
};
