import React, { useState } from "react";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import { AiOutlineGoogle } from "react-icons/ai";
import Modal from "react-modal";
import {
  Login,
  Name,
  MailOrNumber,
  Password,
  ConfirmPassword,
  Check,
  LoginButton,
  FbButton,
  GoogleButton,
  HaveAccount,
} from "./MadolSignUpStyle";
import style from "./style.module.css";

const customStyles = {
  overlay: { zIndex: 999 },
};

interface Props {
  modalIsOpen: boolean;
  closeModal: () => void;
}

function MadolSignUp(props: Props) {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      className={style.Modal}
      style={customStyles}
    >
      <Login>
        <h3 className="title">Create Your Account</h3>
        <p className="content">Please fill all forms to continued</p>
        <Name>
          <label htmlFor="name" placeholder="example@mail">
            Full Name
          </label>
          <input type="text" name="name" id="name" placeholder="Ralph Awards" />
        </Name>
        <MailOrNumber>
          <label htmlFor="mail-number">Email or Phone Number</label>
          {/* <br /> */}
          <input
            type="text"
            name="mail-number"
            id="mail-number"
            placeholder="example@mail.com"
          />
        </MailOrNumber>
        <Password>
          <label htmlFor="password">Password</label>
          {/* <br /> */}
          <input
            type="text"
            name="password"
            id="password"
            placeholder="********"
          />
        </Password>
        <ConfirmPassword>
          <label htmlFor="confirm-password">Confirm Password</label>
          {/* <br /> */}
          <input
            type="text"
            name="confirm-password"
            id="confirm-password"
            placeholder="********"
          />
        </ConfirmPassword>

        <Check>
          <input type="checkbox" />
          <span>By signing up, you agree to</span>
          <Link href="/">
            <a>Terms & Condtion</a>
          </Link>
        </Check>

        <LoginButton>Create Account</LoginButton>
        <p className="on">on</p>
        <FbButton>
          <MdFacebook />
          <span>Continue With facebook</span>
        </FbButton>
        <GoogleButton>
          <AiOutlineGoogle />
          <span>Continue With Google</span>
        </GoogleButton>
        <HaveAccount>
          Already Have Account ?
          <Link href="/">
            <a>Log in</a>
          </Link>
        </HaveAccount>
      </Login>
    </Modal>
  );
}

export default MadolSignUp;
