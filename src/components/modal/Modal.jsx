import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: "300px",
    zIndex: "100000",
    paddingTop: "40px",
    paddingBottom: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const ModalComponent = ({
  setIsModalOpen,
  isModalOpen,
}) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div
      style={{ zIndex: "10000" }}
    >
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          onClick={closeModal}
          style={{
            backgroundColor: "transparent",
            position: "absolute",
            top: "0",
            right: "0",
            color: "#ff5a3c",
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IoClose size={25} />
        </button>

        <input style={{
          height: "50px",
        }} type="text" onChange={(e) => setName(e.target.value)} placeholder="Name"></input>

        <input style={{
          height: "50px",
          width: "100%",
          border: isFocused ? '1px solid #ff5a3c' : '2px solid #e4ecf2',
          padding: "0 20px",
          fontSize: "14px",
          color: "#5c727d",
        }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type="tel" onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number"></input>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }} className="btn-wrapper animated">
          <div
            style={{
              height: "40px",
              width: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {
              sessionStorage.setItem("name", name);
              sessionStorage.setItem("phone", phone);
              closeModal();
              if (sessionStorage.getItem("name") && sessionStorage.getItem("phone")) {
                window.open("https://drive.google.com/uc?export=download&id=0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx");
              }
            }}
            href="/service"
            className="theme-btn-1 btn btn-effect-1"
          >
            SUBMIT
          </div>
        </div>
      </Modal>
    </div>
  );
};
