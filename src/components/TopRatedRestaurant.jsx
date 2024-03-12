import { ArrowRight } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import usescrollreataurent from "../Hooks/usescrollreataurent"
import Slider from "react-slick"
import { useEffect, useRef, useState } from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Restaurantcard } from "./Restaurantcard"
import { Shimmercard } from "./Shimmercard"
import { Topratedcart } from "./Topratedcart"


export const TopRatedRestaurant = () => {

    const { data } = usescrollreataurent()
    const item = data[1]?.card?.card
    const mapdata = data[1]?.card?.card?.gridElements?.infoWithStyle

    const [slidesToShow, setSlidesToShow] = useState(4)
    const [scroll, setscroll] = useState(4)


    const sliderRef = useRef()

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 475) {
                setSlidesToShow(1);
                setscroll(1)
            } else if (window.innerWidth <= 1030) {
                setSlidesToShow(2);
                setscroll(2)
            }
            else if (window.innerWidth <= 700) {
                setSlidesToShow(2);
                setscroll(2)
            }
            else if (window.innerWidth <= 1400) {
                setSlidesToShow(3);
                setscroll(3)
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const sliderSettings = {
        ref: useRef(),
        speed: 1000,
        slidesToShow: slidesToShow,
        slidesToScroll: scroll,
    };

    const previous = () => {
        sliderSettings.ref.current.slickPrev();
    };

    const next = () => {
        sliderSettings.ref.current.slickNext();
    };


    return (
        <div>
            <div className="flex items-center justify-between my-1">
                <div className="">
                    <h1 className="text-gray-900 text-2xl font-bold mt-5 max-sm:text-xl">{item?.header?.title}</h1>
                </div>
                <div className='inline-flex mx-4'>
                    <ArrowLeft onClick={previous} className='size-7 mx-2 rounded-full p-1 bg-slate-300 ' />

                    <ArrowRight onClick={next} className='size-7 rounded-full p-1 bg-slate-300' />
                </div>
            </div>
            <Slider
                className=" max-sm:justify-center inline-flex justify-center "
                {...sliderSettings}
            >
                {
                    mapdata?.restaurants?.length < 1 ? <Shimmercard /> : mapdata?.restaurants.map((item) => {
                        return (
                            <div key={item?.info?.id}>
                                <Topratedcart key={item.info.id} data={item} />
                            </div>
                        )
                    })
                }
            </Slider>
            <div>
                < Restaurantcard />
            </div>

        </div >

    )
}