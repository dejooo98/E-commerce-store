import React from 'react'
import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductsList from '../components/ProductsList'



const Home = () => {
  const [furnitures, setForniture] =useState(null);
  //loading message
  const [isPending, setIsPending] = useState(true)
  //erro
  const [error, setError] = useState(null)

  useEffect(()=>{
    setTimeout(()=>{
      fetch('http://localhost:7000/furnitures')
        .then(res =>{
          if(!res.ok){
            throw Error('could not fetch the data, make sure your API is ok!')
          }
          return res.json()
        })
        .then(data =>{
          console.log(data);
          setForniture(data);
          setIsPending(false)
          setError(null)
        })
        .catch(err =>{
          setIsPending(false)
          setError(err.message)
        })
    },2000)
    
  },[])

  return (
    <div>
        <Navbar/>
        <section className="hero">
          <div className="hero-container">
            <h1 className="text-slanted">Future Store</h1>
            <h2 className="text-slanted">Lorem Ipsum is simply dummy text of the printing</h2>
            <a className="btn hero-btn text-slanted">
              shop now 
            </a>
          </div>
        </section>
        {error && <div>{error}</div>}
        {isPending && <div className='loader'>Loading...</div>}
        {furnitures && <ProductsList furnitures={furnitures} title='All product'/>}
        <Footer/>
    </div>
  )
}

export default Home