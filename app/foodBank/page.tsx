'use client';

import { Fragment } from 'react';
import { Footer } from '@/components/blocks/footer';
import PageProgress from '@/components/common/PageProgress';
import Navbar from '@/components/blocks/navbar/Navbar';
import Link from 'next/link';
import data from '@/data/demo-27';

export default function Page() {
  return (
    <Fragment>
      <PageProgress />

      {/* <Topbar /> */}
      <header className="wrapper bg-light">
        <Navbar
          info
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent navbar-light"
          button={
            <Link href="/login" className="btn btn-sm btn-danger rounded-pill">
              Give
            </Link>
          }
        />
      </header>

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="section-frame overflow-hidden">
          <div className="wrapper bg-gray">
            <div className="container py-13 py-md-13 text-center">
              <div className="row">
                <div className="col-lg-10 col-xxl-8 mx-auto">
                  <h3 className="display-4 mb-3 text-center">It Only Takes a Little to Make a Lot</h3>
                  <p className="lead fs-lg mb-10 text-center">
                    Just like the 2 fishes and 5 loaves, your small gift can make a huge impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container pt-10 pt-md-14 pb-13 pb-md-15 mb-n14">
          <div className="row gx-lg-8 gx-xl-12 mb-10 mb-md-14 align-items-center">
            <div className="col-lg-7">
              <figure>
                <img
                  alt="contact"
                  className="img-fluid rounded-3 shadow-lg"
                  src="/img/food-donation/fd_2.png"
                  srcSet="/img/food-donation/fd_2.png 2x"
                />
              </figure>
            </div>

            <div className="col-lg-5">
              <h3 className="display-4 mb-5 ">Support the Winners Chapel Peterborough Food Bank</h3>

              <p>
                Every third Sunday, Winners Chapel Peterborough extends a hand of hope through our Food Bank at Ormiston
                Bushfield Academy. Your generous donation helps fill bags with essential food items for those in need.
              </p>

              {data.donations.map(({ id, Icon, title, description }) => (
                <div className="d-flex flex-row mb-5" key={id}>
                  <div>
                    <Icon className="icon-svg-md text-blue me-5 mt-1" />
                  </div>
                  <div>
                    <h4 className="fs-20 ls-sm">{title}</h4>
                    <p className="mb-0">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer backgroundColor="bg-gray" />
    </Fragment>
  );
}
