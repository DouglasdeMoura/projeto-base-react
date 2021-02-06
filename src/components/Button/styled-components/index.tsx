import styled from 'styled-components';
import { lighten, darken } from 'polished';

interface IButtonTag {
  background: string;
  color: string;
}

export const ButtonTag = styled.button<IButtonTag>`
  font-weight: bold;
  padding: 8px 24px;
  border: 3px solid ${props => props.background};
  background: ${props => props.background};
  color: ${props => props.color};
  cursor: pointer;
  border-radius: 24px;
  outline: 0;

  &:hover {
    background: ${props => darken(0.05, props.background)};
    border-color: ${props => darken(0.05, props.background)};
  }

  &:active {
    background: ${props => lighten(0.05, props.background)};
    border-color: ${props => lighten(0.05, props.background)};
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.25);
  }
`;
