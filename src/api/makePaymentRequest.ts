import axios from 'axios'
export const makePaymentRequest= axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL_STRAPI,
    headers:{
        Authorization:"bearer" + import.meta.env.VITE_STRIPE_KEY,
    }
})
