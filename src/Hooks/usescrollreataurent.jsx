import { useEffect, useState } from "react"
// export { SCROLLAPI } from '../utils/constant'


const usescrollreataurent = () => {

    const [data, setdata] = useState("")
    const [restitem, setrestitem] = useState([])


    useEffect(() => {
        restfetch()
        restdata()
    }, [])

    const restfetch = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8996&lng=80.2209&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsondata = await data.json()
        console.log(jsondata?.data?.cards[0]?.card?.card);
        setdata(jsondata?.data?.cards[0]?.card?.card)
    }

    const restdata = async () => {
        const item = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8996&lng=80.2209&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null')
        const jsondata = await item.json()
        console.log(jsondata?.data?.cards);
        setrestitem(jsondata?.data?.cards)
    }


    return { data, restitem }
}

export default usescrollreataurent