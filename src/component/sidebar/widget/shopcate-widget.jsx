import React from 'react'

const title = "All Categories";

const ShopcateWidget = () => {
    return (
        <div className="widget shop-widget">
            <div className="widget-header">
                <h5>{title}</h5>
            </div>
            <div className="widget-wrapper">
                <ul className="shop-menu lab-ul">
                    <li className="catmenu-item-has-children">
                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Code Optimization</a>
                        <ul className="shop-submenu lab-ul dropdown-menu">
                            <li><a href="#">Seo</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Email Marketing</a></li>
                            <li><a href="#">Seo Support</a></li>
                        </ul>
                    </li>
                    <li className="catmenu-item-has-children">
                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Monitoring Ranking</a>
                        <ul className="shop-submenu lab-ul dropdown-menu">
                            <li><a href="#">All Products</a></li>
                            <li><a href="#">Seo</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Email Marketing</a></li>
                            <li><a href="#">Seo Support</a></li>
                        </ul>
                    </li>
                    <li className="catmenu-item-has-children">
                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Target Strategy</a>
                        <ul className="shop-submenu lab-ul dropdown-menu">
                            <li><a href="#">All Products</a></li>
                            <li><a href="#">Seo</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Email Marketing</a></li>
                            <li><a href="#">Seo Support</a></li>
                        </ul>
                    </li>
                    <li className="catmenu-item-has-children">
                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Nap Syndication</a>
                        <ul className="shop-submenu lab-ul dropdown-menu">
                            <li><a href="#">All Products</a></li>
                            <li><a href="#">Seo</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Email Marketing</a></li>
                            <li><a href="#">Seo Support</a></li>
                        </ul>
                    </li>
                    <li className="catmenu-item-has-children">
                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SEO Support</a>
                        <ul className="shop-submenu lab-ul dropdown-menu">
                            <li><a href="#">All Products</a></li>
                            <li><a href="#">Seo</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Email Marketing</a></li>
                            <li><a href="#">Seo Support</a></li>
                        </ul>
                    </li>
                    <li className="catmenu-item-has-children">
                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Email Marketing</a>
                        <ul className="shop-submenu lab-ul dropdown-menu">
                            <li><a href="#">All Products</a></li>
                            <li><a href="#">Seo</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Email Marketing</a></li>
                            <li><a href="#">Seo Support</a></li>
                        </ul>
                    </li>
                    <li className="catmenu-item-has-children">
                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Engine Marketing</a>
                        <ul className="shop-submenu lab-ul dropdown-menu">
                            <li><a href="#">All Products</a></li>
                            <li><a href="#">Seo</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Email Marketing</a></li>
                            <li><a href="#">Seo Support</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ShopcateWidget