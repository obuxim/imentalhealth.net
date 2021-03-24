import Link from 'next/link'

const Footer = () => {
    return (
        <>
        <footer className="main-footer">
		<div className="circle-layer"></div>
		<div className="pattern-layer-one" style={{backgroundImage: 'url(images/background/pattern-12.png)'}}></div>
		<div className="pattern-layer-two" style={{backgroundImage: 'url(images/background/pattern-13.png)'}}></div>
		<div className="pattern-layer-three" style={{backgroundImage: 'url(images/background/pattern-14.png)'}}></div>
		<div className="pattern-layer-four" style={{backgroundIimage: 'url(images/background/pattern-13.png)'}}></div>
    	<div className="auto-container">
            <div className="widgets-section">
            	<div className="row clearfix">
					<div className="footer-column col-lg-3 col-md-12 col-sm-12">
						<div className="footer-widget logo-widget">
							<div className="logo">
								<a href="index.html"><img src="/assets/images/logo.png" alt="" /></a>
							</div>
						
							<ul className="social-box">
								<li className="twitter"><a target="_blank" href="http://twitter.com/" className="fa fa-twitter"></a></li>
								<li className="pinterest"><a target="_blank" href="http://pinterest.com/" className="fa fa-pinterest-p"></a></li>
								<li className="facebook"><a target="_blank" href="https://www.facebook.com/Institute-of-Mental-Health-106322288205875" className="fa fa-facebook-f"></a></li>
								<li className="dribbble"><a target="_blank" href="http://dribbble.com/" className="fa fa-dribbble"></a></li>
							</ul>

							

						</div>
					</div>

					
					<div className="footer-column col-lg-9 col-md-12 col-sm-12">
						<div className="row clearfix">
							<div className="column col-lg-4 col-md-4 col-sm-12">
								<h5>About</h5>
								<ul className="list">
									<li><Link href="/allcourses"><a>All Courses</a></Link></li>
									<li><Link href="/about"><a>About us</a></Link></li>
									<li><Link href="/contact"><a>Contact Us</a></Link></li>
									<li><Link href="/"><a>Free Quizzes</a></Link></li>
									<li><Link href="/resourse"><a>Free Resources</a></Link></li>
									<li><Link href="/blog"><a>Blogs</a></Link></li>
								</ul>
							</div>
							

							<div className="column col-lg-4 col-md-4 col-sm-12">
								<h5>Useful Links</h5>
								<ul className="list">
									<li><a href="#">Privacy Policy</a></li>
									<li><a href="#">Terms & Condition</a></li>
									<li><a href="#">Redeem Voucher</a></li>
									<li><a href="#">Certificate Validate</a></li>
								</ul>
								<div className="subscribe-form">
								<h6>Certificate Validate</h6>
								<form method="post" action="contact.html" _lpchecked={1}>
								<div className="form-group">
									<input type="email" name="email" defaultValue placeholder="Your email" required />
									<button type="submit" className="submit-btn"><span className="icon flaticon-right-arrow-2" /></button>
								</div>
								</form>
							</div>
							</div>

							<div className="column col-lg-4 col-md-4 col-sm-12 pull-right">
								<h5>Contact Info</h5>
									<ul className="info-list">
										<li style={{fontSize: 16, color: '#00184f'}}>Tel:<a href="tel:+0845-371-02-02"> 020 3880 6874</a></li>
										<li style={{paddinfTop: 8, color: '#00184f', fontSize: 16}}>Email:<a href="mailto:info@imentalhealth.net"> info@imentalhealth.net</a></li>
									</ul>
								</div>
						
							
							
						</div>
					</div>
					
				</div>
			</div>
			
			<div className="footer-bottom">
				<div className="row clearfix">
					<div className="copyright-column col-lg-6 col-md-12 col-sm-12">
						<div className="copyright">Copyright 2020, All Right Reserved</div>
					</div>
					
					<div className="nav-column col-lg-6 col-md-12 col-sm-12">
						<ul>
							<li><a href="about.html">SiteMap</a></li>
							<li><a href="about.html">Privacy Policy</a></li>
						</ul>
					</div>
					
				</div>
			</div>
			
		</div>
	</footer>
        </>
    )
}

export default Footer