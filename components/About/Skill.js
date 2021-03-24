const AboutSkill = () => {
    return (
        <>
          <section className="skill-section">
        <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/background/pattern-8.png)'}} />
        <div className="auto-container">
          <div className="row clearfix">
            {/* Skill Column */}
            <div className="skill-column col-lg-7 col-md-12 col-sm-12">
              <div className="inner-column">
                {/* Sec Title */}
                <div className="sec-title">
                  <h2>Vision</h2>
                  <div className="text">We dream of creating a world where you can voice your mental struggle and heal from it with the utmost care. We want to help you understand the know-how of mental well-being and make you educated to listen to others without judging and extending your hand to bring them out from the black hole of misery. </div>
                </div>
              </div>
            </div>
            <div className="image-column col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="circle-one" />
                <div className="circle-two" />
                <div className="image titlt" data-tilt data-tilt-max={4}>
                  <img src="/assets/images/resource/skill.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default AboutSkill;