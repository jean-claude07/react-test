import React, {Component} from 'react';
class home extends Component {
	render() {
		return (
			<div className="row ">
				<div className="medium-12 columns">


					<div class="modal fade" id="bookTicket" tabindex="-1" role="dialog" aria-labelledby="BookTicket">
						<div class="modal-dialog" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
									<h4 class="modal-title" id="myModalLabel">Name of The Event &nbsp; <small><span class="label label-success">Available</span> &nbsp; <span class="label label-danger">Not Available</span></small></h4>
								</div>
								
								<form>
									<div class="modal-body">
										<div class="form-group">
											<label for="exampleInputEmail1">Email</label>
											<input type="email" class="form-control" id="exampleInputEmail1" placeholder="example@mail.com" />
										</div>
										<div class="form-group">
											<label for="exampleInputContact">Contact</label>
											<input type="text" class="form-control" id="exampleInputContact" placeholder="+91 55 5555 5555" />
										</div>
										<div class="form-group">
											<label for="exampleInputSeats">Number of Tickets</label>
											<select class="form-control" id="exampleInputSeats">
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
										<div class="checkbox">
											<label>
												<input type="checkbox" /> I accept the Terms of Service
											</label>
										</div>
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
										
										<button type="button" class="btn btn-primary">Book Now</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					
					
					<div class="wrapper" id="home">
					
						
						<header>
							
							<nav class="secondary-menu">
								<div class="container">
									
									<div class="sm-left">
										<strong>Phone</strong>:&nbsp; <a href="#">034 60 813 51</a>&nbsp;&nbsp;&nbsp;&nbsp;
										<strong>E-mail</strong>:&nbsp; <a href="#">jeclaude78@gmail.com</a>
									</div>
									
									<div class="sm-right">
										
										<div class="sm-social-link">
											<a class="h-facebook" href="#"><i class="fa fa-facebook"></i></a>
											<a class="h-twitter" href="#"><i class="fa fa-twitter"></i></a>
											<a class="h-google" href="#"><i class="fa fa-google-plus"></i></a>
											<a class="h-linkedin" href="#"><i class="fa fa-linkedin"></i></a>
										</div>
									</div>
									<div class="clearfix"></div>
								</div>
							</nav>
							
							<nav class="navbar navbar-fixed-top navbar-default">
								<div class="container">
									
									<div class="navbar-header">
										<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
											<span class="sr-only">Toggle navigation</span>
											<span class="icon-bar"></span>
											<span class="icon-bar"></span>
											<span class="icon-bar"></span>
										</button>
										
										<a class="navbar-brand" href="#home">
											
											<img class="img-responsive" src="img/logo/logo.png" alt="" />
										</a>
									</div>

									
									<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
										<ul class="nav navbar-nav navbar-right">
											<li><a href="#latestalbum">Latest Album</a></li>
											<li><a href="#featuredalbum">Featured Album</a></li>
											<li><a href="#joinus">Join Us</a></li>
											<li><a href="#portfolio">Portfolio</a></li>
											<li><a href="#events">Events</a></li>
											<li><a href="#team">Team</a></li>
											<li><a href="#contact">Contact</a></li>
										</ul>
									</div>
								</div>
							</nav>
						</header>
						
						
						
						<div class="banner">
							<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
								
								<div class="carousel-inner" role="listbox">
									<div class="item active">
										<img src="img/banner/b1.jpg" alt="..." />
										<div class="container">
											
											<div class="carousel-caption slide-one">
												
												<h2 class="animated fadeInLeftBig"><i class="fa fa-music"></i> Melodi For You!</h2>
												
												<h3 class="animated fadeInRightBig">Find More Innovative &amp; Creative Music Albums.</h3>
												
												<a href="#" class="animated fadeIn btn btn-theme">Download Here</a>
											</div>
										</div>
									</div>
									<div class="item">
										<img src="img/banner/b2.jpg" alt="..." />
										<div class="container">
											
											<div class="carousel-caption slide-two">
												
												<h2 class="animated fadeInLeftBig"><i class="fa fa-headphones"></i> Listen It...</h2>
												
												<h3 class="animated fadeInRightBig">Lorem ipsum dolor sit amet, consectetur elit.</h3>
												
												<a href="#" class="animated fadeIn btn btn-theme">Listen Now</a>
											</div>
										</div>
									</div>
								</div>

								
								<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
									<span class="fa fa-arrow-left" aria-hidden="true"></span>
								</a>
								<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
									<span class="fa fa-arrow-right" aria-hidden="true"></span>
								</a>
							</div>
						</div>
						
						
						
						<div class="nav-animate"></div>
						
						
						<div id="latestalbum" class="hero pad">
							<div class="container">
								
								<div class="hero-content ">
									
									<h2>Latest Album</h2>
									<hr/>
									
									<p>We sing the best <strong class="theme-color">Songs</strong> and now we control the world best <strong class="theme-color">Music</strong>.</p>
								</div>
								
								<div class="hero-playlist">
									<div class="row">
										<div class="col-md-6 col-sm-6">
											
											<div class="figure">
												
												<img class="img-responsive" src="img/album/1.jpg" alt="" />
												
												<img class="img-responsive disk" src="img/album/disk.png" alt="" />
											</div>
											
											<div class="album-details">
												
												<h4>Perfect Melodi</h4>
												
												<h5>By Himanshu</h5>
												
												<p>Lorem Ipsum has been the industry's standard dummy text ever since 1500.</p>
												
												<a href="#" class="btn btn-lg btn-theme" id="playNowBtn"><i class="fa fa-play"></i>&nbsp; Play Now</a>
											</div>
										</div>
										<div class="col-md-6 col-sm-6">
											
											<div class="playlist-content">
												<ul class="list-unstyled">
													<li class="playlist-number">
														
														<div class="song-info">
															
															<h4>Melodi Song Track One</h4>
															<p><strong>Album</strong>: Title &nbsp;|&nbsp; <strong>Type</strong>: Rock &nbsp;|&nbsp; <strong>Singer</strong>: Dawn</p>
														</div>
														
														<div class="music-icon">
															<a href="#"><i class="fa fa-play"></i></a>
															<a href="#"><i class="fa fa-pause"></i></a>
														</div>
														<div class="clearfix"></div>
													</li>
													<li class="playlist-number">
														
														<div class="song-info">
															
															<h4>Melodi Song Track Two</h4>
															<p><strong>Album</strong>: Title &nbsp;|&nbsp; <strong>Type</strong>: Rock &nbsp;|&nbsp; <strong>Singer</strong>: Dawn</p>
														</div>
														
														<div class="music-icon">
															<a href="#"><i class="fa fa-play"></i></a>
															<a href="#"><i class="fa fa-pause"></i></a>
														</div>
														<div class="clearfix"></div>
													</li>
													<li class="playlist-number">
														
														<div class="song-info">
															
															<h4>Melodi Song Track Three</h4>
															<p><strong>Album</strong>: Title &nbsp;|&nbsp; <strong>Type</strong>: Rock &nbsp;|&nbsp; <strong>Singer</strong>: Dawn</p>
														</div>
														
														<div class="music-icon">
															<a href="#"><i class="fa fa-play"></i></a>
															<a href="#"><i class="fa fa-pause"></i></a>
														</div>
														<div class="clearfix"></div>
													</li>
													<li class="playlist-number">
														
														<div class="song-info">
															
															<h4>Melodi Song Track Four</h4>
															<p><strong>Album</strong>: Title &nbsp;|&nbsp; <strong>Type</strong>: Rock &nbsp;|&nbsp; <strong>Singer</strong>: Dawn</p>
														</div>
														
														<div class="music-icon">
															<a href="#"><i class="fa fa-play"></i></a>
															<a href="#"><i class="fa fa-pause"></i></a>
														</div>
														<div class="clearfix"></div>
													</li>
													<li class="playlist-number">
														
														<div class="song-info">
															
															<h4>Melodi Song Track Five</h4>
															<p><strong>Album</strong>: Title &nbsp;|&nbsp; <strong>Type</strong>: Rock &nbsp;|&nbsp; <strong>Singer</strong>: Dawn</p>
														</div>
														
														<div class="music-icon">
															<a href="#"><i class="fa fa-play"></i></a>
															<a href="#"><i class="fa fa-pause"></i></a>
														</div>
														<div class="clearfix"></div>
													</li>
													<li class="playlist-number">
														
														<div class="song-info">
															
															<h4>Melodi Song Track Six</h4>
															<p><strong>Album</strong>: Title &nbsp;|&nbsp; <strong>Type</strong>: Rock &nbsp;|&nbsp; <strong>Singer</strong>: Dawn</p>
														</div>
														
														<div class="music-icon">
															<a href="#"><i class="fa fa-play"></i></a>
															<a href="#"><i class="fa fa-pause"></i></a>
														</div>
														<div class="clearfix"></div>
													</li>
													<li class="playlist-number">
														
														<div class="song-info">
															
															<h4>Melodi Song Track Seven</h4>
															<p><strong>Album</strong>: Title &nbsp;|&nbsp; <strong>Type</strong>: Rock &nbsp;|&nbsp; <strong>Singer</strong>: Dawn</p>
														</div>
														
														<div class="music-icon">
															<a href="#"><i class="fa fa-play"></i></a>
															<a href="#"><i class="fa fa-pause"></i></a>
														</div>
														<div class="clearfix"></div>
													</li>
													<li class="playlist-number">
														
														<div class="song-info">
															
															<h4>Melodi Song Track Eight</h4>
															<p><strong>Album</strong>: Title &nbsp;|&nbsp; <strong>Type</strong>: Rock &nbsp;|&nbsp; <strong>Singer</strong>: Dawn</p>
														</div>
														
														<div class="music-icon">
															<a href="#"><i class="fa fa-play"></i></a>
															<a href="#"><i class="fa fa-pause"></i></a>
														</div>
														<div class="clearfix"></div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						
						<div class="promo parallax-one pad">
							<div class="container">
								
								<div class="promo-element ">
									
									<h3>Music An Art...</h3>
									
									<p>Music is an art form and cultural activity whose medium is sound organized in time. The common elements of music are <strong>pitch</strong>, <strong>rhythm</strong>, <strong>dynamics</strong> and the sonic qualities of <strong>timbre</strong> and <strong>texture</strong>.</p>
									
									<a class="promo-link" href="#"><i class="fa fa-play-circle"></i></a>
								</div>
							</div>
						</div>
						
						
						
						<div class="featured pad" id="featuredalbum">
							<div class="container">
								
								<div class="default-heading">
									
									<h2>Featured Album</h2>
								</div>
								
								<div class="featured-element">
									<div class="row">
										<div class="col-md-4 col-sm-6">
											
											<div class="featured-item ">
												
												<div class="figure">
													
													<img class="img-responsive" src="img/featured/1.jpg" alt="" />
													
													<p>There are many variations of passages available, but the majority have suffered Lorem alteration in some form, by injected look even slightly believable.</p>
												</div>
												
												<div class="featured-item-info">
													
													<h4>Power Pop</h4>
													
													<hr />
													
													<p>1024+ <span class="label label-theme">Like</span> &nbsp;&nbsp; 825+ <span class="label label-theme">Love</span></p>
												</div>
											</div>
										</div>
										<div class="col-md-4 col-sm-6">
											
											<div class="featured-item ">
												
												<div class="figure">
													
													<img class="img-responsive" src="img/featured/2.jpg" alt="" />
													
													<p>There are many variations of passages available, but the majority have suffered Lorem alteration in some form, by injected look even slightly believable.</p>
												</div>
												
												<div class="featured-item-info">
													
													<h4>Bad Brains</h4>
													
													<hr />
													
													<p>1024+ <span class="label label-theme">Like</span> &nbsp;&nbsp; 825+ <span class="label label-theme">Love</span></p>
												</div>
											</div>
										</div>
										<div class="col-md-4 col-sm-6">
											
											<div class="featured-item ">
												
												<div class="figure">
													
													<img class="img-responsive" src="img/featured/3.jpg" alt="" />
													
													<p>There are many variations of passages available, but the majority have suffered Lorem alteration in some form, by injected look even slightly believable.</p>
												</div>
												
												<div class="featured-item-info">
													
													<h4>The Mars Volta</h4>
													
													<hr />
													
													<p>1024+ <span class="label label-theme">Like</span> &nbsp;&nbsp; 825+ <span class="label label-theme">Love</span></p>
												</div>
											</div>
										</div>
										<div class="col-md-4 col-sm-6">
											
											<div class="featured-item ">
												
												<div class="figure">
													
													<img class="img-responsive" src="img/featured/4.jpg" alt="" />
													
													<p>There are many variations of passages available, but the majority have suffered Lorem alteration in some form, by injected look even slightly believable.</p>
												</div>
												
												<div class="featured-item-info">
													
													<h4>Dirty Dancing</h4>
													
													<hr />
													
													<p>1024+ <span class="label label-theme">Like</span> &nbsp;&nbsp; 825+ <span class="label label-theme">Love</span></p>
												</div>
											</div>
										</div>
										<div class="col-md-4 col-sm-6">
											
											<div class="featured-item ">
												
												<div class="figure">
													
													<img class="img-responsive" src="img/featured/5.jpg" alt="" />
													
													<p>There are many variations of passages available, but the majority have suffered Lorem alteration in some form, by injected look even slightly believable.</p>
												</div>
												
												<div class="featured-item-info">
													
													<h4>Hotel California</h4>
													
													<hr />
													
													<p>1024+ <span class="label label-theme">Like</span> &nbsp;&nbsp; 825+ <span class="label label-theme">Love</span></p>
												</div>
											</div>
										</div>
										<div class="col-md-4 col-sm-6">
											
											<div class="featured-item ">
												
												<div class="figure">
													
													<img class="img-responsive" src="img/featured/6.jpg" alt="" />
													
													<p>There are many variations of passages available, but the majority have suffered Lorem alteration in some form, by injected look even slightly believable.</p>
												</div>
												
												<div class="featured-item-info">
													
													<h4>Punk Compilation</h4>
													
													<hr />
													
													<p>1024+ <span class="label label-theme">Like</span> &nbsp;&nbsp; 825+ <span class="label label-theme">Love</span></p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div class="cta parallax-one pad">
							<div class="container">
								
								<div class="cta-element ">
									<div class="row">
										<div class="col-md-9 col-sm-8">
											
											<h3>Melodi, A Fully Rock Album Pro</h3>
											
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim sectetur adipiscing elit, sed do eiusmod tempoad minim veniam consequat.</p>
										</div>
										<div class="col-md-3 col-sm-4">
											<div class="cta-btn text-center">
												
												<a href="#" class="btn btn-default btn-lg">Download Now</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						
						
						<div class="work-with-us pad" id="joinus">
							<div class="container">
								
								<div class="default-heading">
									
									<h2>Work With Us</h2>
								</div>
								
								<div class="why-content">
									
									<p class="why-message">It would be a great pleasure to have you in our team, follow these steps to join us.</p>
									<div class="row">
										<div class="col-md-3 col-sm-6">
											
											<div class="why-item  delay-one">
												<span class="why-number">1</span>
												
												<p>Sed ut perspi ciatis unde omnis iste natus error sit vol uptatem accus antium totam rem aperiam, eaque ipsa quae ab illo inventore veritatisnatus.</p>
											</div>
										</div>
										<div class="col-md-3 col-sm-6">
											
											<div class="why-item  delay-two">
												<span class="why-number">2</span>
												
												<p>Sed ut perspi ciatis unde omnis iste natus error sit vol uptatem accu santium totam rem aperiam, eaque ipsa quae ab illo inventore veritatisnatus.</p>
											</div>
										</div>
										<div class="col-md-3 col-sm-6">
											
											<div class="why-item  delay-three">
												<span class="why-number">3</span>
												
												<p>Sed ut perspi ciatis unde omnis iste natus error sit vol uptatem accus antium totam rem aperiam, eaque ipsa quae ab illo inventore veritatisnatus.</p>
											</div>
										</div>
										<div class="col-md-3 col-sm-6">
											
											<div class="why-item  delay-four">
												<span class="why-number">4</span>
												
												<p>Sed ut perspi ciatis unde omnis iste natus error sit vol uptatem accus antium totam rem aperiam, eaque ipsa quae ab illo inventore veritatisnatus.</p>
											</div>
										</div>
									</div>
									
									<div class="apply-btn">
										
										<a class="btn btn-lg btn-theme" href="#">Join Now</a>
									</div>
								</div>
							</div>
						</div>
						
						
						<div class="news-letter">
							<div class="container">
								
								<div class="news-content ">
									
									<h3>Sign Up For Newsletter</h3>
									
									<p><strong>Contact Us</strong> and let us know if you have any questions, Don't forget to subscribe for more awesome stuff by typing mail bellow.</p>
									
									<form>
										<div class="input-group">
											<input type="text" class="form-control input-lg" placeholder="Email" />
											<span class="input-group-btn">
												<button class="btn btn-default btn-lg" type="button">Subscribe</button>
											</span>
										</div>
									</form>
								</div>
							</div>
						</div>
						
						
						<div class="portfolio pad" id="portfolio">
							<div>
								
								<div class="default-heading">
									
									<h2>Portfolio</h2>
								</div>
							</div>
							
							<div class="portfolio-content" id="portfolioOwl">
								<div class="item">
									
									<img class="img-responsive" src="img/portfolio/1.jpg" alt="" />
									
									<div class="p-transparent"></div>
									
									<div class="p-hover">
										
										<h3>Album Title</h3><hr/>
										
										<p>Some details about album.</p>
										
										<a href="#"><i class="fa fa-share"></i></a>
									</div>
								</div>
								<div class="item">
									
									<img class="img-responsive" src="img/portfolio/2.jpg" alt="" />
									
									<div class="p-transparent"></div>
									
									<div class="p-hover">
										
										<h3>Album Title</h3><hr/>
										
										<p>Some details about album.</p>
										
										<a href="#"><i class="fa fa-share"></i></a>
									</div>
								</div>
								<div class="item">
									
									<img class="img-responsive" src="img/portfolio/3.jpg" alt="" />
									
									<div class="p-transparent"></div>
									
									<div class="p-hover">
										
										<h3>Album Title</h3><hr/>
										
										<p>Some details about album.</p>
										
										<a href="#"><i class="fa fa-share"></i></a>
									</div>
								</div>
								<div class="item">
									
									<img class="img-responsive" src="img/portfolio/4.jpg" alt="" />
									
									<div class="p-transparent"></div>
									
									<div class="p-hover">
										
										<h3>Album Title</h3><hr/>
										
										<p>Some details about album.</p>
										
										<a href="#"><i class="fa fa-share"></i></a>
									</div>
								</div>
								<div class="item">
									
									<img class="img-responsive" src="img/portfolio/5.jpg" alt="" />
									
									<div class="p-transparent"></div>
									
									<div class="p-hover">
										
										<h3>Album Title</h3><hr/>
										
										<p>Some details about album.</p>
										
										<a href="#"><i class="fa fa-share"></i></a>
									</div>
								</div>
								<div class="item">
									
									<img class="img-responsive" src="img/portfolio/6.jpg" alt="" />
									
									<div class="p-transparent"></div>
									
									<div class="p-hover">
										
										<h3>Album Title</h3><hr/>
										
										<p>Some details about album.</p>
										
										<a href="#"><i class="fa fa-share"></i></a>
									</div>
								</div>
								<div class="item">
									
									<img class="img-responsive" src="img/portfolio/7.jpg" alt="" />
									
									<div class="p-transparent"></div>
									
									<div class="p-hover">
										
										<h3>Album Title</h3><hr/>
										
										<p>Some details about album.</p>
										
										<a href="#"><i class="fa fa-share"></i></a>
									</div>
								</div>
								<div class="item">
									
									<img class="img-responsive" src="img/portfolio/8.jpg" alt="" />
									
									<div class="p-transparent"></div>
									
									<div class="p-hover">
										
										<h3>Album Title</h3><hr/>
										
										<p>Some details about album.</p>
										
										<a href="#"><i class="fa fa-share"></i></a>
									</div>
								</div>
							</div>
							<div class="text-center">
								<a href="#" class="btn btn-lg btn-theme">View more</a>
							</div>
							
						</div>
						
						
						
						<div class="events parallax-three pad" id="events">
							<div class="container">
								
								<div class="default-heading-shadow">
									
									<h2>Coming Events</h2>
								</div>
								
								<div class="events-element">
									<div class="row">
										<div class="col-md-6 col-sm-6">
											
											<div class="events-item ">
												
												<div class="figure">
													
													<div class="event-date">
														24 <span class="emonth">Jan</span>
														<div class="clearfix"></div>
														
														<span class="etime">06:30 pm</span>
													</div>
													
													<span class="event-location"><i class="fa fa-map-marker"></i> New York</span>
													
													<img class="img-responsive" src="img/event/1.jpg" alt="" />
													
													<div class="img-hover">
														
														<a href="#"><i class="fa fa-play-circle"></i></a>
													</div>
												</div>
												
												<div class="event-info">
													
													<h3>Sound Of melodi In Instrumesnts</h3>
													<hr />
													
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed doconsect etur eiusmod teme et dolore magna aliqua... <a href="#">more</a></p>
													
													<button href="#bookTicket" class="btn btn-lg btn-theme" data-toggle="modal" >Book Ticket</button>
												</div>
											</div>
										</div>
										<div class="col-md-6 col-sm-6">
											
											<div class="events-item ">
												
												<div class="figure">
													
													<div class="event-date">
														31 <span class="emonth">Jan</span>
														<div class="clearfix"></div>
														
														<span class="etime">09:45 pm</span>
													</div>
													
													<span class="event-location"><i class="fa fa-map-marker"></i> Romania</span>
													
													<img class="img-responsive" src="img/event/2.jpg" alt="" />
													
													<div class="img-hover">
														
														<a href="#"><i class="fa fa-play-circle"></i></a>
													</div>
												</div>
												
												<div class="event-info">
													
													<h3>Rock Music Festival at City Life Mall</h3>
													<hr />
													
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed doconsect etur eiusmod teme et dolore magna aliqua... <a href="#">more</a></p>
													
													<button href="#bookTicket" class="btn btn-lg btn-theme" data-toggle="modal" >Book Ticket</button>
												</div>
											</div>
										</div>
										<div class="col-md-6 col-sm-6">
											
											<div class="events-item ">
												
												<div class="figure">
													
													<div class="event-date">
														14 <span class="emonth">Feb</span>
														<div class="clearfix"></div>
														
														<span class="etime">10:30 am</span>
													</div>
													
													<span class="event-location"><i class="fa fa-map-marker"></i> New Delhi</span>
													
													<img class="img-responsive" src="img/event/3.jpg" alt="" />
													
													<div class="img-hover">
														
														<a href="#"><i class="fa fa-play-circle"></i></a>
													</div>
												</div>
												
												<div class="event-info">
													
													<h3>Fashion Show Light At Hollywood</h3>
													<hr />
													
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed doconsect etur eiusmod teme et dolore magna aliqua... <a href="#">more</a></p>
													
													<button href="#bookTicket" class="btn btn-lg btn-theme" data-toggle="modal" >Book Ticket</button>
												</div>
											</div>
										</div>
										<div class="col-md-6 col-sm-6">
											
											<div class="events-item ">
												
												<div class="figure">
													
													<div class="event-date">
														31 <span class="emonth">Mar</span>
														<div class="clearfix"></div>
														
														<span class="etime">10:00 pm</span>
													</div>
													
													<span class="event-location"><i class="fa fa-map-marker"></i> New Delhi</span>
													
													<img class="img-responsive" src="img/event/4.jpg" alt="" />
													
													<div class="img-hover">
														
														<a href="#"><i class="fa fa-play-circle"></i></a>
													</div>
												</div>
												
												<div class="event-info">
													
													<h3>Fashion Show Light At Hollywood</h3>
													<hr />
													
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed doconsect etur eiusmod teme et dolore magna aliqua... <a href="#">more</a></p>
													
													<button href="#bookTicket" class="btn btn-lg btn-theme" data-toggle="modal" >Book Ticket</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						
						
						<div class="about" id="team">
							<div class="container">
								
								<div class="default-heading">
									
									<h2>Who We Are?</h2>
								</div>
								
								<div class="about-what-we">
									<div class="row">
										<div class="col-md-4 col-sm-4">
											<div class="what-we-item ">
												
												<h3><i class="fa fa-heartbeat"></i> What we do?</h3>
												
												<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit occaecat cupidatat non id est laborum.</p>
											</div>
										</div>
										<div class="col-md-4 col-sm-4">
											<div class="what-we-item ">
												
												<h3><i class="fa fa-hand-o-up"></i> Why choose us?</h3>
												
												<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit occaecat cupidatat non id est laborum.</p>
											</div>
										</div>
										<div class="col-md-4 col-sm-4">
											<div class="what-we-item ">
												
												<h3><i class="fa fa-map-marker"></i> Where we are?</h3>
												
												<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit occaecat cupidatat non id est laborum.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="team">
								<div class="container">	
									
									<div class="team-content">
										<div class="row">
											<div class="col-md-3 col-sm-6">
												
												<div class="team-member  delay-one">
													
													<div class="member-img">
														
														<img class="img-responsive" src="img/user/1.jpg" alt="" />
														
														<div class="social text-center">
															<a href="#"><i class="fa fa-facebook"></i></a>
															<a href="#"><i class="fa fa-google-plus"></i></a>
															<a href="#"><i class="fa fa-linkedin"></i></a>
															<a href="#"><i class="fa fa-twitter"></i></a>
														</div>
													</div>
													
													<h3>Stacey Kowalski</h3>
													<span class="designation">Guitarist</span>
												</div>
											</div>
											<div class="col-md-3 col-sm-6">
												
												<div class="team-member  delay-two">
													
													<div class="member-img">
														
														<img class="img-responsive" src="img/user/2.jpg" alt="" />
														
														<div class="social text-center">
															<a href="#"><i class="fa fa-facebook"></i></a>
															<a href="#"><i class="fa fa-google-plus"></i></a>
															<a href="#"><i class="fa fa-linkedin"></i></a>
															<a href="#"><i class="fa fa-twitter"></i></a>
														</div>
													</div>
													
													<h3>Joanna Koo</h3>
													<span class="designation">Clarinetist</span>
												</div>
											</div>
											<div class="col-md-3 col-sm-6">
												
												<div class="team-member  delay-three">
													
													<div class="member-img">
														
														<img class="img-responsive" src="img/user/3.jpg" alt="" />
														
														<div class="social text-center">
															<a href="#"><i class="fa fa-facebook"></i></a>
															<a href="#"><i class="fa fa-google-plus"></i></a>
															<a href="#"><i class="fa fa-linkedin"></i></a>
															<a href="#"><i class="fa fa-twitter"></i></a>
														</div>
													</div>
													
													<h3>Mark Laredo</h3>
													<span class="designation">Accordionist</span>
												</div>
											</div>
											<div class="col-md-3 col-sm-6">
												
												<div class="team-member  delay-four">
													
													<div class="member-img">
														
														<img class="img-responsive" src="img/user/4.jpg" alt="" />
														
														<div class="social text-center">
															<a href="#"><i class="fa fa-facebook"></i></a>
															<a href="#"><i class="fa fa-google-plus"></i></a>
															<a href="#"><i class="fa fa-linkedin"></i></a>
															<a href="#"><i class="fa fa-twitter"></i></a>
														</div>
													</div>
													
													<h3>Belie Costa</h3>
													<span class="designation">Keyboardist</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						
						
						<div class="meet parallax-four pad" id="meet">
							<div class="container">
								
								<div class="default-heading-shadow">
									<h2>Upcoming Meets</h2>
								</div>
								
								<div class="meet-map">
									<img class="img-responsive img-map" src="img/flat/map.png" alt="" />
									
									<a href="#" class="map-marker india " data-toggle="tooltip" data-placement="top" title="India"><img class="img-responsive" src="img/flat/map-marker.png" alt="" /></a>
									
									<a href="#" class="map-marker usa " data-toggle="tooltip" data-placement="top" title="United States"><img class="img-responsive" src="img/flat/map-marker.png" alt="" /></a>
									
									<a href="#" class="map-marker sa " data-toggle="tooltip" data-placement="top" title="South Africa"><img class="img-responsive" src="img/flat/map-marker.png" alt="" /></a>
									
									<a href="#" class="map-marker russia " data-toggle="tooltip" data-placement="top" title="Russia"><img class="img-responsive" src="img/flat/map-marker.png" alt="" /></a>
									
									<a href="#" class="map-marker brazil " data-toggle="tooltip" data-placement="top" title="Brazil"><img class="img-responsive" src="img/flat/map-marker.png" alt="" /></a>
								</div>
							</div>
						</div>
						
						
						
						<div class="contact pad" id="contact">
							<div class="container">
								
								<div class="default-heading">
									
									<h2>Contact Us</h2>
								</div>
								<div class="row">	
									<div class="col-md-4 col-sm-4">
										
										<div class="contact-item ">
											
											<i class="fa fa-street-view"></i>
											
											<span class="contact-details">ANTANANARIVO MADAGASCAR</span>
										</div>
									</div>
									<div class="col-md-4 col-sm-4">
										
										<div class="contact-item ">
											
											<i class="fa fa-wifi"></i>
											
											<span class="contact-details">jeclaude78@gmail.com</span>
										</div>
									</div>
									<div class="col-md-4 col-sm-4">
										
										<div class="contact-item ">
											
											<i class="fa fa-phone"></i>
											
											<span class="contact-details"> 034 60 813 51</span>
										</div>
									</div>
								</div>
								
								<div class="form-content ">
									
									<p>Do you have any idea in your mind? Drop us a line.</p>
									<form role="form" id="contactForm" method="post">
										<div class="row">
											<div class="col-md-6 col-sm-6">
												<div class="form-group">
													<label for="name">Name</label>
													<input type="text" class="form-control" id="name" name="name" placeholder="Enter name" />
												</div>
												<div class="form-group">
													<label for="email">Email</label>
													<input type="email" class="form-control" id="email" name="email" placeholder="Enter email" />
												</div>
												<div class="form-group">
													<label for="phone">Phone</label>
													<input type="text" class="form-control" id="phone" name="phone" placeholder="Enter phone" />
												</div>
											</div>
											<div class="col-md-6 col-sm-6">
												<div class="form-group">
													<label for="message">Message</label>
													<textarea class="form-control" id="message" name="message" rows="9" placeholder="Enter message"></textarea>
												</div>
											</div>
										</div>
										<div class="text-center">
											<button type="submit" class="btn btn-lg btn-theme" value="contactForm">Send Message</button>
										</div>

									</form>
												
								</div>

							</div>
						</div>
						
						<div class="form-content" id="erreur" ></div>
						
						<footer>
							<div class="container">
								
								<div class="social">
									<a class="h-facebook" href="#"><i class="fa fa-facebook"></i></a>
									<a class="h-google" href="#"><i class="fa fa-google-plus"></i></a>
									<a class="h-linkedin" href="#"><i class="fa fa-linkedin"></i></a>
									<a class="h-twitter" href="#"><i class="fa fa-twitter"></i></a>
								</div>
								
								<p class="copy-right">&copy; copyright 2018, All rights are reserved.</p>
							</div>
						</footer>
						
						
						
						<span class="totop"><a href="#"><i class="fa fa-chevron-up"></i></a></span> 
						
					</div>
				</div>
			</div> 
		);
	}
}
export default home;


