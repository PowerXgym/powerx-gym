import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Footer from '../Footer/Footer';
import PageHeader from '../Shared/PageHeader/PageHeader';
import SinglePrice from './SinglePrice';

const Pricing = () => {
    const [AllPrice, setAllPrice] =useState([])
    console.log(AllPrice)
    useEffect(() => {
        fetch('https://obscure-wave-43497.herokuapp.com/AllPrices')
        .then(res => res.json())
        .then(data =>setAllPrice(data))
    }, [])

    return (
        <div >
            <PageHeader name="Pricing Plans"/>
            <div align="center" className="container pt-5">
                <h1><span className="text-warning">Choose the other</span> that suits you</h1>
                <p className="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br></br> Et maxime, minima dignissimos </p>
                <div className="row">
                    {
                        AllPrice.map(p=><SinglePrice pricelist={p}/>)
                    }
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Pricing;