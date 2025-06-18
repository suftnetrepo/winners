'use client';

import React from 'react';
import { Button } from 'react-bootstrap';
import { Container, Row, Col, ListGroup, Table } from 'react-bootstrap';
import { useParams, useRouter } from 'next/navigation';
import SimpleBar from 'simplebar-react';
import { usePushNotification } from '../../../../../hooks/usePushNotification';
import ErrorDialogue from '../../../../../src/components/elements/errorDialogue';
import { MdArrowBack } from 'react-icons/md';
import Tooltip from '@mui/material/Tooltip';
import { FaLocationDot } from 'react-icons/fa6';
import { TiMap } from 'react-icons/ti';
import { formatDateTime } from '../../../../../utils/helpers';

const SiteView = () => {
  const router = useRouter();
  const { id } = useParams();
  const {
    data,
    notifications,
    loading,
    error,
    handleReset,
    handleMultiplePushNotification,
    handleSinglPushNotification
  } = usePushNotification(id);

  const onHandleMultiple = () => {
    const body = {
      data: data
        .filter((j) => j.fcm !== '')
        .map((item) => {
          return {
            projectId: id,
            userId: item.id,
            fcm: item?.fcm,
            role: item?.role,
            name: item?.name
          };
        })
    };

    handleMultiplePushNotification(body).then((result) => {
      console.log('.................result', result);
    });
  };

  const onHandleSingle = (user) => {
    const body = {
      projectId: id,
      userId: user?.id,
      fcm: user?.fcm,
      role: user?.role,
      name: user?.name
    };

    handleSinglPushNotification(body).then((result) => {
      console.log('.................result', result);
    });
  };

  return (
    <>
      <div className="d-flex justify-content-start align-items-center mb-3 ms-3 me-5">
        <Button variant="outline-secondary" onClick={() => router.push(`/protected/integrator/project`)}>
          <MdArrowBack size={24} /> Back
        </Button>
        <h3 className="card-title ms-2">Engineers on Site</h3>
      </div>
      <Container fluid>
        <Row>
          <Col md={3} className="bg-white sidebar">
            <>
              <div className="d-flex justify-content-end align-items-center mb-1 ">
                <div>
                  <Tooltip title="View Engineers locations" arrow>
                    <Button
                      type="button"
                      variant="primary"
                      onClick={() => onHandleMultiple()}
                      className="d-flex justify-content-between align-items-center"
                    >
                      View All
                      <FaLocationDot size={30} color="#fff" className="pointer ps-2" />
                    </Button>
                  </Tooltip>
                </div>
              </div>
              <SimpleBar>
                <ListGroup>
                  {data?.map((team, index) => {
                    return (
                      <ListGroup.Item
                        key={`${index}-${team._id}`}
                        as="li"
                        className="d-flex justify-content-between align-items-center"
                      >
                        <div className="d-flex align-items-center">
                          {team.id.secure_url ? (
                            <img
                              src={team.id.secure_url}
                              alt={`${team?.id.first_name} ${team?.id.last_name}`}
                              className="rounded-circle me-2"
                              width="40"
                              height="40"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/img/blank.png';
                              }}
                            />
                          ) : (
                            <img
                              src={'http://'}
                              alt={`${team?.id.first_name} ${team?.id.last_name}`}
                              className="rounded-circle me-2"
                              width="60"
                              height="60"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/img/blank.png';
                              }}
                            />
                          )}
                          <div className="d-flex flex-column justify-content-start align-items-start">
                          <span>{team?.id.first_name} {team?.id.last_name}</span>
                          <span className={`badge bg-primary transparent`}>{team.id.role}</span>
                          </div>
                        </div>
                        <Tooltip title="View Engineer location" arrow>
                          <span className="p-0">
                            <FaLocationDot
                              size={30}
                              className="pointer"
                              onClick={() => team.id.fcm && onHandleSingle(team.id)}
                            />
                          </span>
                        </Tooltip>
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </SimpleBar>
            </>
          </Col>

          <Col md={9} style={{ height: '100vh', padding: 0 }}>
            <div className="d-flex justify-content-start align-items-start ps-2 pe-2 ">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Location</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {notifications.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{formatDateTime(item.updatedAt)}</td>
                        <td>{item.name}</td>
                        <td>{item.role}</td>
                        <td>{item.completeAddress}</td>
                        <td>
                          {' '}
                          <Tooltip title="View location in map" arrow>
                            <span className="p-0">
                              <TiMap
                                size={30}
                                className="pointer ms-2"
                                onClick={() => {
                                  const googleMapsUrl = `https://www.google.com/maps?q=${item.latitude},${item.longitude}`;
                                  window.open(googleMapsUrl, '_blank');
                                }}
                              />
                            </span>
                          </Tooltip>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
      {error && <ErrorDialogue showError={error} onClose={() => handleReset()} />}
    </>
  );
};

export default SiteView;
