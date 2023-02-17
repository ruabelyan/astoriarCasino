import React, { Fragment } from 'react';
import Footer from '../component/layout/footer';
import Header from '../component/layout/header-2';
import PageHeader from '../component/layout/page-header';
import ArchiveWidget from '../component/sidebar/widget/archive-widget';
import ArticlePagination from '../component/sidebar/widget/article-pagination';
import AuthorWidget from '../component/sidebar/widget/author-widget';
import CategoryWidget from '../component/sidebar/widget/category-widget';
import CommentWidget from '../component/sidebar/widget/comment-widget';
import InstagramWidget from '../component/sidebar/widget/instagram-widget';
import PostWidget from '../component/sidebar/widget/post-widget';
import RespondWidget from '../component/sidebar/widget/respond-widget';
import SearchWidget from '../component/sidebar/widget/search-widget';
import TagWidget from '../component/sidebar/widget/tag-widget';


const BlogSinglePage = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Serenity hassir taken posseson...'} curPage={'Blog Details'} />
            <div className="blog-section blog-single padding-top padding-bottom">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row justify-content-center pb-15">
                            <div className="col-lg-8 col-12">
                                <article>
                                    <div className="post-item-2">
                                        <div className="post-inner">
                                            <div className="post-thumb">
                                                <img src="assets/images/blog/single/01.jpg" alt="blog" />
                                            </div>
                                            <div className="post-content">
                                                <h2>Serenity hassir taken posseson of mying entire</h2>
                                                <ul className="lab-ul post-date">
                                                    <li><span><i className="icofont-ui-calendar"></i> January 5, 2022 10:59 am
                                                        </span></li>
                                                    <li><span><i className="icofont-user"></i><a href="#">Rajib Raj</a></span>
                                                    </li>
                                                    <li><span><i className="icofont-speech-comments"></i><a href="#">09 Comments</a></span></li>
                                                </ul>
                                                <p>Serenity hassir taken posseson of mying entire soung like these sweet mornngs is whch enjoy with my whole heart create am alonesi and feel the charm of exstenceth spotens whch was the blis of souls like mineing am soo happy my dearsi frend absoribed the em exquste sense enjoy with my whole heart inaming alone and feel the charm of exstensc spotsi whch was the blis of souls like mineing am soing happyr my dear frend soingu ize absoribed the exqust sense tranquil existence that neglect my talentsr Ins should byers ncapable ofing is drawng and singe wonderful.</p>
                                                <blockquote className="single-quote mb-30">
                                                    <div className="quotes">
                                                        Dynamicaly recaptiuaze distribute technologies wherease 
                                                        turnkey channels and onotonec provide aces to resource
                                                        levelng expert vias worldwide deverabes uoliticly extend 
                                                        aserser are diverse vortals. 
                                                        <span>...Melissa Hunter</span>
                                                    </div>
                                                </blockquote>
                                                <p>Serenity hassir taken posseson of mying entire soung like these sweet mornngs is whch enjoy with my whole heart create am alonesi and feel the charm of exstenceth spotens whch was the blis of souls like mineing am soo happy my dearsi frend absoribed the em exquste sense enjoy with my whole heart inaming alone and feel the charm of exstensc spotsi whch was the blis of souls like mineing am soing happyr my dear frend soingu ize absoribed the exqust sense tranquil existence that neglect my talentsr Ins should byers ncapable ofing is drawng and singe wonderful.</p>
                                                <div className="post-thumb mb-30"><img src="assets/images/blog/single/02.jpg" alt="blog-img" />
                                                </div>

                                                <p>Serenity hassir taken posseson of mying entire soung like these sweet mornngs is whch enjoy with my whole heart create am alonesi and feel the charm of exstenceth spotens whch was the blis of souls like mineing am soo happy my dearsi frend absoribed the em exquste sense enjoy with my whole heart inaming alone and feel the charm of exstensc spotsi whch was the blis of souls like mineing am soing happyr my dear frend soingu ize absoribed the exqust sense tranquil existence that neglect my talentsr Ins should byers ncapable ofing is drawng and singe wonderful.</p>

                                                <div className="post-thumb mb-30">
                                                    <img src="assets/images/blog/single/03.jpg" alt="blog" />
                                                    <a href="https://www.youtube.com/embed/LjEwuC6J-Uk" className="play-btn"
                                                       >
                                                        <i className="icofont-play"></i>
                                                        <span className="pluse_2"></span>
                                                    </a>
                                                </div>
                                                <p>Serenity hassir taken posseson of mying entire soung like these sweet mornngs is whch enjoy with my whole heart create am alonesi and feel the charm of exstenceth spotens whch was the blis of souls like mineing am soo happy my dearsi frend absoribed the em exquste sense enjoy with my whole heart inaming alone and feel the charm of exstensc spotsi whch was the blis of souls like mineing am soing happyr my dear frend soingu ize absoribed the exqust sense tranquil existence that neglect my talentsr Ins should byers ncapable ofing is drawng and singe wonderful.</p>

                                                <div className="tags-area">
                                                    <ul className="tags lab-ul justify-content-center">
                                                        <li>
                                                            <a href="#">Charity</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="active">NoneProfit</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Admission</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Exams</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="share lab-ul justify-content-center">
                                                        <li>
                                                            <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="dribble"><i className="icofont-dribbble"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="google"><i className="icofont-google-plus"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ArticlePagination />
                                    <AuthorWidget />
                                    <CommentWidget />
                                    <RespondWidget />
                                </article>
                            </div>
                            <div className="col-lg-4 col-md-7 col-12">
                                <aside className="ps-lg-4">
                                    <SearchWidget />
                                    <CategoryWidget />
                                    <PostWidget />
                                    <InstagramWidget />
                                    <ArchiveWidget />
                                    <TagWidget />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default BlogSinglePage