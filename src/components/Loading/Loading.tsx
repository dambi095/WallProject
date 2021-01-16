import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading: React.FC = () => {
    return (
      <Spinner animation="border" role="status" variant="primary">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
};

export default Loading;