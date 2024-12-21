import { formatPrice } from "@/components/formatPrice"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { UseCart } from "@/hooks/useCart"
import CardItem from "./components/CardItem"
import { loadStripe } from '@stripe/stripe-js'
import { makePaymentRequest } from "@/api/makePaymentRequest"

const Cart = () => {
    const { items } = UseCart()
    const prices = items.map((item) => item.price)
    const totalPrice = prices.reduce((total, price) => total + price, 0)
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY || '')

    const buyStripe = async () => {
        try {
            const stripe = await stripePromise
            const res = await makePaymentRequest.post("/api/orders", {
                products: items
            })

            await stripe?.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="max-x-6xl px-10 py-16 mx-auto sm:px-10 lg:px-32">
            <h1 className="mt-5 text-3xl font-bold">Shopping Cart</h1>
            <div className="mt-10 flex lg:flex-row flex-col sm:gap-5">
                <div>
                    {
                        items.length == 0 && (
                            <p>Not products founds in the cart</p>
                        )
                    }

                    <ul>
                        {
                            items.map((item) => (
                                <CardItem key={item.id} product={item} />
                            ))
                        }
                    </ul>
                </div>
                <div className="max-w-xl mx-auto md:py-2 py-8">
                    <div className="p-6 rounded-lg bg-slate-100">
                        <p className="mt-3 text-3xl font-semibold dark:text-black">Order Summary</p>
                        <Separator />
                        <div className="flex justify-between gap-5 my-4 [&>p]:dark:text-black">
                            <p>Order Total</p>
                            <p>{formatPrice(totalPrice)}</p>
                        </div>
                        <div className="flex items-center justify-center w-ful mt-">
                            <Button onClick={buyStripe} className="w-full dark:bg-black dark:text-white">Comprar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart

