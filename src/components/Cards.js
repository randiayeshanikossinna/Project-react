 import React from 'react'
 import './Cards.css';
 import CardItems from './CardItems';
 function Cards() {
     return (
         <div className="cards">
             <h1>Check out these EPIC Destinations</h1>
            <div className="cards__container">
            <div className="cards__wapper">
                <ul className="cards__items">
                <CardItems
                src ='images/th2.jpg'
                text='Adventure travel is good for the soul. It allows you to enjoy a more authentic travel experience for which you really get to know the local people, perhaps up your fitness level a notch, and almost always offers the chance to truly leave all of your worries behind.'
                label='Adventure'
                path='/services'
                />
                </ul>
                </div>   
                </div>   

         </div>
     )
 }
 
 export default Cards;
 
