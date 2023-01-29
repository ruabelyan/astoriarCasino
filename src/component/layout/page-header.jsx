import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const PageHeader = ({title, curPage}) => {
  const { t, i18n } = useTranslation();

    return (
        <section className="pageheader-section" style={{backgroundImage: "url(/assets/images/pageheader/bg.jpg)"}}>
            <div className="container">
                <div className="section-wrapper text-center text-uppercase">
                    <h2 className="pageheader-title">{title}</h2>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><Link to="/">{t('home')}</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{curPage}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default PageHeader;