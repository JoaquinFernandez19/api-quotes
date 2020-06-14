import styled from 'styled-components';

export default styled.div`
  max-width: ${(props) => (props.icons ? '100vw' : '978px')};
  padding-top: ${(props) => (props.icons ? 0 : '150px')};
  margin: ${(props) => (props.icons ? '200px 0 0 0' : 'auto')};
  display: flex;
  flex-direction: ${(props) => (props.icons ? 'row' : 'column')};
  justify-content: ${(props) => (props.icons ? 'center' : 'inherit')};
  align-items: center;
  position: relative;
  background-color: ${(props) => (props.icons ? 'black' : 'transparent')};
  height: ${(props) => (props.icons ? '75px' : '50vh')};
  border-top: ${(props) => (props.icons ? '1px solid white' : 'none')};
  border-bottom: ${(props) => (props.icons ? '1px solid white' : 'none')};
`;
