import { useEffect, useState } from "react"
// export { SCROLLAPI } from '../utils/constant'


const usescrollreataurent = () => {

    const [data, setdata] = useState("")

    useEffect(() => {
        restfetch()
    }, [])

    const restfetch = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8996&lng=80.2209&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsondata = await data.json()
        console.log(jsondata?.data?.cards[0]?.card?.card);
        setdata(jsondata?.data?.cards[0]?.card?.card)
    }

    return data
}

export default usescrollreataurent