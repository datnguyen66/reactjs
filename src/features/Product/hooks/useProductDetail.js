import productApi from "api/productsApi"
import { useEffect, useState } from "react"

export default function useProductDetail(productId) {
    const [product, setProduct] = useState({})

    useEffect(() =>{
        (async()=> {
            try {
                const result = await productApi.get(productId)
                // console.log(result);
                setProduct(result)
            } catch (error) {
                console.log('failed to fetch product', error);
            }
        })()
    }, [productId])

    return {}
}