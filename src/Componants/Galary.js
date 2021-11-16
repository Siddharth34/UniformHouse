import { useState } from "react";
import images from "../Data/api-img.json";
import { Modal } from "reactstrap";

const Galary = () => {
  const [modal, setModal] = useState(false);

  const [modalImg, setModalImg] = useState();
  const toggle = () => setModal(!modal);
  const ActiveModal = ({ isOpen, toggle }) => {
    return (
      <>
        <Modal
          isOpen={isOpen}
          toggle={toggle}
          contentClassName="custom-modal-style"
        >
          <div className="img_modal">
            <img src={modalImg} className="img_o" />
          </div>
        </Modal>
      </>
    );
  };

  const [imgList, setImgList] = useState(images.resources);
  return (
    <>
      <div className="img_grid">
        {imgList.map((img, index) => (
          <img
            src={img.url}
            alt={img.public_id}
            className="img_f"
            onClick={() => {
              toggle();
              setModalImg(img.url);
            }}
          />
        ))}
      </div>
      {<ActiveModal isOpen={modal} toggle={toggle} />}
    </>
  );
};

export default Galary;
