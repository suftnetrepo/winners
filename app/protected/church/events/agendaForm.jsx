'use client';

import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { normalizeTime } from '@/utils/helpers';

const AgendaForm = ({ errorMessages, handleSubmit, handleChange, fields }) => {
  console.log('..............fields', fields);

  const handlePaste = (e) => {
    const pastedText = e.clipboardData.getData('text');
    handleChange('description', pastedText);
    e.preventDefault();
  };

  return (
    <Form>
      <div className="row">
        <div className="col-md-4">
          <Form.Group controlId="formLastName" className="mb-3">
            <Form.Label className="text-dark">Sequency</Form.Label>
            <Form.Select
              className="border-dark"
              aria-label="Select Order"
              value={fields?.sequency_no}
              onChange={(e) => handleChange('sequency_no', e.target.value)}
            >
              <option>Select</option>
              {[...Array(20)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </Form.Select>
            {errorMessages?.sequency_no?.message && (
              <span className="text-danger fs-13 ps-1">{errorMessages?.sequency_no?.message}</span>
            )}
          </Form.Group>
        </div>
        <div className="col-md-8">
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label className="text-dark"> Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="name"
              value={fields?.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="border-dark"
              maxLength={50}
            />
            {errorMessages?.title?.message && (
              <span className="text-danger fs-13 ms-2">{errorMessages?.title?.message}</span>
            )}
          </Form.Group>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6">
              <Form.Group controlId="formStartDate">
                <Form.Label className="text-dark">Start Time</Form.Label>
                <Form.Control
                  type="time"
                  value={fields?.start_time ? normalizeTime(fields?.start_time) : fields?.start_time}
                  onChange={(e) => handleChange('start_time', e.target.value)}
                  className="border-dark"
                />
              </Form.Group>
              {errorMessages?.start_time?.message && (
                <span className="text-danger fs-13">{errorMessages?.start_time?.message}</span>
              )}
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formEndDate">
                <Form.Label className="text-dark">End Time</Form.Label>
                <Form.Control
                  type="time"
                  value={fields?.end_time ? normalizeTime(fields?.end_time) : fields?.end_time}
                  onChange={(e) => handleChange('end_time', e.target.value)}
                  className="border-dark"
                />
              </Form.Group>
              {errorMessages?.end_time?.message && (
                <span className="text-danger fs-13">{errorMessages?.end_time?.message}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label className="text-dark"> Facilitator</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter facilitator"
            name="name"
            value={fields?.facilitator}
            onChange={(e) => handleChange('facilitator', e.target.value)}
            className="border-dark"
            maxLength={50}
          />
          {errorMessages?.facilitator?.message && (
            <span className="text-danger fs-13 ms-2">{errorMessages?.facilitator?.message}</span>
          )}
        </Form.Group>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Form.Group className="mb-3">
            <Form.Label className="text-dark">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter task description"
              value={fields.description}
              onPaste={handlePaste}
              onChange={(e) => handleChange('description', e.target.value)}
              className="border-dark"
              maxLength={200}
            />
            {errorMessages?.description?.message && (
              <span className="text-danger fs-13">{errorMessages.description?.message}</span>
            )}
          </Form.Group>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <Form.Group controlId="status" className="d-flex d-flex justify-content-start align-items-start">
            <Form.Check
              type="checkbox"
              id="status"
              className="border-dark"
              checked={fields?.status}
              value={fields?.status}
              onChange={(e) => handleChange('status', e.target.checked)}
            />
            <Form.Label className="text-dark ms-1"> Status</Form.Label>
            {errorMessages?.status?.message && (
              <span className="text-danger fs-13">{errorMessages?.status?.message}</span>
            )}
          </Form.Group>
        </div>
        <div className="col-md-6"> </div>
      </div>

      <div className="d-flex justify-content-start">
        <Button type="button" variant="primary" onClick={() => handleSubmit()}>
          Save Changes
        </Button>
      </div>
    </Form>
  );
};

export default AgendaForm;
