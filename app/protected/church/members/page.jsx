'use client';

import React, { useMemo, useState } from 'react';
import { Table } from '../../../../src/components/elements/table/table';
import { Button } from 'react-bootstrap';
import { useMember } from '../../../../hooks/useMember';
import { MdDelete } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';
import DeleteConfirmation from '../../../../src/components/elements/ConfirmDialogue';
import ErrorDialogue from '../../../../src/components/elements/errorDialogue';
import useDebounce from '../../../../hooks/useDebounce';
import RenderUserOffcanvas from './renderOffcanvas';
import Tooltip from '@mui/material/Tooltip';
import { capitalizeFirstLetter, getStatusBadgeClass } from '@/utils/helpers';

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [show, setShow] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const {
    data,
    error,
    fields,
    success,
    loading,
    totalCount,
    handleFetch,
    handleDelete,
    handleEdit,
    handleSave,
    handleReset,
    handleChange,
    handleSelect
  } = useMember(debouncedSearchQuery);

  const handleClose = () => {
    handleReset();
    setShow(false);
  };
  const handleShow = () => {
    handleReset();
    setShow(true);
  };

  const columns = useMemo(
    () => [
      { Header: 'Firstname', accessor: 'first_name', sortType: 'basic' },
      { Header: 'Lastname', accessor: 'last_name', sortType: 'basic' },
      { Header: 'Mobile', accessor: 'mobile', sortType: 'basic' },
      { Header: 'Email', accessor: 'email' },
      {
        Header: 'Role',
        accessor: 'role',
        headerClassName: { textAlign: 'center' },
        Cell: ({ value }) => (
          <div className="d-flex justify-content-start align-items-center">
            <span >{capitalizeFirstLetter(value)}</span>
          </div>
        )
      },
      {
        Header: 'Status',
        accessor: 'status',
        headerClassName: { textAlign: 'center' },
        Cell: ({ value }) => (
          <div className="d-flex justify-content-start align-items-center">
            <span className={`badge ${getStatusBadgeClass(value)}`}>{capitalizeFirstLetter(value)}</span>
          </div>
        )
      },
      {
        Header: 'Actions',
        disableSortBy: true,
        className: 'center',
        Cell: ({ row }) => (
          <div className="d-flex justify-content-center align-items-center">
            <Tooltip title="Edit Member" arrow>
              <span className="p-0">
                <TiEdit
                  size={30}
                  className="pointer me-2"
                  onClick={() => {
                    handleShow();
                    handleSelect(row.original);
                  }}
                />
              </span>
            </Tooltip>
            <Tooltip title="Delete Member" arrow>
              <span className="p-0">
                <DeleteConfirmation
                  onConfirm={async (id) => {
                    handleDelete(id);
                  }}
                  onCancel={() => {}}
                  itemId={row.original._id}
                >
                  <MdDelete size={30} className="pointer" />
                </DeleteConfirmation>
              </span>
            </Tooltip>
          </div>
        )
      }
    ],
    []
  );

  return (
    <>
      <div className={`ms-5 me-5 mt-2 ${!loading ? 'overlay__block' : null}`}>
        <div className="card-body">
          <h5 className="card-title ms-2 mb-2">Members</h5>
          <div className="d-flex justify-content-between align-items-center mb-3">
            {/* Search Box */}
            <input
              type="text"
              className="form-control w-25"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="submit"
              size="sm"
              onClick={() => {
                handleShow();
              }}
            >
              + Add Member
            </Button>
          </div>
          <Table data={data} columns={columns} pageCount={totalCount} loading={loading} fetchData={handleFetch} />
        </div>
      </div>
      {!loading && <span className="overlay__block" />}
      {error && <ErrorDialogue showError={error} onClose={() => {}} />}
      <RenderUserOffcanvas
        handleClose={handleClose}
        handleChange={handleChange}
        show={show}
        setShow={setShow}
        fields={fields}
        success={success}
        handleReset={handleReset}
        handleEdit={handleEdit}
        handleSave={handleSave}
      />
    </>
  );
};

export default Page;
