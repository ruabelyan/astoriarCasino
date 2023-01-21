import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header-2";
import PageHeader from "../component/layout/page-header";

const title = "Forget Password";


const socialList = [
    {
        imgUrl: 'assets/images/match/social-1.png',
        imgAlt: 'social',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/match/social-2.png',
        imgAlt: 'social',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/match/social-3.png',
        imgAlt: 'social',
        siteLink: '#',
    },
]


const ForPass = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Forget Password'} curPage={'forget password'} />
            <div className="login-section padding-top padding-bottom">
                <div className=" container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className="account-form text-start">
                            <div className="form-group">
                                <label>Email:</label>
                                <input type="email" name="Enter Your Email" required />
                            </div>
                            <div className="form-group">
                                <button className="d-block default-button"><span>Submit Now</span></button>
                            </div>
                        </form>
                        <div className="account-bottom">
                            <span className="d-block cate pt-10">Don’t Have any Account? <Link to="/login"> Login</Link></span>
                            <span className="or"><span>or</span></span>
                            <h5 className="subtitle">Login With Social Media</h5>
                            <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center mt-4">
                                {socialList.map((val, i) => (
                                    <li key={i}><a href={val.siteLink}><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default ForPass;