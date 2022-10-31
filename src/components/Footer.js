import styled from "styled-components";

const AppFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  font-size: 0.7rem;
  background-color: ${(props) => props.theme.grey};
  position: absolute;
  bottom: 0;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: space-between;
    display: block;
  }
`;

const AppName = styled.p`
  color: ${(props) => props.theme.black};
  @media (max-width: 768px) {
    margin: 2% 2%;
  }
`;

const Footer = () => {
  return (
    <AppFooter>
      <AppName>twitter.</AppName>
      <AppName>instagram.</AppName>
      <AppName>bizz stuff.</AppName>
      <AppName>&copy; 2022 Bright Events</AppName>
    </AppFooter>
  );
};

export default Footer;