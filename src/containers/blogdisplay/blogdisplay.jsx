import React from 'react';

const Blogdisplay = ({ title, text, date, imageLink }) => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src={imageLink}
        alt="Banner"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      />
      <div
        style={{
          position: 'relative',
          marginTop: '20px', // Adjust the spacing as needed
        }}
      >
        <h2>{title}</h2>
        <p>{text}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Blogdisplay;
