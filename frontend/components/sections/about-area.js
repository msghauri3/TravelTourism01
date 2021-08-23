import React from 'react'

const AboutArea = ({data}) => {
    return (
      <section>


<div className="about-area text-center about-area-three hidden-xs" 
            style={{backgroundimage: 'url(http://localhost:8081/php/assets/img/home/why_important.jpg)'}}>
	<div className="container">
		<div className="row">
			<div className="col-md-6 col-md-offset-6">
				<div className="about-container section-padding">
					<div className="section-title title-three">
						<div className="title-border">
							<h1 style={{lineheight: '35px'}}>{data.heading} <span className="text-white"></span>?</h1>
						</div>
					</div>
					<div className="about-text">
						<h1>{data.title}</h1>
						<p>
{data.detail}

            </p>
						<a href="http://localhost:8081/php/#" className="button-blue freeScriptTag">Start right now!</a>
					</div>

				
					
					{/* <div className="about-text"> 
					{
					mtdppages.map((mtdppage) => (
						<div>
							<h1>{mtdppage.Subject}</h1> 
							<p>{mtdppage.Detail}</p>
						</div>
									
					))}
					</div> */}


				</div>
			</div>
		</div>
	</div>
</div>
  
        </section> 
    )
}

export default AboutArea
