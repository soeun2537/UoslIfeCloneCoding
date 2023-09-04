import styled from "styled-components/native";

const Banner = styled.View`
  height: 160px;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 15px;
  border-radius: 20px;
  border: 1px solid #dee1e5;
`;

const BannerText = styled.Text`
  font-size: 13px;
  letter-spacing: -0.2;
`;

export default function SchoolBanner({ text }) {
  return (
    <Banner>
      <BannerText>{text}</BannerText>
    </Banner>
  );
}
