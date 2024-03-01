import { useEffect, useState } from "react"
import { SCROLLEACHITEM } from '../utils/constant'
import { SCROLLAPI } from '../utils/constant'
import { useParams } from 'react-router-dom'



const usescrollreataurent = () => {

    const [data, setdata] = useState("")
    const [restitem, setrestitem] = useState([])

    const { resId } = useParams()
    // console.log(resId);

    useEffect(() => {
        restfetch()
        restdata()
    }, [])

    const restfetch = async () => {
        const data = await fetch(SCROLLAPI)
        const jsondata = await data.json()
        setdata(jsondata?.data?.cards[0]?.card?.card)

    }

    // const filterdata = data?.gridElements?.infoWithStyle?.info.map(item => { return item.entityId })
    // console.log(filterdata);

    const restdata = async () => {
        const item = await fetch(SCROLLEACHITEM + resId + '&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null')
        const jsondata = await item.json()
        setrestitem(jsondata?.data?.cards)
    }


    return { data, restitem }
}

export default usescrollreataurent