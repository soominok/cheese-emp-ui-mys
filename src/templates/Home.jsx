import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { Link } from 'react-router-dom'; //eslint-disable-line
import AnimationRevealPage from "../components/cmm/AnimationEffect.jsx";
import MainBackground from "../containers/cmm/hom/MainBackground.jsx";
import HomeInfo from "../containers/cmm/hom/HomeInfo.jsx";
import ContactUs from "../containers/cmm/hom/ContactUs.jsx";
import { ChatbotContainer as Chatbot } from "../containers/cop/chatbot"
import FAQ from "../containers/cmm/hom/Faq.jsx";
import Tooltip from '@material-ui/core/Tooltip'

  const Subheading = tw.span`uppercase tracking-widest mx-10 font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500 mx-10 `;

export default function Home () {
  return( <div className="home">
  {/* <Header /> */}
  <AnimationRevealPage>
    <Tooltip title="구매 고객 리뷰 리스트 CRUD">
    <Chatbot/>
    </Tooltip>
    <MainBackground />
    <HomeInfo />
  <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "Pic 2 Cheese는 어떤 서비스 인가요 ?",
            answer:
              "Pic 2 Cheese는 치즈를 구매데이터를 분석해서 취향에 맞는 치즈를 추천해드립니다. "
          },
          {
            question: " ",
            answer:
              ""
          },
          {
            question: "",
            answer:
              ""
          },
          {
            question: "",
            answer:
              ""
          },
          {
            question: "",
            answer:
              ""
          },
          {
            question: "",
            answer:
              ""
          }
        ]}
      />
    <ContactUs />
  </AnimationRevealPage>      
</div>)
}
