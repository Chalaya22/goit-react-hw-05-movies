import { FaArrowRotateLeft } from 'react-icons/fa6';
import { StyledLinkBtn, Btn } from './BtnBack.styled';

const BtnBack = ({ to, children }) => {
  return (
    <StyledLinkBtn to={to}>
      <Btn>
        <FaArrowRotateLeft /> {children}
      </Btn>
    </StyledLinkBtn>
  );
};
export default BtnBack;
