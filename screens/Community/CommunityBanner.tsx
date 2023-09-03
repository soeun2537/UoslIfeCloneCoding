import styled from "styled-components/native";

const Banner = styled.View`
  height: 80px;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 15px;
  border-radius: 20px;
`;

const BannerText = styled.Text`
  font-size: 13px;
  letter-spacing: -0.2;
`;

export default function CommunityBanner({ text }) {
  return (
    <Banner>
      <BannerText>{text}</BannerText>
    </Banner>
  );
}
