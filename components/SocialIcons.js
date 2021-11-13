import { StyledSocialIcons } from "./styles/SocialIcons.styled"
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href='https://twitter.com'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='https://facebook.com'>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href='https://linkedin.com'>
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  )
}

export default SocialIcons
