import * as yup from 'yup';

export default yup.object().shape({
    fname: yup
    .string()
    .required('Please enter your first name')
    .min(2, 'First Name must be of minimum length 2 characters'),

    lname: yup
    .string()
    .required('Please enter your last name')
    .min(2, 'Last Name must be of minimum length 2 characters'),

    email: yup
    .string()
    .email('Enter a valid email')
    .required('Please enter your email address'),

    size: yup
    .string(),
    

    extraCheese: yup.boolean(),
    meatBalls: yup.boolean(),
    pepperoni: yup.boolean(),
    bacon: yup.boolean(),
    beef: yup.boolean(),
    grilledChicken: yup.boolean(),
    mushrooms: yup.boolean(),
    onions: yup.boolean(),
    greenPeppers: yup.boolean(),
    olives: yup.boolean(),
    tomatoes: yup.boolean(),
    pineapples: yup.boolean(),

    specialInstruction: yup
    .string()
});