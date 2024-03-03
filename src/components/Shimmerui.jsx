import { Pizza, CupSoda, Croissant, Salad } from "lucide-react"
import { useEffect, useState } from "react";
import { Shimmercard } from "./Shimmercard";

export const Shimmerui = () => {


    const [iconIndex, setIconIndex] = useState(0);

    useEffect(() => {
        const delay = 2000;

        const icons = [Pizza, CupSoda, Croissant];

        const interval = setInterval(() => {
            setIconIndex(prevIndex => (prevIndex + 1) % icons.length);
        }, delay);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const getCurrentIcon = () => {
        const icons = [Salad, CupSoda, Croissant];
        const CurrentIcon = icons[iconIndex];
        return <CurrentIcon className="size-11 text-gray-300" />;
    };
    return (
        <div className="">
            <div className="w-full h-80 border-2 border-black bg-gray-900  
            ">
                <div className=" h-72 my-24 mx-36">
                    <div className="flex justify-center items-center my-4">
                        <p className="border-b-2 border-opacity-90 border-l-2 border-r-2 border-white shadow-sm shadow-white  w-20 h-20 rounded-full animate-spin"></p>
                        <h1 className="absolute rounded-full p-4">{getCurrentIcon()}</h1>
                    </div>
                    <div className="flex justify-center">
                        <h1 className="text-white  text-3xl">Looking for great food near you ...</h1>
                    </div>
                </div>
            </div>
            <div >
                < Shimmercard />
            </div>
        </div >
    )
}

// <Pizza /><Pizza /> <CupSoda /><Croissant />