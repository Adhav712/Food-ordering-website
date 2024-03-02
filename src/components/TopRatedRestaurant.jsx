import { ArrowRight } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import usescrollreataurent from "../Hooks/usescrollreataurent"
import { Star } from "lucide-react"
import Slider from "react-slick"
import { useRef } from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Restaurantcard } from "./Restaurantcard"

export const TopRatedRestaurant = () => {

    const { data } = usescrollreataurent()
    const item = data[1]?.card?.card
    const mapdata = data[1]?.card?.card?.gridElements?.infoWithStyle

    const sliderRef = useRef()

    const previous = () => {
        sliderRef.current.slickPrev()
        console.log(sliderRef.current);
    }
    const next = () => {
        sliderRef.current.slickNext()
    }

    const settings = {
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 5,
    }

    return (
        <div>
            <div className="flex items-center justify-between my-1">
                <div className="">
                    <h1 className="text-gray-900 text-2xl font-bold mt-5">{item?.header?.title}</h1>
                </div>
                <div className='inline-flex mx-4'>
                    <ArrowLeft onClick={previous} className='size-7 mx-2 rounded-full p-1 bg-slate-300 ' />
                    {/* onClick={previous}  onClick={next}*/}
                    <ArrowRight onClick={next} className='size-7 rounded-full p-1 bg-slate-300' />
                </div>
            </div>
            <Slider
                className=" max-sm:justify-center inline-flex  "
                ref={sliderRef}
                {...settings}
            >
                {
                    mapdata?.restaurants.map((item) => {
                        const { id, name, avgRatingString, cuisines, sla, cloudinaryImageId } = item?.info
                        return (
                            <div key={id} className='transition ease-in delay-75  hover:scale-95  duration-100  
                             max-sm:w-52 w-[14em] max-w-64 shadow-md shadow-slate-300  rounded-xl p-4 m-2 min-h-48 h-[22em] max-h-[30em]'>
                                <div className='flex justify-center items-center'>
                                    <img
                                        className='max-sm:w-44 max-sm:44 rounded-lg w-60 h-44 object-cover shadow-md shadow-slate-400'
                                        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="" />
                                </div>
                                <div className='mx-2 text-left'>
                                    <h1 className='text-xl font-semibold my-4 text-gray-800'>{name}</h1>
                                    <div className=' flex  items-center'>
                                        <Star className='max-sm:size-5  size-6 mr-2 rounded-full p-1 bg-green-600 text-white' />
                                        <p className='font-semibold'>{avgRatingString} </p>
                                        <p className='mx-2 font-semibold'> {sla?.slaString}</p>
                                    </div>
                                    <p className='my-2 mx-1 max-sm:text-sm font-normal'>{cuisines.splice(0, 2).join(' , ')}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <Restaurantcard />
        </div >

    )
}