'use client';

import { Fragment } from 'react';
import { Clock1, Clock } from 'lucide-react';
import { Footer } from '@/components/blocks/footer';
import NextLink from '@/components/reuseable/links/NextLink';
import PageProgress from '@/components/common/PageProgress';
import Navbar from '@/components/blocks/navbar/Navbar';
import Link from 'next/link';
import { useEvent } from '@/hooks/useEvents';
import Card from '@/components/blocks/card';

export default function Page() {

  const { data, error, loading } = useEvent()

  console.log("....................", { data, error, loading })

  return (
    <Fragment>
      <PageProgress />

      <header className="wrapper bg-light">
        <Navbar
          info
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent navbar-white"
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
                  <h3 className="display-4 mb-3 text-center">We Believe in Coming Together in Faith</h3>
                  <p className="lead fs-lg mb-10 text-center">
                    No matter where you are on your journey, there’s a place for you in this program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper">

          <div className="container py-15 py-md-14">
            <div className="row mb-10">
              <div className="col-lg-9 mx-auto text-center">
                <p className="mb-0 fs-lg">
                  Every moment of this event is designed to inspire, connect, and strengthen faith.
                  Come and experience any of these gatherings.
                </p>
              </div>
            </div>

            <div className="row grid-view gy-6">
              {(data?.data || []).map((item) => (
                <div className="col-md-6 col-lg-4" key={item._id}>
                  <Card className="card shadow-lg" {...item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer backgroundColor='bg-gray' />
    </Fragment>
  );
}
