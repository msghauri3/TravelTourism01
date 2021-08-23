import Video from "../elements/video"

const MySection = ({ data }) => {
  return (
    <section>
    

    <div className="portfolio-area portfolio-three">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="section-title title-three section_before_search_loc__ text-center">
					<div className="title-border">
						<h1>{data.title} &amp; <span></span></h1>
					</div>
					<p>
            {data.detail}
          <br /> </p>
				</div>
			</div>
		</div>
		<form action="http://localhost:8081/php/#" method="post" id="search_loc__" className="" _lpchecked="1">
			<div className="search_loc__-content">
				<div className="row">
					<div className="col-lg-9 col-md-8 col-sm-9 col-xs-12">
						<input type="text" name="loc" placeholder="What Do You Want To Explore?" />
					</div>
					<div className="col-lg-3 col-md-4 col-sm-3 col-xs-12">
						<button type="submit" className="button button-blue"><span>Explore</span></button>
					</div>
				</div>
			</div>
		</form>

		<div className="row">
			<div className="col-md-3 col-sm-4">
				<div className="single-portfolio">
					<a href="http://localhost:8081/php/#"><img src="images/17.jpg" alt="" /></a>
					<div className="portfolio-text effect-bottom">
						<h4><a href="http://localhost:8081/php/#">Beach Tours</a></h4>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<div className="portfolio-link">
							<a href="http://localhost:8081/php/#"><i className="fa fa-facebook"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-twitter"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-google-plus"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-linkedin"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-rss"></i></a>
						</div>
					</div>
				</div>
				<div className="single-portfolio">
					<a href="http://localhost:8081/php/#"><img src="images/18.jpg" alt="" /></a>
					<div className="portfolio-text effect-bottom">
						<h4><a href="http://localhost:8081/php/#">beach party</a></h4>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<div className="portfolio-link">
							<a href="http://localhost:8081/php/#"><i className="fa fa-facebook"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-twitter"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-google-plus"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-linkedin"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-rss"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-3 col-sm-4">
				<div className="single-portfolio">
					<a href="http://localhost:8081/php/#">
                        <img src="images/19.jpg" alt="" /></a>
					<div className="portfolio-text">
						<h4><a href="http://localhost:8081/php/#">Sightsing Tours</a></h4>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<div className="portfolio-link">
							<a href="http://localhost:8081/php/#"><i className="fa fa-facebook"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-twitter"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-google-plus"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-linkedin"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-rss"></i></a>
						</div>
					</div>
				</div>
				<div className="single-portfolio">
					<a href="http://localhost:8081/php/#">
                        <img src="images/20.jpg" alt="" /></a>
					<div className="portfolio-text">
						<h4><a href="http://localhost:8081/php/#">Family Fun</a></h4>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<div className="portfolio-link">
							<a href="http://localhost:8081/php/#"><i className="fa fa-facebook"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-twitter"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-google-plus"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-linkedin"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-rss"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-3 col-sm-4">
				<div className="single-portfolio">
					<a href="http://localhost:8081/php/#">
                        <img src="images/21.jpg" alt="" /></a>
					<div className="portfolio-text effect-bottom">
						<h4><a href="http://localhost:8081/php/#">Night Cruises</a></h4>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<div className="portfolio-link">
							<a href="http://localhost:8081/php/#"><i className="fa fa-facebook"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-twitter"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-google-plus"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-linkedin"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-rss"></i></a>
						</div>
					</div>
				</div>
				<div className="single-portfolio">
					<a href="http://localhost:8081/php/#">
                        <img src="images/22.jpg" alt="" /></a>
					<div className="portfolio-text effect-bottom">
						<h4><a href="http://localhost:8081/php/#">Water Games</a></h4>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<div className="portfolio-link">
							<a href="http://localhost:8081/php/#"><i className="fa fa-facebook"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-twitter"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-google-plus"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-linkedin"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-rss"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-3 hidden-sm">
				<div className="single-portfolio">
					<a href="http://localhost:8081/php/#">
                        <img src="images/23.jpg" alt="" /></a>
					<div className="portfolio-text">
						<h4><a href="http://localhost:8081/php/#">Private Charter</a></h4>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<div className="portfolio-link">
							<a href="http://localhost:8081/php/#"><i className="fa fa-facebook"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-twitter"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-google-plus"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-linkedin"></i></a>
							<a href="http://localhost:8081/php/#"><i className="fa fa-rss"></i></a>
						</div>
					</div>
				</div>
				<div className="single-portfolio">
					<a href="http://localhost:8081/php/#">
                        <img src="images/24.jpg" alt="" /></a>
					<div className="portfolio-text">
						<h4><a href="http://localhost:8081/php/#">Food &amp; Drink</a></h4>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<div className="portfolio-link">
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



    </section>
  )
}

export default MySection
