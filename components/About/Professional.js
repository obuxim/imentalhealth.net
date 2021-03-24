const AboutProfessional = () => {
    return (
        <>
            <section className="professional-section style-two">
        <div className="background-layer-one" style={{backgroundImage: 'url(/assets/images/background/pattern-5.png)'}} />
        <div className="auto-container">
          <div className="row clearfix">
            {/* Images Column */}
            <div className="images-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/background/pattern-3.png)'}} />
                <div className="pattern-layer-two" style={{backgroundImage: 'url(/assets/images/background/pattern-4.png)'}} />
                <div className="color-layer" />
                <div className="color-layer-two" />
                <div className="image wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <img src="/assets/images/resource/professional.jpg" alt="" />
                </div>
              </div>
            </div>
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="pattern-layer-three" style={{backgroundImage: 'url(/assets/images/background/pattern-16.png)'}} />
                <div className="sec-title">
                  <h2>Mission</h2>
                </div>
                <p>Our motto is to diminish the stigma of mental illness and prepare you to better the mental health of yourself, your friends, family, colleagues or any individual that seeks help from you. We create all of our courses with expert advice and tested methods that will empower your psychological literacy, allowing you to thrive as a mental health support worker. We want you to join our venture to make mental health as important as physical health!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default AboutProfessional;