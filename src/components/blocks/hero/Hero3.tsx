import Carousel from '../../reuseable/Carousel';
import NextLink from '../../reuseable/links/NextLink';

export default function Hero15() {
  return (
    <div className="wrapper bg-dark bg-transparent">
      <div className="swiper-container swiper-hero dots-over">
        <Carousel slidesPerView={1} autoplay={{ delay: 7000, disableOnInteraction: false }}>
          <div
            className="swiper-slide bg-overlay bg-overlay-800 bg-dark  "
            style={{ backgroundImage: 'url("/img/church/25 May 2025/IMG_1030.png")' }}
          >
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start">
                  <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                    Jesus Changes Everything.
                  </h2>

                  <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                    We believe in the power of Christ to heal, restore, and transform lives. Join us and experience it
                    for yourself.
                  </p>

          
                </div>
              </div>
            </div>
          </div>

          <div
            className="swiper-slide bg-overlay bg-overlay-800 bg-dark bg-image"
            style={{ backgroundImage: 'url("/img/church/25 May 2025/IMG_1028.png")' }}
          >
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center justify-content-center align-self-center">
                  <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                    Faith. Family. Purpose.
                  </h2>

                  <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                    We exist to help you grow in faith, build strong families, and live out your God-given purpose every
                    day.
                  </p>

                  {/* <div className="animate__animated animate__slideInUp animate__delay-3s">
                    <a
                      data-glightbox
                      href="/media/movie.mp4"
                      className="btn btn-circle btn-white btn-play ripple mx-auto mb-5"
                    >
                      <i className="icn-caret-right" />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div
            className="swiper-slide bg-overlay bg-overlay-800 bg-dark bg-image"
            style={{ backgroundImage: 'url("/img/church/25 May 2025/IMG_1026.png")' }}
          >
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-5 col-xl-6 offset-xl-6 col-xxl-5 offset-xxl-6 text-center text-lg-start justify-content-center align-self-center align-items-start">
                  <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                    Come As You Are
                  </h2>

                  <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                    No matter your background or struggles, you are welcome. God’s grace is greater, and your journey
                    can start today.
                  </p>

               
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
