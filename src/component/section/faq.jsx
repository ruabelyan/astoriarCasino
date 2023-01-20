

const title = "FREQUENTLY ASK QUESTION";
const desc = "At Modeltheme we show only the best websites and portfolios built completely with passion simplicity and creativity !";


const Faq = () => {
    
    return (
        <section className="faq padding-top padding-bottom">
            <div className="container">
                <div className="row justify-content-center flex-row-reverse">
                    <div className="col-lg-6 col-12">
                        <div className="faq-right-part">
                            <div className="faq-thumb">
                                <img src="assets/images/faq/01.png" alt="faq-thumb" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="faq-left-part">
                            <div className="section-header text-start">
                                <h2>{title}</h2>
                                <p>{desc}</p>
                            </div>
                            <div className="section-wrapper">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="accOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collOne" aria-expanded="true" aria-controls="collOne">
                                                <div className="accordion-list">
                                                    <div className="left">
                                                        <div className="icon"></div>
                                                    </div>
                                                    <div className="right">
                                                        <h6>01. How do I create Casine Account ?</h6>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div id="collOne" className="accordion-collapse collapse show" aria-labelledby="accOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="accordion-answer">
                                                    <p>Competen diseminate mpactful proceses with client centered Holistic maximize multimedia based supply chains for resourc channels e-leveling action items.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="accTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collTwo" aria-expanded="true" aria-controls="collTwo">
                                                <div className="accordion-list">
                                                    <div className="left">
                                                        <div className="icon"></div>
                                                    </div>
                                                    <div className="right">
                                                        <h6>02. Where can I Redeem My Earnings ?</h6>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div id="collTwo" className="accordion-collapse collapse" aria-labelledby="accTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="accordion-answer">
                                                    <p>Competen diseminate mpactful proceses with client centered Holistic maximize multimedia based supply chains for resourc channels e-leveling action items.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="accThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collThree" aria-expanded="true" aria-controls="collThree">
                                                <div className="accordion-list">
                                                    <div className="left">
                                                        <div className="icon"></div>
                                                    </div>
                                                    <div className="right">
                                                        <h6>03. How do I Start Playing ?</h6>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div id="collThree" className="accordion-collapse collapse" aria-labelledby="accThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="accordion-answer">
                                                    <p>Competen diseminate mpactful proceses with client centered Holistic maximize multimedia based supply chains for resourc channels e-leveling action items.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="accFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collFour" aria-expanded="true" aria-controls="collFour">
                                                <div className="accordion-list">
                                                    <div className="left">
                                                        <div className="icon"></div>
                                                    </div>
                                                    <div className="right">
                                                        <h6>04. How do I Move Up a Level ?</h6>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div id="collFour" className="accordion-collapse collapse" aria-labelledby="accFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="accordion-answer">
                                                    <p>Competen diseminate mpactful proceses with client centered Holistic maximize multimedia based supply chains for resourc channels e-leveling action items.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Faq;