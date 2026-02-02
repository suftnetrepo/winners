'use client';

import { Fragment } from 'react';
import { Footer } from '@/components/blocks/footer';
import PageProgress from '@/components/common/PageProgress';
import Navbar from '@/components/blocks/navbar/Navbar';
import Link from 'next/link';
import { Clock, Clock1, Calendar } from 'lucide-react';
import { useFellowship } from '@/hooks/useFellowship';

export default function Page() {
  const { data, error, loading } = useFellowship()

  console.log("..............data", data)

  return (
    <Fragment>
      <PageProgress />

      <header className="wrapper bg-light">
        <Navbar
          info
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent navbar-light"
          button={
            <Link href="/give" className="btn btn-sm btn-danger rounded-pill">
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
                  <h3 className="display-4 mb-3 text-center">Winners in Your Neighborhood</h3>
                  <p className="lead fs-lg text-center">
                    Discover the joy of gathering in love, prayer, and the Word — right where you live.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container pt-13 pb-15 pb-md-17 py-lg-16 ps-lg-15 pe-xxl-16">
          <p className="fs-20 text-dark mb-2 px-lg-12 px-xl-18 text-center muted">
            Join others in faith at the nearest Winners Satellite Fellowship.
          </p>
          <div className="text-center d-flex align-items-center justify-center">
            <Calendar className="me-2" size={32} />
            <span className="fs-20 text-dark">Every Saturday </span>
          </div>
          <div className="d-flex justify-content-center items-center mb-8">
            <div className="d-flex align-items-center me-2">
              <Clock className="me-2" size={32} />
              <span className="fs-20 text-dark">Start - 7am</span>
            </div>
            <div className="d-flex align-items-center">
              <Clock1 className="me-2" size={32} />
              <span className="fs-20 text-dark">End - 8:3pm</span>
            </div>
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Contact</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {
                  data?.data?.map((j, i) => (
                    <tr key={i}>
                      <td>{j.name}</td>
                      <td>{j.mobile}</td>
                      <td>{j.completeAddress}</td>

                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer backgroundColor="bg-gray" />
    </Fragment>
  );
}
