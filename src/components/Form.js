import React from 'react'

export default function PizzaForm(props) {
    const { values, update, submit, disabled, errors} = props
   

    const onChange = event => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked :  value
        update(name, valueToUse) // callback from props 
    }

    const onSubmit = event => {
        // doesn't allow browser to reload which would cause it to go back to initial form state/values
        event.preventDefault();
        submit(); // callback from props
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h2>Lambda Pizza</h2>
                <h3>Build Your Own Pizza</h3>
                
                <div className='errors'>
                    <div>{errors.fname}</div>
                    <div>{errors.lname}</div>
                    <div>{errors.email}</div>
                </div>
                
                <label><h4>First Name*&nbsp;</h4></label><br></br>
                    <input name='fname' type='text' placeholder='Enter First Name...' maxLength='25' value={values.fname} onChange={onChange} /><br></br>
                
                <label><h4>Last Name*&nbsp;</h4></label><br></br>
                    <input name='lname' type='text' placeholder='Enter Last Name...' maxLength='25' value={values.lname} onChange={onChange} /><br></br>

                <label><h4>Email*&nbsp;</h4></label><br></br>
                    <input name='email' type='email' placeholder='Enter Email...' maxLength='30' value={values.email} onChange={onChange} /><br></br>

                <label><h4>Choice of Size*:&nbsp;</h4></label><br></br>
                    <select name='size' value={values.size} onChange={onChange}>
                        <option value=''>-------Select Size-------</option>
                        <option value='Small(12")'>Small(12")</option>
                        <option value='Medium(14")'>Medium(14")</option>
                        <option value='Large(16")'>Large(16")</option>
                    </select>

                    <h4>Add Toppings*&nbsp;</h4>
                        <label>Extra Cheese
                            <input type='checkbox' name='extraCheese' value={values.extraCheese} onChange={onChange} />
                        </label>
                        <label>Meat Balls
                            <input type='checkbox' name='meatBalls' value={values.meatBalls} onChange={onChange} />
                        </label>

                        <label>Pepperoni
                            <input type='checkbox' name='pepperoni' value={values.pepperoni} onChange={onChange} />
                        </label>

                        <label>Bacon
                            <input type='checkbox' name='bacon' value={values.bacon} onChange={onChange} />
                        </label>

                        <label>Beef
                            <input type='checkbox' name='beef' value={values.beef} onChange={onChange} />
                        </label>

                        <label>Grilled Chicken
                            <input type='checkbox' name='grilledChicken' value={values.grilledChicken} onChange={onChange} />
                        </label>

                        <label>Mushrooms
                            <input type='checkbox' name='mushrooms' value={values.mushrooms} onChange={onChange} />
                        </label>

                        <label>Onions
                            <input type='checkbox' name='onions' value={values.onions} onChange={onChange} />
                        </label>

                        <label>Green Peppers
                            <input type='checkbox' name='greenPeppers' value={values.greenPeppers} onChange={onChange} />
                        </label>

                        <label>Olives
                            <input type='checkbox' name='olives' value={values.olives} onChange={onChange} />
                        </label>

                        <label>Tomatoes
                            <input type='checkbox' name='tomatoes' value={values.tomatoes} onChange={onChange} />
                        </label>

                        <label>Pineapples
                            <input type='checkbox' name='pineapples' value={values.pineapples} onChange={onChange} />
                        </label>
                    

                   <label>Special Instructions
                        <input name='specialInstruction' type='text' placeholder='Anything else you would like to add?' value={values.specialInstruction} onChange={onChange} />
                   </label>

                    <button id='submitButton' disabled={disabled}>Add To Order</button>
                    
            </div>
        </form>
    )
}
