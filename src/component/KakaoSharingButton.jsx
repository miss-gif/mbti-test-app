import { useEffect } from "react";
const { Kakao } = window;

const KakaoSharingButton = () => {
  const url = "https://mbti-test-app-sigma.vercel.app";

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("c089c8172def97eb00c07217cae17495");

    Kakao.Share.createDefaultButton({
      container: "#kakaotalk-sharing-btn",
      objectType: "feed",
      content: {
        title: "title",
        description: "description",
        imageUrl: "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  }, []);

  return (
    <>
      <a id="kakaotalk-sharing-btn" href="javascript:;">
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
          alt="카카오톡 공유 보내기 버튼"
        />
      </a>
    </>
  );
};

export default KakaoSharingButton;
