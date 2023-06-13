import Banner from "./Banner/Banner.jsx";
import HitSale from "../../components/HitSale/HitSale.jsx";
import {useState} from "react";


const Home = () => {

    return (
        <main>
            <Banner/>
            <HitSale/>
        </main>
    );
};

export default Home;