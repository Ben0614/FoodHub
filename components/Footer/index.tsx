import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import { MdFacebook } from "react-icons/md";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineGoogle,
} from "react-icons/ai";
import {
  FooterWrap,
  Download,
  ItemGroup,
  Item,
  ItemTitle,
  Sns,
  ComputerFlex,
} from "./FooterStyle";

const FooterData = [
  {
    title: "About Us",
    link: [
      "Careers",
      "Our Stores",
      "Our Cares",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Customer Care",
    link: [
      "Help Center",
      "How to Buy",
      "Track Your Order",
      "Corporate & Bulk Purchasing",
      "Returns & Refunds",
    ],
  },
  {
    title: "Contact Us",
    link: [
      "Jalalabad 20/1, Shah Farid Road Sylhet, Bangladesh. Email: uilib@gmail.com Phone: +880 1123 456 780",
      "Sylhet, Bangladesh.",
      "Email: uilib@gmail.comr",
      "Phone: +880 1123 456 780",
    ],
  },
];

const sns = [
  <MdFacebook key={0} />,
  <AiOutlineTwitter key={1} />,
  <AiOutlineInstagram key={2} />,
  <AiFillYoutube key={3} />,
  <AiOutlineGoogle key={4} />,
];

function Footer() {
  return (
    <FooterWrap>
      <Container>
        <ComputerFlex>
          <div className="introduction">
            <Image src="/images/logo.png" alt="" height="45px" width="45px" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
            <Download>
              <p>Download App from</p>
              <div className="load-point">
                <div className="google-play">
                  <Image
                    src="/images/google-play.png"
                    alt=""
                    height={45}
                    width={120}
                  />
                </div>
                <div className="app-store">
                  <Image
                    src="/images/app-store.png"
                    alt=""
                    height={45}
                    width={120}
                  />
                </div>
              </div>
            </Download>
          </div>
          <ItemGroup>
            {FooterData.map((v, i) => {
              return (
                <Item key={i}>
                  <ItemTitle>{v.title}</ItemTitle>
                  {FooterData[i].link.map((v, i) => {
                    return (
                      <Link href="/" key={i}>
                        <a>
                          <p>{v}</p>
                        </a>
                      </Link>
                    );
                  })}
                </Item>
              );
            })}
          </ItemGroup>
        </ComputerFlex>
        <Sns>
          {sns.map((v, i) => {
            return (
              <div className="link" key={i}>
                {v}
              </div>
            );
          })}
        </Sns>
      </Container>
    </FooterWrap>
  );
}

export default Footer;
