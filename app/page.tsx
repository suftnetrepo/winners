'use client';

import { Fragment } from 'react';
import type { NextPage } from 'next';
import PageProgress from '@/components/common/PageProgress';
import { Footer } from '@/components/blocks/footer';
import Hero from '@/components/blocks/hero/Hero';
import useLightBox from '@/hooks/useLightBox';
import { Navbar } from '@/components/blocks/navbar';
import Tiles from '@/components/blocks/tiles';
import Fact from '@/components/reuseable/Fact';
import Talk from '@/components/reuseable/Contact2';
import Slider from '@/components/reuseable/Slider';
import { useSettings } from '@/hooks/useSettings';

const Home: NextPage = () => {
  useLightBox();
  const { data, error, loading } = useSettings()

  return (
    <Fragment>
      <PageProgress />

      <header className="wrapper">
        <Navbar fancy navClassName="navbar navbar-expand-lg " />
      </header>

      <main className="content-wrapper">
        <Hero data={data?.data?.sliders} />
        <div className=" pb-12 pt-12 bg-light">
          <Tiles />
        </div>
        <Fact data={data?.data?.prophetic_focus} />
        <div className="d-flex justify-content-center py-18 bg-light">
          <Talk data={data?.data?.pastor_section} />
        </div>
        <Slider />
      </main>
      <Footer backgroundColor='bg-light' />
    </Fragment>
  );
};

export default Home;
