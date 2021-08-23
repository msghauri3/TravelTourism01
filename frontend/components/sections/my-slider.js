import Video from "../elements/video"

const MySlider = ({ data }) => {
  return (
    <section>

<div className="slider-area slider-three">
	<div className="preview-2">
		<div id="nivoslider" className="slides nivoSlider">
			<a href="http://localhost:8081/php/#" className="nivo-imageLink" style={{display:'block'}}>
                <img src="images/1.jpg" alt="" title="#slider-1-caption1" style={{display:'none'}} /></a>
			<a href="http://localhost:8081/php/#" className="nivo-imageLink" style={{display:'none'}}>
                <img src="images/2.jpg" alt="" title="#slider-1-caption1" style={{display:'none'}} /></a>
			<a href="http://localhost:8081/php/#" className="nivo-imageLink" style={{display:'none'}}>
                <img src="images/3.jpg" alt="" title="#slider-1-caption1" style={{display:'none'}} /></a>
			<a href="http://localhost:8081/php/#" className="nivo-imageLink" style={{display:'none'}}>
                <img src="images/4.jpg" alt="" title="#slider-1-caption1" style={{display:'none'}} /></a>
			<a href="http://localhost:8081/php/#" className="nivo-imageLink" style={{display:'none'}}>
                <img src="images/5.jpg" alt="" title="#slider-1-caption1" style={{display:'none'}} /></a>
			<a href="http://localhost:8081/php/#" className="nivo-imageLink" style={{display:'none'}}>
                <img src="images/6.jpg" alt="" title="#slider-1-caption1" style={{display:'none'}} /></a>
			<a href="http://localhost:8081/php/#" className="nivo-imageLink" style={{display:'none'}}>
                <img src="images/7.jpg" alt="" title="#slider-1-caption1" style={{display:'none'}} /></a>
			<a href="http://localhost:8081/php/#" className="nivo-imageLink" style={{display:'none'}}>
                <img src="images/8.jpg" alt="" title="#slider-1-caption1" style={{display:'none'}} /></a>
			<a href="http://localhost:8081/php/#" className="nivo-imageLink" style={{display:'none'}}>
                <img src="images/9.jpg" alt="" title="#slider-1-caption1" style={{display:'none'}} /></a>
			<a href="http://localhost:8081/php/#" className="nivo-imageLink" style={{display:'none'}}>
                <img src="images/10.jpg" alt="" title="#slider-1-caption1" style={{display:'none'}} /></a>
		<img className="nivo-main-image" src="images/1.jpg" style={{display: 'inline', width: '1263px', height: 'auto'}} />
        <div className="nivo-caption" style={{display:'block'}} >
			<div className="banner-content slider-1">
				<div className="container">
					<div className="row">
						<div className="col-lg-7 col-md-9">
							<div className="text-content">
								<h1 className="title1">{data.title1}:</h1>
								<h2 className="sub-title">{data.title2}: <span>{data.title3}:</span> </h2>
								<h2 className="sub-title">{data.title4}:</h2>
								<form action="http://localhost:8081/php/plan" method="POST" id="banner-searchbox" className="hidden-xs">
									<div className="col-md-3 input_date_adv">
										<select name="category" className="tourism_type" required="">
											<option value="">Tourism Type</option>
											<option value="1">Nature - Single Destination</option>
											<option value="5">Nature - Multiple Destination</option>
											<option value="2">Historical</option>
											<option value="3">Religious</option>
											<option value="4">Food</option>
										</select>
									</div>
								
									<div className="col-md-3  input_date_adv">
										<input type="text" name="no_of_days" className="no_of_days" placeholder="No. of Days" required="" disabled="" />
									</div>

									<div className="col-md-3 input_date_adv">
										<select name="month" className="tour_month" required="">
											<option value="">Select Month</option>
											<option value="1">January</option>
											<option value="2">February</option>
											<option value="3">March</option>
											<option value="4">April</option>
											<option value="5">May</option>
											<option value="6">June</option>
											<option value="7">July</option>
											<option value="8">August</option>
											<option value="9">September</option>
											<option value="10">October</option>
											<option value="11">November</option>
											<option value="12">December</option>
										</select>
									</div>

						
									<div className="col-md-3 input_date_adv">
										<select name="base" className="tour_base" required="" disabled="">
											<option value="">Select Base</option>
											<option value="19">Islamabad</option>
											<option value="40">Lahore</option>
											<option value="25">Karachi</option>
											<option value="6">Gilgit</option>
										</select>
									</div>

									<div className="clearfix multi_location_select" style={{display:'none'}}></div>

									<div className="col-md-6 col-md-offset-3 mt-10 input_date_adv multi_location_select" style={{display:'none'}}>
										<span className="multiselect-native-select"><select className="multi_location" name="multi_location[]" id="select_multi_opt" multiple="multiple" required="">
											<option value="25">Naran</option>
											<option value="23">Astore</option>
											<option value="24">Fairy Meadows</option>
											<option value="19">Hunza</option>
											<option value="20">Naltar</option>
											<option value="21">Phandar</option>
											<option value="22">Skardu</option>
											<option value="18">Swat</option>
											<option value="28">Kumrat</option>
											<option value="27">Chitral</option>
			</select><div className="btn-group">
				<button type="button" className="multiselect dropdown-toggle btn btn-default" data-toggle="dropdown" title="None selected"><span className="multiselect-selected-text">None selected</span> <b className="caret"></b></button><ul className="multiselect-container dropdown-menu"><li className="multiselect-item multiselect-all"><a tabindex="0" className="multiselect-all"><label className="checkbox"><input type="checkbox" value="multiselect-all" />  Select all</label></a></li><li><a tabindex="0"><label className="checkbox" title="Naran"><input type="checkbox" value="25" /> Naran</label></a></li><li><a tabindex="0"><label className="checkbox" title="Astore"><input type="checkbox" value="23" /> Astore</label></a></li><li><a tabindex="0"><label className="checkbox" title="Fairy Meadows"><input type="checkbox" value="24"/> Fairy Meadows</label></a></li><li><a tabindex="0"><label className="checkbox" title="Hunza"><input type="checkbox" value="19" /> Hunza</label></a></li><li><a tabindex="0"><label className="checkbox" title="Naltar"><input type="checkbox" value="20" /> Naltar</label></a></li><li><a tabindex="0"><label className="checkbox" title="Phandar"><input type="checkbox" value="21" /> Phandar</label></a></li><li><a tabindex="0"><label className="checkbox" title="Skardu"><input type="checkbox" value="22" /> Skardu</label></a></li><li><a tabindex="0"><label className="checkbox" title="Swat"><input type="checkbox" value="18" /> Swat</label></a></li><li><a tabindex="0"><label className="checkbox" title="Kumrat"><input type="checkbox" value="28" /> Kumrat</label></a></li><li><a tabindex="0"><label className="checkbox" title="Chitral"><input type="checkbox" value="27" /> Chitral</label></a></li></ul></div></span>
									</div>
									
									<div className="clearfix"></div>

									<button type="submit" id="btn-search-category" style={{fontweight: "bold"}} className="button-blue tour_search_btn" disabled="">LET US PLAN
									</button>
								</form>
							</div>
						</div>
						<div className="col-lg-4 col-lg-offset-1 col-md-3 col-md-offset-0">
							<div className="slider-icon-container hidden-xs">
								<div className="row">
									<div className="col">
										<div className="slider-icon-item text-center">
											<h3 className="sub-title">{data.title9}:</h3>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-6 col-md-12">
										<a href="http://localhost:8081/php/shop/slist">
											<div className="slider-icon-item">
												<div className="single-icon-three">
													<div className="icon-border-left"></div>
													<img src="images/nature.png" className="primary-img" alt="" />
													<img src="images/nature-hover.png" className="secondary-img" alt="" />
													<h5>{data.title5}: <br /> {data.title6}:</h5>
													<div className="icon-border-right"></div>
												</div>
											</div>
										</a>
										<a href="http://localhost:8081/php/shop/slist">
											<div className="slider-icon-item">
												<div className="single-icon-three rotate-bg-icon">
													<div className="icon-border-left"></div>
													<img src="images/food.png" className="primary-img" alt="" />
													<img src="images/food-hover.png" className="secondary-img" alt="" />
													<h5>{data.title7}: <br /> {data.title8}:</h5>
													<div className="icon-border-right"></div>
												</div>
											</div>
										</a>
										<a href="http://localhost:8081/php/shop/slist">
											<div className="slider-icon-item">
												<div className="single-icon-three single-icon-three-peach">
													<div className="icon-border-left"></div>
													<img src="images/adventure.png" className="primary-img" alt="" />
													<img src="images/adventure-hover.png" className="secondary-img" alt="" />
													<h5>{data.title9}:</h5>
													<div className="icon-border-right"></div>
												</div>
											</div>
										</a>
									</div>
									<div className="col-lg-6 hidden-md">
										<a href="http://localhost:8081/php/shop/slist">
											<div className="slider-icon-item">
												<div className="single-icon-three">
													<div className="icon-border-left"></div>
													<img src="images/history.png" className="primary-img" alt="" />
													<img src="images/history-hover.png" className="secondary-img" alt="" />
													<h5>{data.title9}: <br /> {data.title9}:</h5>
													<div className="icon-border-right"></div>
												</div>
											</div>
										</a>
										<a href="http://localhost:8081/php/shop/slist">
											<div className="slider-icon-item">
												<div className="single-icon-three rotate-bg-icon">
													<div className="icon-border-left"></div>
													<img src="images/religion.png" className="primary-img" alt="" />
													<img src="images/religion-hover.png" className="secondary-img" alt="" />
													<h5>{data.title9}: <br /> {data.title9}:</h5>
													<div className="icon-border-right"></div>
												</div>
											</div>
										</a>
										<a href="http://localhost:8081/php/shop/slist">
											<div className="slider-icon-item">
												<div className="single-icon-three single-icon-three-peach">
													<div className="icon-border-left"></div>
													<img src="images/combo.png" className="primary-img" alt="" />
													<img src="images/combo-hover.png" className="secondary-img" alt="" />
													<h5>{data.title9}:</h5>
													<div className="icon-border-right"></div>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div><div className="nivo-directionNav"><a className="nivo-prevNav">Prev</a><a className="nivo-nextNav">Next</a></div></div><div className="nivo-controlNav"><a className="nivo-control active" rel="0">1</a><a className="nivo-control" rel="1">2</a><a className="nivo-control" rel="2">3</a><a className="nivo-control" rel="3">4</a><a className="nivo-control" rel="4">5</a><a className="nivo-control" rel="5">6</a><a className="nivo-control" rel="6">7</a><a className="nivo-control" rel="7">8</a><a className="nivo-control" rel="8">9</a><a className="nivo-control" rel="9">10</a></div>
		<div id="slider-1-caption1" className="nivo-html-caption nivo-caption">
			<div className="banner-content slider-1">
				<div className="container">
					<div className="row">
						<div className="col-lg-7 col-md-9">
							<div className="text-content">
								<h1 className="title1">{data.title1}:</h1>
								<h2 className="sub-title">{data.title2}: <span>{data.title3}:</span> </h2>
								<h2 className="sub-title">{data.title4}:</h2>
								<form action="http://localhost:8081/php/plan" method="POST" id="banner-searchbox" className="hidden-xs">

									<div className="col-md-3 input_date_adv">
										<select name="category" className="tourism_type" required="">
											<option value="">Tourism Type</option>
											<option value="1">Nature - Single Destination</option>
											<option value="5">Nature - Multiple Destination</option>
											<option value="2">Historical</option>
											<option value="3">Religious</option>
											<option value="4">Food</option>
										</select>
									</div>
							
									<div className="col-md-3  input_date_adv">
										<input type="text" name="no_of_days" className="no_of_days" placeholder="No. of Days" required="" disabled="" />
									</div>

									<div className="col-md-3 input_date_adv">
										<select name="month" className="tour_month" required="">
											<option value="">Select Month</option>
											<option value="1">January</option>
											<option value="2">February</option>
											<option value="3">March</option>
											<option value="4">April</option>
											<option value="5">May</option>
											<option value="6">June</option>
											<option value="7">July</option>
											<option value="8">August</option>
											<option value="9">September</option>
											<option value="10">October</option>
											<option value="11">November</option>
											<option value="12">December</option>
										</select>
									</div>

							
									<div className="col-md-3 input_date_adv">
										<select name="base" className="tour_base" required="" disabled="">
											<option value="">Select Base</option>
											<option value="19">Islamabad</option>
											<option value="40">Lahore</option>
											<option value="25">Karachi</option>
											<option value="6">Gilgit</option>
										</select>
									</div>

									<div className="clearfix multi_location_select" style={{display:'none'}}></div>

									<div className="col-md-6 col-md-offset-3 mt-10 input_date_adv multi_location_select" style={{display:'none'}}>
										<select className="multi_location" name="multi_location[]" id="select_multi_opt" multiple="multiple" required="">
											<option value="25">Naran</option>
											<option value="23">Astore</option>
											<option value="24">Fairy Meadows</option>
											<option value="19">Hunza</option>
											<option value="20">Naltar</option>
											<option value="21">Phandar</option>
											<option value="22">Skardu</option>
											<option value="18">Swat</option>
											<option value="28">Kumrat</option>
											<option value="27">Chitral</option>
										</select>
									</div>
									
									<div className="clearfix"></div>

									<button type="submit" id="btn-search-category" style={{fontweight: 'bold'}} className="button-blue tour_search_btn" disabled="">LET US PLAN
									</button>
								</form>
							</div>
						</div>
						<div className="col-lg-4 col-lg-offset-1 col-md-3 col-md-offset-0">
							<div className="slider-icon-container hidden-xs">
								<div className="row">
									<div className="col">
										<div className="slider-icon-item text-center">
											<h3 className="sub-title">{data.title9}:</h3>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-6 col-md-12">
										<a href="http://localhost:8081/php/shop/slist">
											<div className="slider-icon-item">
												<div className="single-icon-three">
													<div className="icon-border-left"></div>
													<img src="images/nature.png" className="primary-img" alt="" />
													<img src="images/nature-hover.png" className="secondary-img" alt="" />
													<h5>{data.title9}: <br /> {data.title9}:</h5>
													<div className="icon-border-right"></div>
												</div>
											</div>
										</a>
										<a href="http://localhost:8081/php/shop/slist">
											<div className="slider-icon-item">
												<div className="single-icon-three rotate-bg-icon">
													<div className="icon-border-left"></div>
													<img src="images/food.png" className="primary-img" alt="" />
													<img src="images/food-hover.png" className="secondary-img" alt="" />
													<h5>{data.title9}: <br /> {data.title9}:</h5>
													<div className="icon-border-right"></div>
												</div>
											</div>
										</a>
										<a href="http://localhost:8081/php/shop/slist">
											<div className="slider-icon-item">
												<div className="single-icon-three single-icon-three-peach">
													<div className="icon-border-left"></div>
													<img src="images/adventure.png" className="primary-img" alt="" />
													<img src="images/adventure-hover.png" className="secondary-img" alt="" />
													<h5>{data.title9}:</h5>
													<div className="icon-border-right"></div>
												</div>
											</div>
										</a>
									</div>
									<div className="col-lg-6 hidden-md">
										<a href="http://localhost:8081/php/shop/slist">
											<div className="slider-icon-item">
												<div className="single-icon-three">
													<div className="icon-border-left"></div>
													<img src="images/history.png" className="primary-img" alt="" />
													<img src="images/history-hover.png" className="secondary-img" alt="" />
													<h5>{data.title9}: <br /> {data.title9}:</h5>
													<div className="icon-border-right"></div>
												</div>
											</div>
										</a>
										<a href="http://localhost:8081/php/shop/slist">
											<div className="slider-icon-item">
												<div className="single-icon-three rotate-bg-icon">
													<div className="icon-border-left"></div>
													<img src="images/religion.png" className="primary-img" alt="" />
													<img src="images/religion-hover.png" className="secondary-img" alt="" />
													<h5>{data.title9}: <br /> {data.title9}:</h5>
													<div className="icon-border-right"></div>
												</div>
											</div>
										</a>
										<a href="http://localhost:8081/php/shop/slist">
											<div className="slider-icon-item">
												<div className="single-icon-three single-icon-three-peach">
													<div className="icon-border-left"></div>
													<img src="images/combo.png" className="primary-img" alt="" />
													<img src="images/combo-hover.png" className="secondary-img" alt="" />
													<h5>{data.title9}:</h5>
													<div className="icon-border-right"></div>
												</div>
											</div>
										</a>
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
  )
}

export default MySlider
