import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const PageHeader = ({title, curPage}) => {
  const { t, i18n } = useTranslation();

    return (
        <section className="pageheader-section" style={{backgroundImage: "url('https://images.unsplash.com/photo-1515687652280-bf0bb698562a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')"}}>
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