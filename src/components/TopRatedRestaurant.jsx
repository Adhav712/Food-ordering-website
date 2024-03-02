import { ArrowRight } from "lucide-react"
import { ArrowLeft } from "lucide-react"




export const TopRatedRestaurant = () => {
    return (
        <div>
            <div className="flex items-center justify-between my-4">
                <div className="">
                    <h1 className="text-gray-900 text-2xl font-bold my-5">Top Rated Restaurant</h1>
                </div>
                <div className='inline-flex mx-4'>
                    <ArrowLeft className='size-7 mx-2 rounded-full p-1 bg-slate-300' />
                    {/* onClick={previous}  onClick={next}*/}
                    <ArrowRight className='size-7 rounded-full p-1 bg-slate-300' />
                </div>
            </div>
            <div>
                <div>

                </div>
            </div>
        </div>
    )
}