import { Component } from "react";
import CountUp from 'react-countup';

const title = "TODAY YOU CAN WIN UPTO";


const Counter = () => {
    return (
        <section className="counter">
            <div className="container">
                <div className="counter__area">
                    <div className="row align-items-center">
                        <div className="col-lg-5 counter__left">
                            <div>
                                <h2>{title}</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 text-center counter__right">
                            <ul className="d-flex flex-wrap">
                                <li className="counter-text border-count">
                                    <h3 className="counter__number">$<CountUp end={2251259} /></h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Counter;