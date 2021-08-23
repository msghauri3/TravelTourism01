import Video from "../elements/video"
import Link from "next/link"
const MyLinks = ({ data }) => {

  return (
    <section >      

<header className="header-three">	

{/* <div>
{
		mtdppages.map((mtdppage) => 
	   <li>
	  {mtdppage.Slug}
	   </li>	  
		)}
</div> */}

				<div className="header-top">		
						<div className="container">
							<div className="row">
								<div className="col-md-4 col-sm-6 hidden-xs">			
									<div className="currency-language">                 						                  
										<div className="currency-menu">
											<ul>
											<li><a href="http://localhost:8081/php/#">PKR <i className="fa fa-angle-down"></i></a>
											<ul className="currency-dropdown">
                                            <li><a href="http://localhost:8081/php/#">PKR</a></li>
                                            <li><a href="http://localhost:8081/php/#">EUR</a></li>
                                            <li><a href="http://localhost:8081/php/#">USD</a></li>
											</ul>
											</li>
											</ul>
										</div>
					
										<div className="language-menu">					
											<ul>
											<li><a href="http://localhost:8081/php/#">English <i className="fa fa-angle-down"></i></a>
											<ul className="language-dropdown">                                           
                                            <li><a href="http://localhost:8081/php/#">English</a></li>                                          
											</ul>
											</li>
											</ul>
										</div>				
									</div>
								</div>
											
				
								<div className="col-md-8 col-sm-6 col-xs-12">
									<div className="header-top-right">	
										<div className="login">
											<a href="http://localhost:8081/php/home/signup"><i className="fa fa-pencil-square-o"></i>Register</a>
										</div>
										<div className="account">
											<a href="http://localhost:8081/php/home/signin">
											<i className="fa fa-lock"></i>sign In</a>
										</div>
									</div>			
								</div>
							</div>
						</div>
					</div>	
		
		
							<div className="header-logo-menu">
								<div className="container">			
									<div className="row">				
										<div className="col-md-12">					
											<div className="logo-menu-bg">
											<div className="row">
												<div className="col-md-4 col-sm-12">                                    
													<div className="logo">
														<a href="http://localhost:8081/php/">
														<img src="images/logo.png" alt="ADVENTURES" />
														</a>
													</div>									
												</div>		
								
					{/* Start Links Strip */}
						<div className="col-md-8 hidden-sm hidden-xs">
						<div className="mainmenu">
							<nav>
								<ul id="nav">
									<li><a href="/abc">HOME</a></li>
								
									<li>
										<Link href="/posts/" as={`/posts`} >
										<a>ABOUT MTD</a> 
										</Link> 
									</li>	  	
								
									<li>
									    <Link href="/mtdp/pagesmtdp/[id]" as={`/mtdp/pagesmtdp/2`} >
										<a>OUR PICKS</a> 
										</Link> 										
									</li>
														
									<li className="drop-down">
										
									<Link href="/mtdp/pagesmtdp/[id]" as={`/mtdp/pagesmtdp/3`} >
									<a>BLOG</a> 
									</Link> 	

									<ul className="sub-menu">
                                           
									 <li>
									<Link href="/mtdp/pagesmtdp/[id]" as={`/mtdp/pagesmtdp/3`} >
									<a className="mega-title">Blog Pages</a> 
									</Link>  
									 </li>                                                        
									 
									<li>
									<Link href="/mtdp/pagesmtdp/[id]" as={`/mtdp/pagesmtdp/3`} >
									<a >Blog List</a> 
									</Link>  
									 </li>


                                    <li>
									<Link href="/mtdp/pagesmtdp2/[slug]" as={`/mtdp/pagesmtdp2/About-Us`} >
									<a >Blog Detail Page</a> 
									</Link>  
									</li>
                                 	
									 </ul>	
									 </li>

									<li>
									<Link href="/mtdp/pagesmtdp/[id]" as={`/mtdp/pagesmtdp/3`} >
									<a >CONTACT US</a> 
									</Link>  
									</li>
									
									</ul>
									
									</nav>
							</div>									
							</div> 
							{/* End Links Strip */}


 											</div>							
										</div>					
									</div>					
								</div>			
							</div>
						</div>

		
    
									<div className="mobile-menu-area">
										<div className="container">
											<div className="row">
												<div className="col-lg-12 col-md-12 col-sm-12">
													<div className="mobile-menu">
														<nav id="dropdown" styleName="display: block;" style={{display: 'block'}}>
														<ul>
														<li><a href="http://localhost:8081/php/">HOME</a></li>
														<li><a href="http://localhost:8081/php/about">ABOUT MTD</a></li>
														<li><a href="http://localhost:8081/php/travel">OUR PICKS</a></li>
														<li><a href="http://localhost:8081/php/?php%20echo%20base_url(%27/blog/listing%27);%20?%3E">BLOG</a>
														<ul>
														<li><a href="http://localhost:8081/php/blog/listing">Blog List</a></li>
														<li><a href="http://localhost:8081/php/blog/details">Blog Details Page</a></li>
														</ul>
														</li>
														<li><a href="http://localhost:8081/php/contact">CONTACT US</a></li>
														</ul>
														</nav>
													</div>
												</div>
											</div>
										</div>
										</div>
        </header>



     
    </section>
  )
}

export default MyLinks
