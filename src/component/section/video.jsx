
const title = "check our live streaming";

const videoList = [
    {
        imgUrl: 'assets/images/video/01.jpg',
        title: '2022 LVP SuperLiga Orange Summer',
        btnText: 'watch now',
        videiLink: 'https://www.youtube.com/embed/XGSy3_Czz8k',
    },
    {
        imgUrl: 'assets/images/video/02.jpg',
        title: '2022 LVP SuperLiga Orange Summer',
        btnText: 'watch now',
        videiLink: 'https://www.youtube.com/embed/XGSy3_Czz8k',
    },
]

const videoListTwo = [
    {
        imgUrl: 'assets/images/video/03.jpg',
        title: 'IEM Season XVI – Summer',
        btnText: 'watch now',
        videiLink: 'https://www.youtube.com/embed/XGSy3_Czz8k',
    },
    {
        imgUrl: 'assets/images/video/04.jpg',
        title: 'IEM Season XVI – Summer',
        btnText: 'watch now',
        videiLink: 'https://www.youtube.com/embed/XGSy3_Czz8k',
    },
    {
        imgUrl: 'assets/images/video/05.jpg',
        title: 'IEM Season XVI – Summer',
        btnText: 'watch now',
        videiLink: 'https://www.youtube.com/embed/XGSy3_Czz8k',
    },
]


const Video = () => {
    return (
        <div className="video-section padding-top padding-bottom bg-attachment" style={{backgroundImage: "url(/assets/images/video/bg1.jpg)"}}>
            <div className="container">
                <div className="section-header">
                    <h2>{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="video-top">
                                <div className="row g-4 justify-content-center">
                                    {videoList.map((val, i) => (
                                        <div className="col-lg-6 col-12" key={i}>
                                            <div className="video-item">
                                                <div className="video-inner position-relative">
                                                    <div className="video-thumb position-relative video-overlay">
                                                        <img src={`${val.imgUrl}`} alt={val.title} className="w-100" />
                                                        <div className="video-icon">
                                                            <a href={val.videiLink}>
                                                                <i className="icofont-play-alt-1"></i>
                                                                <span className="pluse"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="video-content abs-video-content">
                                                        <a href={val.videiLink}>{val.btnText} <i className="icofont-play-alt-1"></i></a>
                                                        <h3>{val.title}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="video-bottom">
                                <div className="row g-4 justify-content-center">
                                    {videoListTwo.map((val, i) => (
                                        <div className="col-xl-4 col-md-6 col-12" key={i}>
                                            <div className="video-item">
                                                <div className="video-inner position-relative">
                                                    <div className="video-thumb position-relative video-overlay">
                                                        <img src={`${val.imgUrl}`} alt={val.title} className="w-100" />
                                                        <div className="video-icon">
                                                            <a href={val.videiLink}>
                                                                <i className="icofont-play-alt-1"></i>
                                                                <span className="pluse"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="video-content abs-video-content">
                                                        <a href={val.videiLink}>{val.btnText} <i className="icofont-play-alt-1"></i></a>
                                                        <h4>{val.title}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;