import { Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/page-header";
import Jaqport from "../component/section/jaqport";

const JaqpotPage = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Casino Jackpots'} curPage={'Casino Jackpots'} />
            <Jaqport />
            <Footer />
        </Fragment>
    );
}

export default JaqpotPage;