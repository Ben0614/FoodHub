import React, { useState } from "react";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import { AiOutlineGoogle } from "react-icons/ai";
import Modal from "react-modal";
import MadolSignUp from "../MadolSignUp";
import {
  Login,
  LoginMail,
  LoginPassword,
  LoginButton,
  FbButton,
  GoogleButton,
  SignUp,
  ResetPassword,
} from "./MadolLoginStyle";
import style from "./style.module.css";

const customStyles = {
  overlay: { zIndex: 999, background: "rgba(0,0,0,.3)" },
};

interface Props {
  modalIsOpen: boolean;
  closeModal: () => void;
}

function MadolLogin(props: Props) {
  const [modalSignUpIsOpen, setModalSignUpIsOpen] = useState(false);

  function openModalSignUpIsOpen() {
    setModalSignUpIsOpen(true);
  }

  function closeModalSignUpIsOpen() {
    setModalSignUpIsOpen(false);
  }

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      className={style.Modal}
      style={customStyles}
    >
      <Login>
        <h3 className="title">Welcome To Ecommerce</h3>
        <p className="content">Log in with email & password</p>
        <LoginMail>
          <label htmlFor="madol-email" placeholder="example@mail">
            Email or Phone Number
          </label>
          <input
            type="text"
            name="madol-email"
            id="madol-email"
            placeholder="example@mail"
          />
        </LoginMail>
        <LoginPassword>
          <label htmlFor="madol-password">Password</label>
          {/* <br /> */}
          <input
            type="text"
            name="madol-password"
            id="madol-password"
            placeholder="example@password"
          />
        </LoginPassword>
        <LoginButton>Login</LoginButton>
        <p className="on">on</p>
        <FbButton>
          <MdFacebook />
          <span>Continue With facebook</span>
        </FbButton>
        <GoogleButton>
          <AiOutlineGoogle />
          <span>Continue With Google</span>
        </GoogleButton>
        <SignUp>
          Do not have account?{" "}
          <span onClick={openModalSignUpIsOpen}>Sign Up</span>
        </SignUp>
        <MadolSignUp
          modalIsOpen={modalSignUpIsOpen}
          closeModal={closeModalSignUpIsOpen}
        />
        <ResetPassword>
          Forgot Your Password
          <Link href="/">
            <a>Reset It</a>
          </Link>
        </ResetPassword>
      </Login>
    </Modal>
  );
}

export default MadolLogin;
