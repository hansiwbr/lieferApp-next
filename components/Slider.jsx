

import { Carousel } from "react-bootstrap"
import Image from "next/image"
export default function Slider() {
    return (
        <div>

        <Carousel controls={false} fade={true}>
            <Carousel.Item>
                <Image className="d-block w-100 rounded-3 img-fluid" src='/bilder/essen/burger.jpg' alt="burger" width={3000} height={1000}/>
            </Carousel.Item>
            <Carousel.Item>  
                <Image className="d-block w-100 rounded-3 img-fluid" src='/bilder/essen/pizza.jpg' alt="pizza" width={3000} height={1000}/>
            </Carousel.Item>
            <Carousel.Item>    
                <Image className="d-block w-100 rounded-3 img-fluid" src='/bilder/essen/burrito.jpg' alt="burrito" width={3000} height={1000}/>
            </Carousel.Item>  
       </Carousel>

      </div>
    )
  }
   