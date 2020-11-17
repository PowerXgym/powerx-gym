import React from 'react';
import './HomeHeader.scss';
import {Link} from 'react-router-dom';
import MenuBar from '../Shared/MenuBar';

const HomeHeader = () => {
    return (
        <div className="jumbotron jumbotron-height">
            <MenuBar/>
            <div className="container d-flex align-items-center">
                <div className="row">
                    <div className="col-md-6 text-white intro-Style">
                        <h1> <span className="fitness">THE BEST FITNESS</span> <br/> STUDIO IN TOWN</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis corporis eveniet omnis nemo optio dignissimos. Nisi, laboriosam ratione? Nesciunt doloribus soluta architecto. Amet, iusto eos. Aliquid aliquam...</p>

                        <Link to={"/ourClasses"}><button type="button" className="btn btn-warning mt-5">JOIN US</button></Link>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;