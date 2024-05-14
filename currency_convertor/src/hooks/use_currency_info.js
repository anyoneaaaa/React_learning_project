import { useEffect, useState } from 'react'

function use_currency_info(currency) {
    const [data, set_data] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res) => res.json()).then((res) => set_data[currency])
        console.log(data)
    }, [currency])
    return data
}

export default use_currency_info