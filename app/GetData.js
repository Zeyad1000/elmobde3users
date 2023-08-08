"use client"
import { useState, useEffect } from "react"
const GetData = () => {
    const api_url = 'https://sheetdb.io/api/v1/hgdov3ekkxvzq';
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch(api_url)
            .then(response => response.json())
            .then(data => setdata(data))
    }, []);
    const PhoneNumber = 'Phone Number';
    const x = data.map((data) => {
        return (
            <div class="max-w-sm rounded overflow-hidden shadow-lg" key={data.ID}>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{data.Name}</div>
                    <p class="text-gray-700 text-base"><span class="font-semibold">Password: </span>{data.Password}</p>
                    <p class="text-gray-700 text-base"><span class="font-semibold">Email: </span>{data.Email}</p>                    </div>
                <div class="px-6 py-4">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"># {data.ID}</span>
                </div>
            </div>
        )
    });
    return (
        <>
            {x}
        </>
    )
}
export default GetData;