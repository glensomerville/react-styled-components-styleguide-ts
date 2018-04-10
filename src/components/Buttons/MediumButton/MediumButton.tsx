import { styled } from 'themes';

const MediumButton = styled.button`
  width: 320px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px ${props => props.theme.colors.powderBlue};
  text-align: center;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 13px;
  font-weight: 900;
  color: ${props => props.theme.colors.darkishBlue};
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.whiteTwo};
  &:hover {
    color: ${props => props.theme.colors.cerulean};
    border-color: ${props => props.theme.colors.cerulean};
  }
`;

/** @component */
export default MediumButton;
