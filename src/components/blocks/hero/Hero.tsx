import Carousel from '../../reuseable/Carousel';

type SlideProps = {
  title: string;
  message: string;
  status: boolean;
  imageOnly: boolean;
  secure_url: string;
  public_id: string;
  _id: string;
}

type Hero3Props = {
  data: SlideProps[];
}

export default function Hero({ data }: Hero3Props) {
  const slides = Array.isArray(data) ? data : [];
  const activeSlides = slides.filter(
    (slide: SlideProps) => slide.status
  );

  const layoutConfigs = [
    {
      layoutClass: "col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5",
      contentAlignment: "text-center text-lg-start justify-content-center align-self-center align-items-start"
    },
    {
      layoutClass: "col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto",
      contentAlignment: "text-center justify-content-center align-self-center"
    },
    {
      layoutClass: "col-md-12 offset-md-1 col-lg-12 offset-lg-9 col-xl-9 offset-xl-9 col-xxl-7 offset-xxl-6",
      contentAlignment: "text-center text-lg-start justify-content-center align-self-center align-items-start"
    }
  ];

  if (activeSlides.length === 0) {
    return (
      <div className="wrapper bg-dark bg-transparent">
        <div className="swiper-container swiper-hero dots-over">
          <Carousel slidesPerView={1} autoplay={{ delay: 7000, disableOnInteraction: false }}>
            <div className="wrapper bg-dark bg-transparent">
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
                        No matter your background or struggles, you are welcome. God's grace is greater, and your journey
                        can start today.
                      </p>
                    </div>
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

                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper bg-dark bg-transparent">
      <div className="swiper-container swiper-hero dots-over">
        <Carousel slidesPerView={1} autoplay={{ delay: 7000, disableOnInteraction: false }}>
          {activeSlides.map((slide: SlideProps, index: number) => {
            const config = layoutConfigs[index % layoutConfigs.length];

            return (
              <div
                key={slide._id}
                className="swiper-slide bg-overlay bg-overlay-800 bg-dark bg-image"
                style={{
                  backgroundImage: `url('${slide.secure_url}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="container h-100">
                  <div className="row h-100">
                    <div className={`${config.layoutClass} ${config.contentAlignment}`}>
                      <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                        {slide.title}
                      </h2>

                      <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                        {slide.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
