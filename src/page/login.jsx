import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/page-header";


const title = "Login for gaming";


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


const LogIn = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Login for gaming'} curPage={'Login'} />
            <div className="login-section padding-top padding-bottom">
                <div className=" container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className="account-form text-start">
                            <div className="form-group">
                                <label>User Name:</label>
                                <input type="text" name="username" required />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" name="password" required />
                            </div>
                            <div className="form-group">
                                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                    <div className="checkgroup">
                                        <input type="checkbox" name="remember" id="remember" />
                                        <label htmlFor="remember">Remember Me</label>
                                    </div>
                                    <Link to="/forpass">Forget Password?</Link>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="d-block default-button"><span>Submit Now</span></button>
                            </div>
                        </form>
                        <div className="account-bottom">
                            <span className="d-block cate pt-10">Don’t Have any Account? <Link to="/signup"> Sign Up</Link></span>
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

export default LogIn;