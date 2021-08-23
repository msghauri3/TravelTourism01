import Video from "../elements/video"

const MySection = ({ data }) => {
  return (
    <section>
    

    <div className="best-sell-area section-padding best-sell-three">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title title-three text-center">
                        <div className="title-border">
                            <h1>MTD's <span>BEST PICKS</span></h1>
                        </div>
                        <p>Not sure what you’re looking for and need a little inspiration? We can help. Check out our
                            handpicked <br />lists of topical trips you can take right now.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="sell-text-container">
                        <div className="title-container">
                            <h3>HUNZA TOUR</h3>
                            <div className="best-sell-link">
                                <a href="http://localhost:8081/php/#"><i className="fa fa-facebook"></i></a>
                                <a href="http://localhost:8081/php/#"><i className="fa fa-twitter"></i></a>
                                <a href="http://localhost:8081/php/#"><i className="fa fa-google-plus"></i></a>
                                <a href="http://localhost:8081/php/#"><i className="fa fa-linkedin"></i></a>
                                <a href="http://localhost:8081/php/#"><i className="fa fa-rss"></i></a>
                            </div>
                        </div>
                        <p>Get closer to nature. From the jungles of India to the African bush, our small group tours
                            take you to the heart of nature. From elephants silhouetted against an Africa sunset to
                            orangutans swinging in the treetops.....</p>
                        <a href="http://localhost:8081/php/#" className="button-one button-blue">VIew trip</a>
                    </div>
                    <div className="row">
                        <div className="best-sell-slider carousel-style-one owl-carousel owl-theme" style={{opacity: 1, display: 'block'}}>
                            <div className="owl-wrapper-outer"><div className="owl-wrapper" style={{width: '2400px', left: '0px', display: 'block', transition: 'all 0ms ease 0s', transform: 'translate3d(0px, 0px, 0px)'}}><div className="owl-item" style={{width: '300px'}}><div className="col-md-3">
                                <div className="hover-effect">
                                    <div className="box-hover">
                                        <a href="http://localhost:8081/php/#">
                                            <img src="images/11.jpg" alt="" />
                                            <span>HUNZA TOUR</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="hover-effect">
                                    <div className="box-hover">
                                        <a href="http://localhost:8081/php/#" className="no-margin">
                                            <img src="images/13.jpg" alt="" />
                                            <span>SWAT TOUR</span>
                                        </a>
                                    </div>
                                </div>
                            </div></div><div className="owl-item" style={{width: '300px'}}><div className="col-md-3">
                                <div className="hover-effect">
                                    <div className="box-hover">
                                        <a href="http://localhost:8081/php/#">
                                            <img src="images/12.jpg" alt="" />
                                            <span>BAHAWALPUR TOUR</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="hover-effect">
                                    <div className="box-hover">
                                        <a href="http://localhost:8081/php/#" className="no-margin">
                                            <img src="images/14.jpg" alt="" />
                                            <span>KARTARPUR TOUR</span>
                                        </a>
                                    </div>
                                </div>
                            </div></div><div className="owl-item" style={{width: '300px'}}><div className="col-md-3">
                                <div className="hover-effect">
                                    <div className="box-hover">
                                        <a href="http://localhost:8081/php/#">
                                            <img src="images/13.jpg" alt="" />
                                            <span>Beach Party</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="hover-effect">
                                    <div className="box-hover">
                                        <a href="http://localhost:8081/php/#" className="no-margin">
                                            <img src="images/11.jpg" alt="" />
                                            <span>Sightseeing Tours</span>
                                        </a>
                                    </div>
                                </div>
                            </div></div><div className="owl-item" style={{width: '300px'}}><div className="col-md-3">
                                <div className="hover-effect">
                                    <div className="box-hover">
                                        <a href="http://localhost:8081/php/#">
                                            <img src="images/14.jpg" alt="" />
                                            <span>Family Fun</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="hover-effect">
                                    <div className="box-hover">
                                        <a href="http://localhost:8081/php/#" className="no-margin">
                                            <img src="images/12.jpg" alt="" />
                                            <span>Private Charters</span>
                                        </a>
                                    </div>
                                </div>
                            </div></div></div></div>
                            
                            
                            
                        <div className="owl-controls"><div className="owl-buttons"><div className="owl-prev"><i className="fa fa-angle-left"></i></div><div className="owl-next"><i className="fa fa-angle-right"></i></div></div></div></div>
                    </div>
                </div>
                <div className="col-md-6 hidden-sm">
                    <img src="images/15.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
	



    </section>
  )
}

export default MySection
