import Slider from 'react-slick';

const HomeTestimonial = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
    return (
        <>
        <section className="testimonial-section">
        <div className="circle-one paroller" data-paroller-factor="-0.20" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="horizontal" />
        <div className="circle-two paroller" data-paroller-factor="0.20" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="horizontal" />
        <div className="pattern-layer-two" style={{backgroundImage: 'url(images/background/pattern-10.png)'}} />
        <div className="auto-container">
          <div className="inner-container">
            <div className="pattern-layer" style={{backgroundImage: 'url(images/background/pattern-9.png)'}} />
            {/* Sec Title */}
            <div className="sec-title centered">
              <div className="title">Testimonial</div>
              <h2>See what our learners say about us</h2>
              <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur Duis aute irure dolor in reprehenderit in</div>
            </div>
            <Slider {...settings} className="testimonial-carousel">
              {/* Testimonial Block */}
              <div className="testimonial-block p-2 my-2">
                <div className="inner-box">
                  <div className="text">It’s an easy-to-navigate platform. Also I purchased online courses often and they were really thorough and informative. In my opinion Institute of Mental Health is one of the best e-learning platforms.</div>
                  <div className="author-info">
                    <div className="info-inner">
                      <div className="author-image">
                        <img src="/assets/images/resource/author-1.jpg" alt="" />
                      </div>
                      <h6>Mahfuz Riad</h6>
                      <div className="designation">Online Teacher</div>
                    </div>
                  </div>
                  <div className="quote-icon flaticon-quote-2" />
                </div>
              </div>
              {/* Testimonial Block */}
              <div className="testimonial-block p-2 my-2">
                <div className="inner-box">
                  <div className="text">Thanks for providing the information-rich modules. It helped me learn the basics of mental health ans I just loved the learning sessions.</div>
                  <div className="author-info">
                    <div className="info-inner">
                      <div className="author-image">
                        <img src="/assets/images/resource/author-1.jpg" alt="" />
                      </div>
                      <h6>Mahfuz Riad</h6>
                      <div className="designation">Online Teacher</div>
                    </div>
                  </div>
                  <div className="quote-icon flaticon-quote-2" />
                </div>
              </div>
              {/* Testimonial Block */}
              <div className="testimonial-block p-2 my-2">
                <div className="inner-box">
                  <div className="text">We turn your experts into thought leaders by getting their voices heard in the market and by building credibility and brand advocates amongst industry influencers from the media, analyst community</div>
                  <div className="author-info">
                    <div className="info-inner">
                      <div className="author-image">
                        <img src="/assets/images/resource/author-1.jpg" alt="" />
                      </div>
                      <h6>Mahfuz Riad</h6>
                      <div className="designation">Online Teacher</div>
                    </div>
                  </div>
                  <div className="quote-icon flaticon-quote-2" />
                </div>
              </div>
              {/* Testimonial Block */}
              <div className="testimonial-block p-2 my-2">
                <div className="inner-box">
                  <div className="text">We turn your experts into thought leaders by getting their voices heard in the market and by building credibility and brand advocates amongst industry influencers from the media, analyst community</div>
                  <div className="author-info">
                    <div className="info-inner">
                      <div className="author-image">
                        <img src="assets/images/resource/author-1.jpg" alt="" />
                      </div>
                      <h6>Mahfuz Riad</h6>
                      <div className="designation">Online Teacher</div>
                    </div>
                  </div>
                  <div className="quote-icon flaticon-quote-2" />
                </div>
              </div>
              {/* Testimonial Block */}
              <div className="testimonial-block p-2 my-2">
                <div className="inner-box">
                  <div className="text">We turn your experts into thought leaders by getting their voices heard in the market and by building credibility and brand advocates amongst industry influencers from the media, analyst community</div>
                  <div className="author-info">
                    <div className="info-inner">
                      <div className="author-image">
                        <img src="assets/images/resource/author-1.jpg" alt="" />
                      </div>
                      <h6>Mahfuz Riad</h6>
                      <div className="designation">Online Teacher</div>
                    </div>
                  </div>
                  <div className="quote-icon flaticon-quote-2" />
                </div>
              </div>
              {/* Testimonial Block */}
              <div className="testimonial-block p-2 my-2">
                <div className="inner-box">
                  <div className="text">We turn your experts into thought leaders by getting their voices heard in the market and by building credibility and brand advocates amongst industry influencers from the media, analyst community</div>
                  <div className="author-info">
                    <div className="info-inner">
                      <div className="author-image">
                        <img src="assets/images/resource/author-1.jpg" alt="" />
                      </div>
                      <h6>Mahfuz Riad</h6>
                      <div className="designation">Online Teacher</div>
                    </div>
                  </div>
                  <div className="quote-icon flaticon-quote-2" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
        </>
    )
}

export default HomeTestimonial