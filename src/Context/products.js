import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { flattenProducts } from '../url/helper';
import url from '../url/URL'
const ProductContext = React.createContext();

export default function ProductProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        setLoading(true);
        fetch(`${url}`)
            .then(response => response.json())
            .then(storeProducts =>{
                const products = flattenProducts(storeProducts);
                setProducts(products);
                setLoading(false);
        })
    },[])

    return (
        <ProductContext.Provider value={{products, loading }}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductContext, ProductProvider}