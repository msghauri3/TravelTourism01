import Video from "../elements/video"

const MySection = ({ data }) => {
  return (
    <section>
    

    <div className="newsletter-area newsletter-three">
	<div className="container">
		<div className="row">
			<div className="col-md-8 col-md-offset-4 col-sm-12">
				<div className="section-title title-three text-center text-white-shadow">
					<div className="title-border">
						<h1 className="text-white">Subscribe for <span>Newsletter</span></h1>
					</div>
					<p className="text-white">Be a part of our Tourist Community to receive emails filled with updates,
						promotions, infotainment and other good stuff from MTD Pakistan.</p>
				</div>
				<form action="http://localhost:8081/php/#" method="post" id="newsletter">
					<div className="newsletter-content">
						<div className="row">
							<div className="col-lg-9 col-md-8 col-sm-9 col-xs-12">
								<input type="text" name="email" placeholder="Enter your email address ......" />
							</div>
							<div className="col-lg-3 col-md-4 col-sm-3 col-xs-12">
								<button type="submit" className="button button-blue"><span>Subscribe</span></button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>


    </section>
  )
}

export default MySection
