import React, { useState } from 'react';
import "./Classes.scss";
import ClassesData from './ClassesData';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import MenuBar from '../Shared/MenuBar';



const Classes = () => {
    
const [classesData,setClassData]=useState([])
useEffect(() => {
    fetch('http://localhost:5000/AllClacess')
    .then(res => res.json())
    .then(data =>setClassData(data))
}, [])
   
    return (
        <section>
            <div className="jumbotron jumbotron2-height">

                <MenuBar/>

                <div className="container d-flex align-items-center justify-content-center  text-white intro-Style">
                <h1 className='ourClasses'>OUR CLASSES</h1>
                </div>
            </div>





            <div className="container">
                <div className="row mb-5 mt-5">



                    {
                        classesData.map(info => <ClassesData info={info}></ClassesData>)
                    }


                </div>


            </div>
            <Footer></Footer>
        </section>
    );
};

export default Classes;