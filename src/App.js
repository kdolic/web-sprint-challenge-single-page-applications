import React, {useState, useEffect } from 'react';
import {Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import * as yup from 'yup';
import formSchema from './validation/formSchema';
import Form from './components/Form';
import Home from './components/Home';
import Order from './components/Order';

const initialFormValues = {
  // Text Inputs
  fname: '',
  lname: '',
  email: '',
  // Dropdown
  size: '',
  // Checkboxes
  //Meats
    extraCheese: false,
    meatBalls: false,
    pepperoni: false,
    bacon: false,
    beef: false,
    grilledChicken: false,
    //Veggies
    mushrooms: false,
    onions: false,
    greenPeppers: false,
    olives: false,
    tomatoes: false,
    pineapples: false,
  //Instruction
  specialInstruction: ''
}

const initialFormErrors = {
  // Text Inputs
  fname: '',
  lname: '',
  email: '',
  // Dropdown
  size: '',
  extraCheese: '',
  meatBalls: '',
  pepperoni: '',
  bacon: '',
  beef: '',
  grilledChicken: '',
  //Veggies
  mushrooms: '',
  onions: '',
  greenPeppers: '',
  olives: '',
  tomatoes: '',
  pineapples: '',
//Instruction
specialInstruction: ''
}

const initialOrders = []
const initialDisabled = true



const App = () => {
// slices of state
const [orders, setOrders] = useState(initialOrders)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const postNewOrder = (newOrder) => {
  axios.post('https://reqres.in/api/users', newOrder)
  .then((res) => {
    setOrders([res.data, ...orders]);
    setFormValues(initialFormValues);
  })
  .catch((err) => {
    console.log(err);
    debugger;
  })
}


const inputChange = (name, value) => {
  yup
  .reach(formSchema, name)
  .validate(value)
  .then(() => {
    setFormErrors({
      ...formErrors, [name]: ''
    });
  })
  .catch((err) => {
    setFormErrors({
      ...formErrors, [name]: err.errors[0],
    });
  });
  setFormValues({
    ...formValues, [name]: value,
  });
};


const formSubmit = () => {
  const newOrder = {
    fname: formValues.fname.trim(),
    lname: formValues.lname.trim(),
    email: formValues.email.trim(),
    size: formValues.size,
    toppings: ['extraCheese', 'meatBalls', 'pepperoni', 'bacon', 'beef', 'grilledChicken', 'mushrooms', 'onions', 'greenPeppers', 'olives', 'tomatoes', 'pineapples'].filter((topping) => formValues[topping]),
    specialInstruction: formValues.specialInstruction.trim()
  }
  console.log(newOrder)
  postNewOrder(newOrder);
}


useEffect(() => {
  formSchema.isValid(formValues).then((valid) => {
    setDisabled(!valid);
  })
}, [formValues]);

console.log(disabled)
return (
  <div className="App">
    <header>
      <nav>
        <h1>Lambda Eats</h1>
          <Link to='/'>HOME</Link>
          <Link to='/pizza'>ORDER</Link>
          <Link to=''>ABOUT</Link>
          <Link to=''>CONTACT</Link>
      </nav>
    </header>

    <Switch>

      <Route path={'/pizza'}>
        <Form
          values={formValues}
          update={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />

      {orders.map((order) => {
        return <Order key={order.id} orderInfo={order} />;
      })}
      </Route>

      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>


  </div>
);
};
export default App;
