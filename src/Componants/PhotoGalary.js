import React, { useState } from "react";
import { Container, Row, Col, Modal } from "reactstrap";
import GallaryImg from "../Data/GallaryImg";
import "../App.css";

const PhotoGalary = () => {
  const [modal, setModal] = useState(false);

  const [modalImg, setModalImg] = useState();

  const toggle = () => setModal(!modal);

  const ActiveModal = ({ isOpen, toggle }) => {
    return (
      <>
        <Modal isOpen={isOpen} toggle={toggle} className="modal_div">
          <div className="img-modal">
            <img src={modalImg} />
          </div>
        </Modal>
      </>
    );
  };

  return (
    <Container>
      <Row className="gallary_div">
        {GallaryImg.map((img, index) => {
          return (
            <Col
              key={index}
              className="img_col"
              onClick={() => {
                toggle();
                setModalImg(img.imgsrc);
              }}
            >
              <img src={img.imgsrc} />
            </Col>
          );
        })}
      </Row>

      {<ActiveModal isOpen={modal} toggle={toggle} />}
    </Container>
  );
};

export default PhotoGalary;
