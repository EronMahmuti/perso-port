import React, { useState } from 'react';
import { Col, Modal } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img
          src={imgUrl}
          alt="pictures of url"
          className="default-images"
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <button onClick={handleShow} className="open-button">
            Open Project
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={imgUrl}
            alt="myProjects"
            className="projects-img"
            style={{ width: '100%' }}
          />
        </Modal.Body>
        <Modal.Footer>
          <button className="open-button" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};
