
import ImageItem from '@/components/shared/ImageItem'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'


interface CarouselProductProps {
    images: {
        id: number,
        url: string
    }
}

const CarouselProduct = (props: CarouselProductProps) => {
    const { images } = props
    return (
        <div className="sm:px-2 md:mr-0 sm:mr-8">
            <Carousel>
                <CarouselContent>

                    <CarouselItem key={images.id}>
                        <ImageItem item={images.url} />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CarouselProduct


