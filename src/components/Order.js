import React from 'react';

export default function User(props) {
    const { orderInfo } = props

    if (!orderInfo) {
        return <h3> Working on fetching your pizza order&apos;s information...</h3>
    }

    return (
        <div className='container'>
            <h1>Order: {orderInfo.id}</h1>
            <h2>{orderInfo.fname} {orderInfo.lname}</h2>
            <p>Size:&nbsp;  {orderInfo.size}</p>
            <p>Toppings: &nbsp; 
                {orderInfo.extraCheese ? "Extra Cheese":" "}
                {orderInfo.meatBalls ? "Meat Balls":" "}
                {orderInfo.pepperoni ? "Pepperoni":" "}
                {orderInfo.bacon ? "Bacon":" "}
                {orderInfo.beef ? "Beef":" "}
                {orderInfo.grilledChicken ? "Grilled Chicken":" "}
                {orderInfo.mushrooms ? "Mushrooms":" "}
                {orderInfo.onions ? "Onions":" "}
                {orderInfo.greenPeppers ? "Green Peppers":" "}
                {orderInfo.olives ? "Olives":" "}
                {orderInfo.tomatoes ? "Tomatoes":" "}
                {orderInfo.pineapples ? "Pineapples":" "}


               
            </p>
            <p>Special Instruction:&nbsp;  {orderInfo.specialInstruction}</p>
        </div>
    )
}

