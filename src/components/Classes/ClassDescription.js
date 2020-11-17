import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ClassSchedule from './ClassSchedule';
import checkmark from '../../Images/checkmark.png';
import './ClassDescription.scss';
import Footer from '../Footer/Footer';
import { useEffect } from 'react/cjs/react.development';
import MenuBar from '../Shared/MenuBar';

const ClassDescription = () => {

    const [classesData,setClassData]=useState([])
useEffect(() => {
    fetch('https://obscure-wave-43497.herokuapp.com/AllClacess')
    .then(res => res.json())
    .then(data =>setClassData(data))
}, [])



    const { className } = useParams()
    const classDescription = classesData.find(cd => cd.name === className)
    return (
        <div>
            {
                classDescription!==undefined &&  <section>
            <div className="jumbotron jumbotron2-height">

                <MenuBar/>

                <div className="container d-flex align-items-center justify-content-center  text-white intro-Style">
                    <h1 className='ourClasses'>{className}</h1>
                </div>
            </div>



            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img style={{ width: '80%', height: '50%' }} src={classDescription.img}></img>

                        <p className='mt-3'>
                            {classDescription.description}
                        </p>
                        <div className='row'>
                            <div className='col-md-9'>
                                <p><img className='checkMark' src={checkmark}></img><b>Having slimmer shapely thigh</b></p>


                                <p><img className='checkMark' src={checkmark}></img><b>Getting Stronger Body</b></p>

                                <p><img className='checkMark' src={checkmark}></img><b>Increased Metabolism</b></p>
                                <p><img className='checkMark' src={checkmark}></img><b>Increase Muscular Indurance</b></p>
                                <p><img className='checkMark' src={checkmark}></img><b>Maximum Results in less time</b></p>
                                <p style={{marginBottom:'10em'}}><img className='checkMark' src={checkmark}></img><b>Firm hips and tummy</b></p>
                            </div>
                            <div className='col-md-3'></div>


                        </div>



                    </div>

                    <div className='col-md-6 text-center mt-4'>
                        <h2 className="mb-4"><span style={{ color: '#FCD842' }}>CLASS</span> SCHEDULE</h2>
                        <div>
                            <ClassSchedule></ClassSchedule>

                        </div>

                        <div className="joinButton">
                            <Link to="/pricing">
                                <button className="btn btn-warning btn-lg">JOIN US</button>
                            </Link>
                        </div>

                    </div>
                </div>


            </div>

            <div className="description-footer">
                <Footer></Footer>
            </div>



        </section>
            }
        </div>
    );
};

export default ClassDescription;