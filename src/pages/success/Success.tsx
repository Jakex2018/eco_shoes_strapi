import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";


export default function Success() {
    const router = useNavigate()
    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 py-20 sm:px-24">
            <div className="flex flex-col  hap-2 sm:flex-row">
                <div className="flex justify-center  md:min-w-[400px]">
                    <img src="/banner01.jpg" alt="" className="w-[300px] h-[300px] object-fill rounded-lg" />
                </div>
                <div className="mt-10 text-center">
                    <h1 className="text-3xl">
                        Gracias por su compra
                    </h1>
                    <p className="my-3">En breve, nuestro equipo se pondra manos a la obra</p>
                    
                    <Button onClick={() => router('/')}>Volver A la tienda</Button>
                </div>
            </div>
        </div>
    )
}