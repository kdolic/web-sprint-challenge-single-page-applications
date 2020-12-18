import React, {useState, useEffect} from 'react';
import {Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import * as yup from 'yup';
import formSchema from './validation/formSchema';
import PizzaForm from './components/PizzaForm';
import Home from './components/Home';

const initialFormValues = {
  // Text Inputs
  fname: '',
  lname: '',
  email: '',
  // Dropdown
  size: '',
  // Checkboxes
  //Meats
  extraCheese: 'false',
  meatBalls: 'false',
  pepperoni: 'false',
  bacon: 'false',
  beef: 'false',
  grilledChicken: 'false',
  //Veggies
  mushrooms: 'false',
  onions: 'false',
  greenPeppers: 'false',
  olives: 'false',
  tomatoes: 'false',
  pineapples: 'false',
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
    size: formValues.size.trim(),
    extraCheese: formValues.extraCheese,
    meatBalls: formValues.meatBalls,
    pepperoni: formValues.pepperoni,
    bacon: formValues.bacon,
    beef: formValues.beef,
    grilledChicken: formValues.grilledChicken,
    mushrooms: formValues.mushrooms,
    onions: formValues.onions,
    greenPeppers: formValues.greenPeppers,
    olives: formValues.olives,
    tomatoes: formValues.tomatoes,
    pineapples: formValues.pineapples,
    specialInstruction: formValues.specialInstruction.trim()
  }
  postNewOrder(newOrder);
}


useEffect(() => {
  formSchema.isValid(formValues).then((valid) => {
    setDisabled(!valid);
  })
}, [formValues]);


  return (
    <div className='App'>
      <h1>Lambda Eats</h1>
      
    </div>
  );
};
export default App;
