import { Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header-2";
import PageHeader from "../component/layout/page-header";
import Tournament from "../component/section/tournament";





const TournamentPage = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader title={'our Tournament'} curPage={'Tournament'} />
            <Tournament />
            <Footer />
        </Fragment>
    );
}

export default TournamentPage;