import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderTwo = () => {
    const [menuToggle, setMenuToggle] = useState(false);
	const [headerFiexd, setHeaderFiexd] = useState(false);

	window.addEventListener("scroll", () => {
		if (window.scrollY > 200) {
			setHeaderFiexd(true);
		} else {
			setHeaderFiexd(false);
		}
	});


    return (
        <header className={`header-section style2 ${headerFiexd ? "header-fixed fadeInUp" : ""}`}>
            <div className="container">
                <div className="header-holder d-flex flex-wrap justify-content-between align-items-center">
                    <div className="brand-logo d-none d-lg-inline-block py-2">
                        <div className="logo">
                            <Link to="/">
                                <img src="assets/images/logo/logo.png" alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="header-menu-part">
                        <div className="header-bottom">
                            <div className="header-wrapper justify-content-lg-end">
                                <div className="mobile-logo d-lg-none">
                                    <Link to="/"><img src="assets/images/logo/logo.png" alt="logo" /></Link>
                                </div>
                                <div className="menu-area">
                                    <ul className={`menu ${menuToggle ? "active" : ""}`}>
                                        <li className="menu-item-has-children">
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                                            <ul className="submenu dropdown-menu">
                                                <li><NavLink to="/">Home  Page One</NavLink></li>
                                                <li><NavLink to="/index-2">Home Page Two</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Features</a>
                                            <ul className="submenu dropdown-menu">
                                                <li><NavLink to="/about">About</NavLink></li>
                                                <li><NavLink to="/jaqpot">Casino Jackpot</NavLink></li>
                                                <li><NavLink to="/game-list">game list 1</NavLink></li>
                                                <li><NavLink to="/game-list2">game list 2</NavLink></li>
                                                <li><NavLink to="/tournament">Tournament</NavLink></li>
                                                <li><NavLink to="/partners">partners</NavLink></li>
                                                <li><NavLink to="/pricing-plan">Pricing Plan</NavLink></li>
                                                <li><NavLink to="/login">login</NavLink></li>
                                                <li><NavLink to="/signup">signup</NavLink></li>
                                                <li><NavLink to="/forpass">Forget Password</NavLink></li>
                                                <li><NavLink to="/404">404 Page</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                                            <ul className="submenu dropdown-menu">
                                                <li><NavLink to="/blog">Blog</NavLink></li>
                                                <li><NavLink to="/blog-2">Blog 2</NavLink></li>
                                                <li><NavLink to="/blog-single">Blog Single</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
                                            <ul className="submenu dropdown-menu">
                                                <li><NavLink to="/shop">shop</NavLink></li>
                                                <li><NavLink to="/shop-single">Shop Details</NavLink></li>
                                                <li><NavLink to="/cart-page">Cart Page</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><NavLink to="/contact">Contact</NavLink></li>
                                    </ul>
                                    <Link to="/login" className="login"><i className="icofont-user"></i> <span>LOG IN</span> </Link>
                                    <Link to="/signup" className="signup"><i className="icofont-users"></i> <span>SIGN UP</span></Link>

                                    <div className={`header-bar d-lg-none ${menuToggle ? "active" : "" }`} onClick={() => setMenuToggle(!menuToggle)}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default HeaderTwo;