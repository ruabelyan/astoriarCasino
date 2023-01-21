import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header-2";
import PageHeader from "../component/layout/page-header";


const title = "Choose Our Pricing Plan";

const pricingList = [
    {
        title: 'Basic Package',
        price: '$29.00',
        valid: '$29.00 Now And Then $90.00 Per Month.',
        btnText: 'Purchase Now',
        features: [
            {
                iconName: 'icofont-check-circled',
                text: 'View members directory',
            },
            {
                iconName: 'icofont-check-circled',
                text: 'View members profile',
            },
            {
                iconName: 'icofont-check-circled',
                text: 'Access group directory',
            },
            {
                iconName: 'icofont-check-circled',
                text: 'Access to groups',
            },
            {
                iconName: 'icofont-close-circled',
                text: 'View site activity',
            },
            {
                iconName: 'icofont-close-circled',
                text: 'Send Private messages',
            },
            {
                iconName: 'icofont-close-circled',
                text: 'Add media to your profile',
            },
        ],
    },
    {
        title: 'Silver Package',
        price: '$29.00',
        valid: '$290.00 Now And Then $390.00 Per Month.',
        btnText: 'Purchase Now',
        features: [
            {
                iconName: 'icofont-check-circled',
                text: 'View members directory',
            },
            {
                iconName: 'icofont-check-circled',
                text: 'View members profile',
            },
            {
                iconName: 'icofont-check-circled',
                text: 'Access group directory',
            },
            {
                iconName: 'icofont-check-circled',
                text: 'Access to groups',
            },
            {
                iconName: 'icofont-check-circled',
                text: 'View site activity',
            },
            {
                iconName: 'icofont-close-circled',
                text: 'Send Private messages',
            },
            {
                iconName: 'icofont-close-circled',
                text: 'Add media to your profile',
            },
        ],
    },
    {
        title: 'Gold Package',
        price: '$390.00',
        valid: '$390.00 Now And Then $490.00 Per Month.',
        btnText: 'Purchase Now',
        features: [
            {
                iconName: 'icofont-check-circled',
                text: 'View members directory',
            },
            {
                iconName: 'icofont-check-circled',
                text: 'View members profile',
            },
            {
                iconName: 'icofont-check-circled',
                text: 'Access group directory',
            },
            {
                iconName: 'icofont-check-circled',
                text: 'Access to groups',
            },
            {
                iconName: 'icofont-check-circled',
                text: 'View site activity',
            },
            {
                iconName: 'icofont-check-circled',
                text: 'Send Private messages',
            },
            {
                iconName: 'icofont-check-circled',
                text: 'Add media to your profile',
            },
        ],
    },
]

const PricingPlan = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Membership Level'} curPage={'Pricing Plan'} />
            <section className="pricing-section padding-top padding-bottom">
                <div className="container">
                    <div className="section-header">
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper mt-4">
                        <div className="pricing-plan-wrapper">
                            <div className="row g-4 justify-content-center">
                                {pricingList.map((val, i) => (
                                    <div className="col-lg-4 col-sm-6" key={i}>
                                        <div className="price-item">
                                            <div className="price-item-inner">
                                                <div className="price-top">
                                                    <h6>{val.title}</h6>
                                                    <h2>{val.price}</h2>
                                                    <p>{val.valid}</p>
                                                </div>
                                                <div className="price-bottom">
                                                    <ul>
                                                        {val.features.map((val, i) => (
                                                            <li key={i}>
                                                                <i className={val.iconName}></i>
                                                                <p>{val.text}</p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <Link to="/login" className="default-button"><span>{val.btnText}</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    );
}

export default PricingPlan;