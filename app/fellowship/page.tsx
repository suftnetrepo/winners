'use client';

import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import Team from '@/components/blocks/team/Team';
import Target from '@/icons/lineal/Target';
import AwardTwo from '@/icons/lineal/AwardTwo';

import { Footer } from '@/components/blocks/footer';
import FigureImage from '@/components/reuseable/FigureImage';
import NextLink from '@/components/reuseable/links/NextLink';
import NavBarLink from '@/components/reuseable/links/NavbarLink';
import AboutUs from '@/components/blocks/about';
import PageProgress from '@/components/common/PageProgress';
import Topbar from '@/components/elements/Topbar';
import Navbar from '@/components/blocks/navbar/Navbar';
import Link from 'next/link';
import AccordionList from '@/components/common/AccordionList';
import { Clock, Clock1, Calendar } from 'lucide-react';

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
                  <p className="lead fs-lg mb-10 text-center">
                    Discover the joy of gathering in love, prayer, and the Word — right where you live.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container pt-13 pb-15 pb-md-17 py-lg-16 ps-lg-15 pe-xxl-16">

          <h6 className="display-4 mb-2 px-lg-12 px-xl-18 text-center">
            Join others in faith at the nearest Winners Satellite Fellowship.
          </h6>
          <div className="text-center d-flex align-items-center justify-center">
            <Calendar className="me-2" size={32} />
            <span className="fs-25 text-dark">Every Saturday </span>
          </div>
          <div className="d-flex justify-content-center items-center mb-8">
            <div className="d-flex align-items-center me-2">
              <Clock className="me-2" size={32} />
              <span className="fs-25 text-dark">Start - 7am</span>
            </div>
            <div className="d-flex align-items-center">
              <Clock1 className="me-2" size={32} />
              <span className="fs-25 text-dark">End - 8:3pm</span>
            </div>
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Address</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hampton</td>
                  <td>123 Main St, City, State</td>
                  <td>07540151267</td>
                </tr>
                <tr>
                  <td>Fletton</td>
                  <td>456 Elm St, City, State</td>
                  <td>07709 919917</td>
                </tr>
                <tr>
                  <td>Dogsthrope</td>
                  <td>789 Oak St, City, State</td>
                  <td>07765655436</td>
                </tr>
                <tr>
                  <td>Orton</td>
                  <td>321 Pine St, City, State</td>
                  <td>07525603912</td>
                </tr>
                <tr>
                  <td>Whittlesey</td>
                  <td>654 Maple St, City, State</td>
                  <td>07848194738</td>
                </tr>
                <tr>
                  <td>Winners Fellowship 6</td>
                  <td>987 Cedar St, City, State</td>
                  <td>(222) 654-3210</td>
                </tr>
                <tr>
                  <td>Cardea</td>
                  <td>159 Birch St, City, State</td>
                  <td>07915647119</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer backgroundColor="bg-gray" />
    </Fragment>
  );
}
