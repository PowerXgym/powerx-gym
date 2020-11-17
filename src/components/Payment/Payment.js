import React from 'react';
import Footer from '../Footer/Footer';
import papalImg from '../../Images/Bitmap.png'
import card1 from '../../Images/credit-cards_amex.png'
import card2 from '../../Images/credit-cards_mastercard.png'
import card3 from '../../Images/credit-cards_visa.png'
import {CardElement} from '@stripe/react-stripe-js';
import CardPayment from './CardPayment';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PageHeader from '../Shared/PageHeader/PageHeader';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');

const Payment = () => {
    return (
        <div>
            <PageHeader name="Your gym Membership" />
            <div className=" container mt-5 pt-5">
                <div className="  row allSteps mb-5">
                    <div align="right" className="col-md-4 p-0">
                        <span className="activestep">1</span>
                    </div>
                    <div className="col-md-4 centerstep"></div>
                    <div align="center" className="col-md-4 p-0 "><span className="activestep ">2</span></div>
                    <div align="left" className="col-md-4 p-0"><span className="singleStap">3</span></div>
                </div>


                <div className="paypalPayment py-4 px-3 border my-3">
                    <div className="row">
                        <div className="col-md-8">
                            <fieldset class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input mt-2" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                                    <label class="form-check-label font-weight-bold" for="gridRadios1">
                                        Cradit Card
                            </label>
                                </div>
                            </fieldset>

                            <p className='mt-0'><small>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</small></p>
                            <Elements stripe={stripePromise}>
                                <CardElement
                                    options={{
                                        style: {
                                            base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                                '::placeholder': {
                                                    color: '#aab7c4',
                                                },
                                            },
                                            invalid: {
                                                color: '#9e2146',
                                            },
                                        },
                                    }}
                                />
                            </Elements>
                        </div>

                        <div className='col-md-4' align="right">
                            <img className='m-1' src={card1} alt="" />
                            <img className='m-1' src={card2} alt="" />
                            <img className='m-1' src={card3} alt="" />
                        </div>
                    </div>
                </div>
                <div className="paypalPayment py-4 px-3 border my-3">
                    <div className="row">
                        <div className="col-md-8">
                            <fieldset class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input mt-2" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                                    <label class="form-check-label font-weight-bold" for="gridRadios1">
                                        Paypal
                            </label>
                                </div>
                            </fieldset>

                            <p className='mt-0'><small>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</small></p>

                        </div>

                        <div className='col-md-4' align="right"><img src={papalImg} alt="" /></div>
                    </div>
                </div>




            </div>
            <Footer />
        </div>
    );
};

export default Payment;