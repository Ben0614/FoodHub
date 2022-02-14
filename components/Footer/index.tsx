import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerData } from "../../data";
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

// sns icon
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
        {/* 桌機 flex */}
        <ComputerFlex>
          {/* 基本介紹 */}
          <div className="introduction">
            <Image src="/images/logo.png" alt="" height="45px" width="45px" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
            {/* 下載點 */}
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
          {/* item區域 */}
          <ItemGroup>
            {footerData.map((v, i) => {
              return (
                <Item key={i}>
                  <ItemTitle>{v.title}</ItemTitle>
                  {footerData[i].link.map((v, ind) => {
                    return (
                      // 最後一組不是link 要分開
                      <div key={ind}>
                        {i === 2 ? (
                          <p>{v}</p>
                        ) : (
                          <Link href="/">
                            <a>
                              <p>{v}</p>
                            </a>
                          </Link>
                        )}
                      </div>
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
