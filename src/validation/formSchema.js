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
    .string()
    .oneOf(['Small(12")', 'Medium(14")', 'Large(16")'], 'Pizza Size Required'),

    extraCheese: yup.boolean().defined(),
    meatBalls: yup.boolean().defined(),
    pepperoni: yup.boolean().defined(),
    bacon: yup.boolean().defined(),
    beef: yup.boolean().defined(),
    grilledChicken: yup.boolean().defined(),
    mushrooms: yup.boolean().defined(),
    onions: yup.boolean().defined(),
    greenPeppers: yup.boolean().defined(),
    olives: yup.boolean().defined(),
    tomatoes: yup.boolean().defined(),
    pineapples: yup.boolean().defined(),

    specialInstruction: yup.string().notRequired()
});