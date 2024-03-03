import Banner from '../Banner/Banner';
import Maps from '../Maps/Maps';
import Parallax from '../Parallax/Parallax';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Parallax/>
            <Services/>
            <Banner/>
            <Maps/>
        </div>
    );
}

export default Home;