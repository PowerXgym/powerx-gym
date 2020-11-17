import React from 'react';
import { Link } from 'react-router-dom';
import './ClassesData.scss';
const ClassesData = (props) => {

    const {name,img} = props.info;

    return (
       

        <div className="col-md-4 mt-5 mb-5">
           
                <img className="classesImage" src={img} style={{ width: "300px", height: "285px" }} />

                <Link to={'/class/'+name}>

                <button className='buttonClasses'>{name} <span style={{marginLeft:'5%'}}>🡺</span></button>
                
                </Link>

            
        </div>
       
    );
};

export default ClassesData;