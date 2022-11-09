import { FooterContainer, Contact, Links } from "./styles";

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <Contact>
        <p>
          <i className="fa-solid fa-envelope"></i>: kaio.loopes18@gmail.com
        </p>
        <p>
          <i className="fa-solid fa-phone"></i>: {"(51) 9 8653-7075"}
        </p>
      </Contact>
      <Links>
        <ul>
          <li>
            <a href="https://www.instagram.com/kaio_al1/">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kaio-alves-lopes-3a1057245/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/kaio.alveslopes/">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </li>
        </ul>
      </Links>
    </FooterContainer>
  );
};

export default Footer;
