'use client';

import { Fragment } from 'react';
import type { NextPage } from 'next';
import PageProgress from '@/components/common/PageProgress';
import { Footer } from '@/components/blocks/footer';
import Hero from '@/components/blocks/hero/Hero';
import useLightBox from '@/hooks/useLightBox';
import { Navbar } from '@/components/blocks/navbar';
import PrayerRequestForm from '@/components/elements/prayerform';
import Tiles from '@/components/blocks/tiles';
import Fact from '@/components/reuseable/Fact';
import Talk from '@/components/reuseable/Contact2';
import Slider from '@/components/reuseable/Slider';
import { useSettings } from '@/hooks/useSettings';

const Home: NextPage = () => {
  useLightBox();
  const { data, error, loading } = useSettings()


  console.log("....", {
    data, error, loading
  })

  return (
    <Fragment>
      <PageProgress />

      <header className="wrapper">
        <Navbar fancy navClassName="navbar navbar-expand-lg navbar-light navbar-bg-light " />
      </header>

      <main className="content-wrapper">
        <Hero data={data?.data?.sliders} />
        <div className="container pt-10 pt-md-14 pb-13 pb-md-15 mb-n14">
          <Tiles />
        </div>
        <Fact data={data?.data?.prophetic_focus} />
        <div className="container pt-md-18 pb-md-18 ">
          <Talk data={data?.data?.pastor_section} />
        </div>
        <Slider />
        <div className="container  pt-md-9 pb-13 pb-md-15 mb-n14">
          <PrayerRequestForm />
        </div>
      </main>

      <Footer backgroundColor='bg-light' />
    </Fragment>
  );
};

export default Home;
