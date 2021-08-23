import Video from "../elements/video"

const TeamArea = ({ data }) => {
  return (
    <section >
     

     <div className="team-area section-padding team-three">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title title-three text-center">
                        <div className="title-border">
                            <h1>BRAND <span>FOUNDERS</span></h1>
                        </div>
                        <p>
                            The visionaries behind MTD Paksitan; The Conceptual Architects giving life to their Dreams
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <div className="single-member">
                        <div className="team-image">
                            <a href="http://localhost:8081/php/#"><img src="images/1.jpg" alt="" /></a>
                            <div className="member-text effect-bottom">
                                <h4><a href="http://localhost:8081/php/#">Maria B. | <span>Hiking Guide</span></a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text</p>
                                <div className="member-link">
                                    <a href="http://localhost:8081/php/#"><i className="fa fa-facebook"></i></a>
                                    <a href="http://localhost:8081/php/#"><i className="fa fa-twitter"></i></a>
                                    <a href="http://localhost:8081/php/#"><i className="fa fa-google-plus"></i></a>
                                    <a href="http://localhost:8081/php/#"><i className="fa fa-linkedin"></i></a>
                                    <a href="http://localhost:8081/php/#"><i className="fa fa-rss"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="single-member" style={{border:'none'}}>
                        <div className="team-image">
                            <img src="images/founders-center.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4 hidden-sm">
                    <div className="single-member">
                        <div className="team-image">
                            <a href="http://localhost:8081/php/#"><img src="images/2.jpg" alt="" /></a>
                            <div className="member-text effect-bottom">
                                <h4><a href="http://localhost:8081/php/#">Matt Jason | <span>Guide</span></a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text</p>
                                <div className="member-link">
                                    <a href="http://localhost:8081/php/#"><i className="fa fa-facebook"></i></a>
                                    <a href="http://localhost:8081/php/#"><i className="fa fa-twitter"></i></a>
                                    <a href="http://localhost:8081/php/#"><i className="fa fa-google-plus"></i></a>
                                    <a href="http://localhost:8081/php/#"><i className="fa fa-linkedin"></i></a>
                                    <a href="http://localhost:8081/php/#"><i className="fa fa-rss"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </section>
  )
}

export default TeamArea
