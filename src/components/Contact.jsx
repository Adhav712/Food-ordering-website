import { useEffect, useState } from "react"


export const Contact = () => {

    const [userdata, setuserdata] = useState("")

    useEffect(() => {
        const githubapi = async () => {
            const data = await fetch('https://api.github.com/users/vaigarai14')
            const jsondata = await data.json()
            console.log(jsondata);
            setuserdata(jsondata)
        }
        githubapi()
    }, [])

    console.log(userdata);
    const { login, avatar_url, bio, url, name } = userdata

    return (
        <div>
            <div>
                <h1 className="text-3xl">This is about page </h1>
            </div>
        </div>
    )
}

export default Contact