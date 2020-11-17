import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import PageHeader from '../Shared/PageHeader/PageHeader';
import './MembershipForm.css'

const MembershipForm = () => {
    return (
        <div>
            <PageHeader name="Your gym Membership" />
            <div className=" container mt-5 pt-5">
                <div className="  row allSteps">
                    <div align="right" className="col-md-4 p-0"><span className="activestep">1</span></div>
                    <div className="col-md-4 centerstep"></div>
                    <div align="center" className="col-md-4 p-0 "><span className="singleStap ">2</span></div>
                    <div align="left" className="col-md-4 p-0"><span className="singleStap">3</span></div>
                </div>
                <form>
                    <div class="form-row mt-5">
                        <div class="form-group col-md-6">
                            <label for="inputFirstName">First Name</label>
                            <input type="text" class="form-control" id="inputFirstName" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputLastName">Last Name</label>
                            <input type="text" class="form-control" id="inputLastName" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputEmail">Email</label>
                            <input type="email" class="form-control" id="inputEmail" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputNumber">Number</label>
                            <input type="number" class="form-control" id="inputNumber" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputDateOfBirth">Date of Birth</label>
                            <div className="row">
                                <div className="col-md-4">
                                    <select id="inputState" class="form-control">
                                        <option selected>Date</option>
                                        <option >1</option>
                                        <option >2</option>
                                        <option >3</option>
                                        <option >4</option>
                                        <option >5</option>
                                        <option >6</option>
                                        <option >7</option>
                                        <option >8</option>
                                        <option >9</option>
                                        <option >10</option>
                                        <option >11</option>
                                        <option >12</option>
                                        <option >13</option>
                                        <option >14</option>
                                        <option >15</option>
                                        <option >16</option>
                                        <option >17</option>
                                        <option >18</option>
                                        <option >19</option>
                                        <option >20</option>
                                        <option >21</option>
                                        <option >22</option>
                                        <option >23</option>
                                        <option >24</option>
                                        <option >25</option>
                                        <option >26</option>
                                        <option >27</option>
                                        <option >28</option>
                                        <option >29</option>
                                        <option >30</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <select id="inputState" class="form-control">
                                        <option selected>Month</option>
                                        <option >January</option>
                                        <option >February</option>
                                        <option >March</option>
                                        <option >April</option>
                                        <option >May</option>
                                        <option >June</option>
                                        <option >July</option>
                                        <option >August</option>
                                        <option >September</option>
                                        <option >October</option>
                                        <option >November</option>
                                        <option >Descember</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <select id="inputState" class="form-control">
                                        <option selected>Year</option>
                                        <option >2020</option>
                                        <option >2019</option>
                                        <option >2018</option>
                                        <option >2017</option>
                                        <option >2016</option>
                                        <option >2015</option>
                                        <option >2014</option>
                                        <option >2013</option>
                                        <option >2012</option>
                                        <option >2011</option>
                                        <option >2010</option>
                                        <option >2009</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputGender">Gender</label>
                            <select id="inputState" class="form-control">
                                <option selected>Male</option>
                                <option >Female</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputLastName">Adress Line</label>
                            <input type="text" class="form-control" id="inputLastName" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputLastName">Country/Region</label>
                            <input type="text" class="form-control" id="inputLastName" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputLastName">City</label>
                            <input type="text" class="form-control" id="inputLastName" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputLastName">Post code</label>
                            <input type="number" class="form-control" id="inputLastName" />
                        </div>

                    </div>
                    <div align="right">
                        <Link to="/payment"><button type="button" class="btn bg-warning btn-lg font-weight-bold px-5 mt-4" >Next</button></Link>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default MembershipForm;