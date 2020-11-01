import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: ${props => props.background ||  'rgb(151,156,237)'};
  color: ${props => props.color || '#ffffff'};
  border-radius: 0.2rem;
`

export default Button;