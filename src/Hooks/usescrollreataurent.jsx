import { useEffect, useState } from "react"
import { Generalrestdata } from '../Mock/GeneralRestdata'

const usescrollreataurent = () => {

    const [data, setdata] = useState("")

    useEffect(() => {
        restfetch()
    }, [])

    const restfetch = async () => {

        setTimeout(() => {
            setdata(Generalrestdata?.data?.cards)
        }, 1000);

    }

    return { data }
}

export default usescrollreataurent

