import React from 'react'

const Breadcrumbs = () => {
    return (
        <>
    <section className="banner-section-three style-two">
        <div className="pattern-layer-two" style={{backgroundImage: 'url(images/background/pattern-21.png)'}} />
            <div className="auto-container">
                <ul className="page-breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li>Courses v1</li>
                </ul>
                <div className="row clearfix">
                <div className="content-column col-lg-8 col-md-12 col-sm-12">
                    <div className="inner-column">
                    <div className="pattern-layer-one" style={{backgroundImage: 'url(images/main-slider/pattern-1.png)'}} />
                    <div className="icon-layer" style={{backgroundImage: 'url(images/icons/icon-2.png)'}} />
                    <div className="icon-layer-two" style={{backgroundImage: 'url(images/icons/icon-5.png)'}} />
                    <h2> Explore <br /> Featured Courses</h2>
                    </div>
                </div>
                <div className="image-column col-lg-4 col-md-12 col-sm-12">
                    <div className="inner-column">
                    <div className="icon-layer-three" style={{backgroundImage: 'url(images/icons/icon-3.png)'}} />
                    <div className="icon-layer-four" style={{backgroundImage: 'url(images/icons/icon-2.png)'}} />
                    <div className="icon-layer-five" style={{backgroundImage: 'url(images/icons/icon-4.png)'}} />
                    <div className="image">
                        <img src="images/resource/page-title-3.jpg" alt />
                    </div>
                    <div className="image-two">
                        <img src="images/resource/page-title-4.jpg" alt />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

        </>
    )
}

export default Breadcrumbs;
