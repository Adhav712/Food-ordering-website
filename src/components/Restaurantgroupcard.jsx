import { useDispatch, useSelector } from "react-redux";
import { additems } from "../utils/Cartslice";
import { useState, useEffect } from "react";
import { quantity } from "../utils/Cartslice";

//*  COMMON CARD DETAILS - { ACCORDIAN DETAILS }!!

export const Restaurantgroupcard = ({ data }) => {
  const [dishItems, setDishItems] = useState([]);
  const [buttonchange, setbuttonchange] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      const finalDishItems = data.map((dishItem) => ({
        ...dishItem.card,
        dishQuantity: 0,
      }));
      setDishItems([...finalDishItems]);
    }
  }, [data]);
  console.log(dishItems);

  console.log(data);

  const handlePlus = (index) => {
    let alteredData = [...dishItems];
    console.log(index, alteredData[index]);
    alteredData[index].dishQuantity = alteredData[index].dishQuantity + 1;
    setDishItems(alteredData);
    // const newsitems = {
    //   id: item.info.id,
    //   buttonchange: true,
    //   quantity: 1,
    // };
    // setbuttonchange((prevstates) => [...prevstates, newsitems]);
    dispatch(additems(alteredData));
    // dispatch(quantity(newsitems.quantity));
  };

  const handleMinus = (item) => {
    item.dishQuantity -= 1;
    dispatch(additems(item));
  };

  return (
    <div>
      {dishItems.map((item, index) => {
        const { name, description, defaultPrice, imageId, id, price } =
          item?.info;

        const finditem = buttonchange.find((item) => item.id === id);

        return (
          <div
            key={id + 1}
            className="mt-5  mb-12 max-sm:mb-1  border-b-2 pb-8 border-gray-200"
          >
            <h1 className="text-xl mb-2 font-semibold max-sm:text-lg text-gray-800">
              {name}
            </h1>
            <div className="flex justify-between items-center">
              <div className="max-sm:w-15 max-lg:w-[10em]">
                <h1 className="text-md my-2 font-semibold text-gray-800">
                  ₹ {defaultPrice / 100 || price / 100}
                </h1>
                <h1
                  className="text-sm my-2 text-gray-400 w-[35em] max-sm:w-[10em] max-lg:w-[25em] max-2xl:text-red-900 
                        max-xl:w-[20em] max-md:text-purple-700 max-sm:text-cyan-700 max-lg:text-yellow-500 max-xl:text-green-900 "
                >
                  {description}
                </h1>
              </div>
              <div className="relative">
                {imageId && (
                  <img
                    className="object-cover size-28 rounded-xl shadow-md shadow-gray-400"
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                      imageId
                    }
                    alt=""
                  />
                )}
                {item.dishQuantity > 0 ? (
                  <div className=" absolute top-[5.5em] w-20 bg-red-200 flex justify-between px-2 items-center m-1 mx-4 rounded-sm py-[7px]">
                    <button
                      onClick={() => {
                        handleMinus(index);
                      }}
                      className="px-[6px] rounded-sm cursor-pointer"
                    >
                      -
                    </button>

                    <span className=" text-neutral-600 cursor-default text-sm ">
                      {item.dishQuantity}
                    </span>

                    <button
                      className="cursor-pointer px-1 rounded-sm"
                      onClick={() => {
                        handlePlus(index);
                      }}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      handlePlus(index);
                    }}
                    className="hover:text-green-500 text-white bg-green-500 border border-green-400
                                        rounded-md shadow-md w-20 py-1 absolute top-24 right-4 hover:bg-white "
                    type="button"
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ) : (
//   <button
//     onClick={() => {
//       handlecheck(item);
//     }}
//     className="hover:text-green-500 text-white bg-green-500 border border-green-400
//                                         rounded-md shadow-md w-20 py-1 absolute top-4 right-4 hover:bg-white "
//     type="button"
//   >
//     Add
//   </button>
