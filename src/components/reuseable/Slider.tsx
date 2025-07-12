import Link from 'next/link';
import NextLink from '@/components/reuseable/links/NextLink';
import Carousel from '@/components/reuseable/Carousel';
// CUSTOM DATA
import { portfolioList3 } from '@/data/portfolio';

export default function Slider() {
  return (
    <section className="wrapper bg-white">
      <div className="overflow-hidden">
        <div className="container py-14 py-md-16">
          <div className="row">
            <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center">
              <h3 className="display-4 mb-3 text-center">Growing Together in Faith</h3>
              <p className="lead fs-lg mb-10 text-center">
              Discover ministries built to guide every stage of your spiritual journey.
              </p>
            </div>
          </div>

          <div className="swiper-container grid-view nav-bottom nav-color mb-14 text-center">
            <Carousel
              pagination={false}
              className="overflow-visible pb-2"
              breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}
            >
              {portfolioList3.map((item) => (
                <div className="card shadow-lg relative overflow-hidden rounded" key={item.id}>
                  <Link href="#">
                    <div className="relative">
                      <img
                        className="img-fluid rounded w-full h-auto"
                        src={item.image['1x']}
                        srcSet={item.image['2x']}
                        alt={item.title}
                      />
                      <div className="absolute inset-0  bg-overlay bg-overlay-600 bg-image" />
                      {/* Centered Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center text-center bg-black/40 px-8">
                        <div className="text-white">
                          <h3 className="text-2xl text-white font-semibold mb-1">{item.title}</h3>
                          <p className="text-sm text-white">{item.description}</p>
                          <NextLink href="#" title={item.button} className="btn btn-primary rounded-pill" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
