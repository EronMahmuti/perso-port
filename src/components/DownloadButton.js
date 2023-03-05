import React, { useRef } from 'react';

const DownloadButton = ({ file }) => {
  const linkRef = useRef(null);

  const handleClick = () => {
    linkRef.current.href = file.url;
    linkRef.current.download = file.name;
    linkRef.current.click();
  };

  return (
    <>
      <button className="vvd" onClick={handleClick}>
        Download CV
      </button>
      <a ref={linkRef} style={{ display: 'none' }} />
    </>
  );
};

export default DownloadButton;
