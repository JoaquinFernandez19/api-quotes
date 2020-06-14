import React, { useEffect } from 'react';
import Button from '../Button';
import Wrapper from '../Wrapper';
import TextShower from '../TextShower';
import Tab from '../Tab';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

const UIdiv = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const bgImg = "url('https://wallpaperplay.com/walls/full/7/9/7/231471.jpg')";

const Chuck = (props) => {
  useEffect(() => {
    document.querySelector('body').style.backgroundImage = bgImg;
  }, []);
  return (
    <>
      <Wrapper>
        <UIdiv>
          <img
            src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
            alt="chuck icon"
          />
          <Button onClick={() => props.handleRequest('chuck')}>
            Generate a new one
          </Button>
        </UIdiv>
        {props.chuckQuote ? <TextShower>{props.chuckQuote}</TextShower> : null}
      </Wrapper>
      <Wrapper icons>
        <Tab active>
          <img
            src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
            alt="chuck icon"
          />
        </Tab>
        <Link to={'/kanye'}>
          <Tab>
            <img
              className="tab-icon"
              src="https://cdn.shopify.com/s/files/1/0084/5515/9889/products/Kanye_West_01_300x300.png"
              alt="kanye icon"
            />
          </Tab>
        </Link>
        <Link to={'/ron'}>
          <Tab>
            <img
              className="tab-icon"
              src="https://66.media.tumblr.com/bfe6ad259302366633bd59bb25217c11/tumblr_nt50wvI4nQ1rpt59yo1_1280.png"
              alt="ron icon"
            />
          </Tab>
        </Link>
      </Wrapper>
    </>
  );
};
export default Chuck;
