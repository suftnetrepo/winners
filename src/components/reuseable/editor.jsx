import React from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

export default function Editor({ onChange, value }) {
    return <ReactQuill theme="snow" value={value} onChange={onChange} />;
}