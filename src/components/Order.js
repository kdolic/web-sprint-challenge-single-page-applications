import React from 'react';

export default function User(props) {
    const { orderInfo } = props

    if (!orderInfo) {
        return <h3> Working on fetching your pizza order&apos;s information...</h3>
    }

    return (
        <div className='container'>
            <h1>Order: {orderInfo.id}</h1>
            <h2>Name: {orderInfo.fname} {orderInfo.lname}</h2>
            <p>Size:&nbsp;  {orderInfo.size}</p>
            <div>Toppings:&nbsp; 
                {
                    orderInfo.toppings.map((topping) => {
                        return (
                            <p>
                               {topping}
                            </p>
                        )
                    })
                }
            </div>
            <p>Special Instruction:&nbsp;  {orderInfo.specialInstruction}</p>
        </div>
    )
}

