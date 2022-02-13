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

// css 最外層的
const customStyles = {
  overlay: { zIndex: 999, background: "rgba(0,0,0,.3)" },
};

interface Props {
  modalIsOpen: boolean;
  closeModal: () => void;
}

function MadolLogin(props: Props) {
  // sign up模態框狀態
  const [modalSignUpIsOpen, setModalSignUpIsOpen] = useState(false);

  // 開啟
  function openModalSignUpIsOpen() {
    setModalSignUpIsOpen(true);
  }
  // 關閉
  function closeModalSignUpIsOpen() {
    setModalSignUpIsOpen(false);
  }

  return (
    // 在這裡添加css內層的樣式
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
          <input
            type="text"
            name="madol-password"
            id="madol-password"
            placeholder="example@password"
          />
        </LoginPassword>
        {/* 登入按鈕 */}
        <LoginButton>Login</LoginButton>
        <p className="on">on</p>
        {/* fb按鈕 */}
        <FbButton>
          <MdFacebook />
          <span>Continue With facebook</span>
        </FbButton>
        {/* google按鈕 */}
        <GoogleButton>
          <AiOutlineGoogle />
          <span>Continue With Google</span>
        </GoogleButton>
        {/* sign up */}
        <SignUp>
          Do not have account?
          {/* 打擊開啟sign up模態框 */}
          <span onClick={openModalSignUpIsOpen}>Sign Up</span>
        </SignUp>
        {/* sign up 模態框 */}
        <MadolSignUp
          modalIsOpen={modalSignUpIsOpen}
          closeModal={closeModalSignUpIsOpen}
        />
        {/* 最底下文字 */}
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
