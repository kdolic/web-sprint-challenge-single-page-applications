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




  return (
    <>
      <h1>Lambda Eats</h1>
      
    </>
  );
};
export default App;
