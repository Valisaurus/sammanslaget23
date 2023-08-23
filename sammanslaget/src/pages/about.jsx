import Layout from "@/components/Layout";
import styled from "styled-components";
import Image from "next/image";
import Img from "../assets/daim.png";


const StyledWrapperAbout = styled.div`
  background-color: white;
  height: 100%;
  //width: 100;
  display: flex;
  flex-direction: row;
  margin: auto;
  padding-left: 200px;
  flex-wrap: wrap;
  gap: 50px;
`;

const StyledNameAbout = styled.div`
  background-color: #ffffff;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
`;
const StyledAbout = styled.div`
  background-color: #ffffff;
  width: 500px;
  height: 100px;
  display: flex;
  align-items: center;
  padding-top: 0;
`;

const About = () => {
  return (
    <>
      <Layout>
        <h1>About</h1>
        <StyledWrapperAbout>
          <StyledNameAbout>
            <h2>Elisabet</h2>
            <p>UX-Designer </p>
            <StyledAbout>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              {
                <Image
                  src={Img}
                  alt="animated person"
                  height="200"
                  width="200"
                />
              }
            </StyledAbout>
          </StyledNameAbout>

          <StyledNameAbout>
            <h2>Nina</h2>
            <p>UX-Designer </p>
            <StyledAbout>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              {
                <Image
                  src={Img}
                  alt="animated person"
                  height="200"
                  width="200"
                />
              }
            </StyledAbout>
          </StyledNameAbout>

          <StyledNameAbout>
            <h2>Alfred</h2>
            <p>Webutvecklare</p>
            <StyledAbout>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              {
                <Image
                  src={Img}
                  alt="animated person"
                  height="200"
                  width="200"
                />
              }
            </StyledAbout>
          </StyledNameAbout>

          <StyledNameAbout>
            <h2>Vali</h2>
            <p>Webbutvecklare</p>
            <StyledAbout>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              {
                <Image
                  src={Img}
                  alt="animated person"
                  height="200"
                  width="200"
                />
              }
            </StyledAbout>
          </StyledNameAbout>

          <StyledNameAbout>
            <h2>Lucas</h2>
            <p>Spelprogrammerare</p>
            <StyledAbout>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              {
                <Image
                  src={Img}
                  alt="animated person"
                  height="200"
                  width="200"
                />
              }
            </StyledAbout>
          </StyledNameAbout>
        </StyledWrapperAbout>
      </Layout>
    </>
  );

};

export default About;
