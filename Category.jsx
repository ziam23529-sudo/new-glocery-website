import React from 'react'
import Heading from '../Heading/Heading'
import FruitCat from "../../assets/grocery-removebg-preview.png"
import DairyCat from "../../assets/dairy-removebg-preview.png"
import SeaFoodCat from "../../assets/seafood-removebg-preview.png"
import { Link } from 'react-router-dom'

import Button from '../Button/Button'

const Category = () => {

    const renderCards = category.map(card => {
        return (

            // Card
            <div className='flex-1 ' key={card.id}>
                {/* Card Image */}
                <div className=' w-full min-h-[30vh] relative -mb-10 '>
                    <img src={card.image} className='absolute bottom-0 w-200' />
                </div>

                {/* Card Content */}
                <div className='bg-zinc-100 pt-17 p-8 rounded-xl'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
                    <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
                    <Link to={card.path} className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105  hover:to-orange-600 transition-all duration-300 cursor-pointer '>
                        See All
                        </Link>
                </div>

            </div>
        )
    })

    return (
        <>
            <section>
                <div className=' max-w-[1300px] mx-auto px-10 py-20 '>
                    <Heading highlight="Shop" heading="by Category" />

                    {/* Category Card */}
                    <div className='flex gap-10 mt-15'>
                        {renderCards}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Category

const category = [
    {
        id: 1,
        title: "Fruits & Veggies",
        description: "Fresh, organic produce sourced daily from local forms . Explore a wide range of seasonal fruits and  crisp vegetables",
        image: FruitCat,
        path:'/fruits'

    },
    {
        id: 2,
        title: "Dairy & Eggs",
        description: "Wholesome dairy products and free-range eggs. From cremy milk and yogurt to artisanal cheeses.",
        image: DairyCat,
        path:'/dairy'
    },
  {
  id: 3,
  title: "Meat & SeaFood",
  image: SeaFoodCat,
   description: "High-quality, responsibly sourced meet and seafood. Choose from fresh cuts, marinated options and mores.,",
  path:'/seafood'  // ✅ must match router
}

]
