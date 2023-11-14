import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/Photos/Hospital/img3.jpg'
import img2 from '../../../assets/Photos/Hospital/img7.jpg'
import img3 from '../../../assets/Photos/Hospital/img8.jpg'
import img4 from '../../../assets/Photos/Hospital/img9.jpg'
import img5 from '../../../assets/Photos/Hospital/img11.jpg'

const Caurosel = () => {
    return (
        <div className="carousel">
            <Carousel showArrows={true} showThumbs={false} dynamicHeight={false} autoPlay={true} interval={2000} infiniteLoop={true}>
                <div>
                    <img src={img1} className="h-96" />
                </div>
                <div>
                    <img src={img2} className="h-96" />
                </div>
                <div>
                    <img src={img3} className="h-96" />
                </div>
                <div>
                    <img src={img4} className="h-96" />
                </div>
                <div>
                    <img src={img5} className="h-96" />
                </div>
            </Carousel>
        </div>
    );
}

export default Caurosel;