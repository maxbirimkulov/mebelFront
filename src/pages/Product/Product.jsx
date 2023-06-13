import ProductSlider from "../../components/ProductSlider/ProductSlider.jsx";
import ProductInfo from "../../components/ProductInfo/ProductInfo.jsx";
import { useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import api from "../../config/api/api.js";
import HitSale from "../../components/HitSale/HitSale.jsx";

const Product = () => {

    const params = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        api(`products/${params.id}`).json()
            .then((res) => setProduct(res))
    },[])


    console.log(product)

    if ('id' in product) {
        return (
            <>
                <section className="product">
                    <div className="container">
                        <div className="product__row">
                            <ProductSlider/>
                            <ProductInfo product={product}/>
                        </div>
                    </div>
                </section>
                <HitSale/>
            </>

        );
    } else {
        return <h2>Loading...</h2>
    }



};

export default Product;