import { Pizza, CupSoda, Croissant, Salad } from "lucide-react"
import { useEffect, useState } from "react";

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
        <div>
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
            <div className="mx-44 flex">
                <div>
                    <div className="h-12 w-60 bg-slate-100"></div>
                    <p className="h-20 w-60 py-1 bg-slate-200">
                        <div className="flex mx-4 my-4 items-center">
                            <p className="w-10 h-10 mr-4 rounded-full bg-slate-100"></p>
                            <p className="w-28 h-2  bg-slate-100"></p>
                        </div>
                        <div className="flex mx-4 my-8 items-center">
                            <p className="w-10 h-10 mr-4 rounded-full bg-slate-200"></p>
                            <p className="w-28 h-2  bg-slate-200"></p>
                        </div>
                        <div className="flex mx-4 my-8 items-center">
                            <p className="w-10 h-10 mr-8 rounded-full bg-slate-200"></p>
                            <p className="w-28 h-2  bg-slate-200"></p>
                        </div>
                        <div className="flex mx-4 my-8 items-center">
                            <p className="w-10 h-10 mr-4 rounded-full bg-slate-200"></p>
                            <p className="w-28 h-2  bg-slate-200"></p>
                        </div>
                        <div className="flex mx-4 my-8 items-center">
                            <p className="w-10 h-10 mr-4 rounded-full bg-slate-200"></p>
                            <p className="w-28 h-2  bg-slate-200"></p>
                        </div>
                        <div className="flex mx-4 my-8 items-center">
                            <p className="w-10 h-10 mr-4 rounded-full bg-slate-200"></p>
                            <p className="w-28 h-2  bg-slate-200"></p>
                        </div>
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center ml-10">
                    <div className="">
                        <div className="flex mx-4 mt-16  w-56 h-44 bg-slate-200"></div>
                        <p className="w-40 h-2  mx-5 my-4 bg-slate-200"></p>
                        <p className="w-32 h-2  mx-5 my-4 bg-slate-200"></p>
                    </div>
                    <div className="">
                        <div className="flex mx-4 mt-16  w-56 h-44 bg-slate-200"></div>
                        <p className="w-40 h-2  mx-5 my-4 bg-slate-200"></p>
                        <p className="w-32 h-2  mx-5 my-4 bg-slate-200"></p>
                    </div>
                    <div className="">
                        <div className="flex mx-4 mt-16  w-56 h-44 bg-slate-200"></div>
                        <p className="w-40 h-2  mx-5 my-4 bg-slate-200"></p>
                        <p className="w-32 h-2  mx-5 my-4 bg-slate-200"></p>
                    </div>
                    <div className="">
                        <div className="flex mx-4 mt-16  w-56 h-44 bg-slate-200"></div>
                        <p className="w-40 h-2  mx-5 my-4 bg-slate-200"></p>
                        <p className="w-32 h-2  mx-5 my-4 bg-slate-200"></p>
                    </div>
                    <div className="">
                        <div className="flex mx-4 mt-16  w-56 h-44 bg-slate-200"></div>
                        <p className="w-40 h-2  mx-5 my-4 bg-slate-200"></p>
                        <p className="w-32 h-2  mx-5 my-4 bg-slate-200"></p>
                    </div>
                    <div className="">
                        <div className="flex mx-4 mt-16  w-56 h-44 bg-slate-200"></div>
                        <p className="w-40 h-2  mx-5 my-4 bg-slate-200"></p>
                        <p className="w-32 h-2  mx-5 my-4 bg-slate-200"></p>
                    </div>
                </div>
            </div>
        </div >
    )
}

// <Pizza /><Pizza /> <CupSoda /><Croissant />