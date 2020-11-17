import React from 'react';
import MenuBar from '../MenuBar';

const PageHeader = ({name}) => {
    return (
        <div className="jumbotron ">
            <MenuBar/>
            <div >
               <h1 align="center" className="p-5 text-light display-4 text-uppercase font-weight-bold mt-5">{name}</h1>
            </div>
        </div>
    );
};

export default PageHeader;