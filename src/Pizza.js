import React, { useState } from 'react'
import './pizza.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function Pizza() {
    const pizzaData = [
        {
          name: "Focaccia",
          ingredients: "Bread with italian olive oil and rosemary",
          price: 6,
          photoName: "pizzas/focaccia.jpg",
          soldOut: false
        },
        {
          name: "Pizza Margherita",
          ingredients: "Tomato and mozarella",
          price: 10,
          photoName: "pizzas/margherita.jpg",
          soldOut: false
        },
        {
          name: "Pizza Spinaci",
          ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
          price: 12,
          photoName: "pizzas/spinaci.jpg",
          soldOut: false
        },
        {
          name: "Pizza Funghi",
          ingredients: "Tomato, mozarella, mushrooms, and onion",
          price: 12,
          photoName: "pizzas/funghi.jpg",
          soldOut: false
        },
        {
          name: "Pizza Salamino",
          ingredients: "Tomato, mozarella, and pepperoni",
          price: 15,
          photoName: "pizzas/salamino.jpg",
          soldOut: true
        },
        {
          name: "Pizza Prosciutto",
          ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
          price: 18,
          photoName: "pizzas/prosciutto.jpg",
          soldOut: false
        }
      ];

      
        let opentime = 10;
        let closetime = 22;
        let date = new Date();

        let h = date.getHours();
        let m= date.getMinutes();
        let total =h + '.' + m
        console.log(total)


  return (
    <>

        <h1 className='fast'>FAST REACT PIZZA CO.</h1>
        <h3 className='menu'>OUR MENU</h3>

        <div className='parent'>
        {
          
          pizzaData.map((pizza,index) => {
                      return (
                        <div className='box' key={index}>
                            <div>
                              <img src={pizza.photoName}></img>
                            </div>
                            <div className='detail'>
                              <h1>{pizza.name}</h1>
                              <p>{pizza.ingredients}</p>
                              <h4>{(pizza.soldOut == false)?('$' + pizza.price):('SoldOut') }</h4>
                            </div>
                            
                        </div>
                      
                      )
          } 
                     )
      }
        </div>
        
        <h4 className='foot'>We're Happy to welcome you between 10:00 and 22:00</h4>
        
        <button className={total >opentime && total <closetime ? 'open' : 'close'}>Order Now</button>
        
        <div className='footer'>
          All copyright reserved
        </div>

    </>
  )
}

export default Pizza
