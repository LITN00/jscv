import React from "react";
import styled from "styled-components";
import ProfileImage from "./profile_image.jpg";

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const Central = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  
`;

const Box1 = styled.div`
  
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 944px) {
    flex-direction: column;
  }
`;


const ProfileBox = styled.div`
  padding-left: 44px;
  flex-shrink: 0;
  margin-top: 44px;
`;

const Name = styled.h2`
  font-size: 44px;
  padding-bottom: 20px;

  margin: 0;
`
const Description = styled.p`
  font-size: 20px;
`;

const PlainText = styled.p`
  font-size: 18px;
`;

const BoxHead = styled.div``;
const Box2 = styled.div`
  width: 100%;
  margin-top: 44px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Left = styled.div`
  font-size: 20px;
`;
const Right = styled.div`
  width: 80%;
  margin-left: 36px;
`;

const DurationBox = styled.div`
  padding: 8px;
`;
const DurationHead = styled.p`
  font-weight: bold;
`;
const DurationBody = styled.p`
  margin-left: 20px;
`;

const Tail = styled.div`
  width: 100%;
  height: 80px;
`;


const Border = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0,0,0,0.150000006);
  margin-top: 46px;
`;

const App = () => {
  return (
    <Page>
      <Central>
        <Box1>
          <img src={ProfileImage} alt={"profile_image"}/>
          <ProfileBox>
            <Name>
              Jinseop Im
            </Name>
            <Description>
              M.S. student  <a href="https://sites.google.com/view/kaist-via" target="_blank">
                @Vertically Integrated Architecture Research Group
              </a>
             
            </Description>
            <Description>Graduate School of AI Semiconductor</Description>
            <PlainText>Email: jinseop.im@kaist.ac.kr</PlainText>
            <PlainText>Office: N1 818 @ KAIST</PlainText>
          </ProfileBox>
        </Box1>
        <Border />
        <Box2>
          <Left>
            {"Education"}
          </Left>
          <Right>
            {/* <DurationHead>{"September 2024 - Present"}</DurationHead>
            <DurationBody>

            </DurationBody> */}
            <DurationBox>
              <DurationHead>{"B.S. in School of Electrical Engineering, KAIST"}</DurationHead>
              <DurationBody>{"2018.03 - 2023.08"}</DurationBody>
              <DurationBody>{"Minor in School of Computing"}</DurationBody>
              {/* <DurationBody style={{fontStyle: "italic"}}>{"Magna Cum Laude"}</DurationBody> */}
            </DurationBox>
          </Right>
        </Box2>
        <Border />
        <Box2>
          <Left>
            {"Experience"}
          </Left>
          <Right>
            <DurationBox>
              <DurationHead>Undergraduate Research Intern at <a href="https://sites.google.com/view/kaist-via" target="_blank">Vertically Integrated Architecture Research Group</a>, KAIST</DurationHead>
              <DurationBody>{"2023.12 - 2024.08"}</DurationBody>
            </DurationBox>
            
            <DurationBox>
              <DurationHead>Undergraduate Research Intern at <a href="https://ssl.kaist.ac.kr/" target="_blank">Semiconductor System Lab</a>, KAIST</DurationHead>
              <DurationBody>{"2023.06 - 2023.08"}</DurationBody>
            </DurationBox>

            <DurationBox>
              <DurationHead>Frontend Developer at <a href="https://selectstar.ai/" target="_blank">SelectStar</a>, Seoul</DurationHead>
              <DurationBody>{"2020.12 - 2023.02"}</DurationBody>
            </DurationBox>
            
            
          </Right>
        </Box2>
      </Central>
      <Tail />
    </Page>
  );
}

export default App;