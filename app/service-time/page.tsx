'use client';

import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //

import React, { useState } from 'react';
import { Calendar, MapPinHouse, Clock1, Clock, Video, Users, ChevronDown, ChevronUp } from 'lucide-react';
import Team from '@/components/blocks/team/Team';
import Target from '@/icons/lineal/Target';
import AwardTwo from '@/icons/lineal/AwardTwo';

import Footer  from '@/components/blocks/footer/Footer';
import FigureImage from '@/components/reuseable/FigureImage';
import NextLink from '@/components/reuseable/links/NextLink';
import NavBarLink from '@/components/reuseable/links/NavbarLink';
import AboutUs from '@/components/blocks/about';
import PageProgress from '@/components/common/PageProgress';
import Topbar from '@/components/elements/Topbar';
import Navbar from '@/components/blocks/navbar/Navbar';
import Link from 'next/link';
import AccordionList from '@/components/common/AccordionList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';

type Service = {
  _id: string;
  title: string;
  start_time: string;
  end_time: string;
  description: string;
  location?: string;
  remote: boolean;
  remote_platform?: 'Zoom' | 'Teams' | 'YouTube' | string;
  remote_link?: string;
  days: number[]; // 0 – 6, Sun – Sat
  agenda: AgendaItem[];
  sequency_no: number;
};

type AgendaItem = {
  title: string;
  start_time: string;
  end_time: string;
  description?: string;
  facilitator?: string;
  sequency_no: number;
};

const weeklyServices: Service[] = [
  {
    _id: 'w1',
    title: 'Bible Study',
    start_time: '19:00',
    end_time: '20:30',
    description: 'Deep dive into scripture',
    location: 'Church Hall',
    remote: true,
    remote_platform: 'Zoom',
    remote_link: '#',
    days: [2], // Wednesday
    agenda: [
      {
        title: 'Opening Prayer',
        start_time: '19:00',
        end_time: '19:05',
        sequency_no: 1
      },
      {
        title: 'Study Session',
        start_time: '19:05',
        end_time: '20:15',
        sequency_no: 2
      },
      {
        title: 'Q & A',
        start_time: '20:15',
        end_time: '20:30',
        sequency_no: 3
      }
    ],
    sequency_no: 1
  }
];

export default function Page() {
  const [activeTab, setActiveTab] = useState<'commemorative' | 'weekly'>('commemorative');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleExpanded = (id: string) => setExpandedService((prev) => (prev === id ? null : id));
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
                  <h3 className="display-4 mb-3 text-center">Worship With Us</h3>
                  <p className="lead fs-lg mb-10 text-center">
                    Come and be refreshed in God's presence during our uplifting service times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white py-4">
          <div className="container pt-11 pt-md-13 pb-11 pb-md-13 text-center">
            <div className="row">
              <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
                <h3 className="display-1 fs-24 mb-1 px-md-15 px-lg-0">Sunday Services</h3>
                <div className="d-flex justify-content-center items-center mb-1">
                  <div className="d-flex align-items-center me-8">
                    <Clock className="me-2" size={32} />
                    <span className="fs-16 text-dark">Start - 7am</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <Clock1 className="me-2" size={32} />
                    <span className="fs-16 text-dark">End - 8:3pm</span>
                  </div>
                </div>
                <div className="d-flex justify-content-center items-center mb-1">
                  <MapPinHouse className="me-2" size={30} />
                  <span className="fs-18 text-dark"> Ormiston Bushfield Academy Peterborough PE2 5RQ </span>
                </div>
                <p className="lead fs-17 lh-sm mb-7 mx-md-13 mx-lg-10">
                  We are a creative company that focuses on long term relationships with customers.
                </p>
                <NextLink href="#" title="Join Online" className="btn btn-soft-primary rounded-pill" />
              </div>
            </div>
            <div className="row mt-8">
              <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
                <h3 className="display-1 fs-24 mb-1 px-md-15 px-lg-0">Wednesday Study</h3>
                <div className="d-flex justify-content-center items-center mb-1">
                  <div className="d-flex align-items-center me-8">
                    <Clock className="me-2" size={32} />
                    <span className="fs-16 text-dark">Start - 7am</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <Clock1 className="me-2" size={32} />
                    <span className="fs-16 text-dark">End - 8:3pm</span>
                  </div>
                </div>
                <div className="d-flex justify-content-center items-center mb-1">
                  <MapPinHouse className="me-2" size={30} />
                  <span className="fs-18 text-dark"> Ormiston Bushfield Academy Peterborough PE2 5RQ </span>
                </div>
                <p className="lead fs-17 lh-sm mb-7 mx-md-13 mx-lg-10">
                  We are a creative company that focuses on long term relationships with customers.
                </p>
                <NextLink href="#" title="Join Online" className="btn btn-soft-primary rounded-pill" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer backgroundColor='bg-gray'  />
    </Fragment>
  );
}
