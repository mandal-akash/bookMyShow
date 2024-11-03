import React from 'react'
import { Carousel } from "flowbite-react";
const Category = () => {
  return (
    <div className="category my-2">
        <div className="top_category_section flex justify-around bg-[#F5F5F5] p-2">
            <div className='left_category flex list-none flex-[0.3] justify-around'>
                <li>Movies</li>
                <li>Stream</li>
                <li>Event</li>
                <li>Play</li>
                <li>Sports</li>
                <li>Activities</li>
            </div>
            <div className='right_category flex list-none flex-[0.3] justify-around'>
                <li>ListYourShow</li>
                <li>Corporate</li>
                <li>Offers</li>
                <li>Git Cards</li>
            </div>
        </div>
        <div className="bg-[#EBEBEB]">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img className='w-[90vw] rounded-xl' src="https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg" alt="..." />
        <img  className='w-[90vw] rounded-xl' src="https://assets-in.bmscdn.com/promotions/cms/creatives/1729862004049_indianoceanbms1240x300group.jpg" alt="..." />
      </Carousel>
    </div>
    </div>
    </div>
  )
}

export default Category