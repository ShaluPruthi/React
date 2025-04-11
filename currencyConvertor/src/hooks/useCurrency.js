//CUSTOM HOOKS

import { useEffect, useState } from "react";

function useCurrency(currency){
    const [data, setData] = useState({});   //empty object to store data

    //automatically call fetch
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        //convert data into json
        .then((res) => res.json())
        .then((res) => setData(res[currency])) //set data to the response of the API and call the object inside []
        console.log(data);
        
        //changes in currency call the fetch function again
    }, [currency]);
    console.log(data);
    return data; 
    
}

export default useCurrency;