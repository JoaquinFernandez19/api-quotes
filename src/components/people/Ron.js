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
const bgImg =
  "url('https://wallpapermemory.com/uploads/549/ron-swanson-wallpaper-hd-1080p-351252.jpg')";

const Chuck = (props) => {
  useEffect(() => {
    document.querySelector('body').style.backgroundImage = bgImg;
  }, []);
  return (
    <>
      <Wrapper>
        <UIdiv>
          <img
            className="tab-icon"
            src="https://66.media.tumblr.com/bfe6ad259302366633bd59bb25217c11/tumblr_nt50wvI4nQ1rpt59yo1_1280.png"
            alt="ron icon"
          />
          <Button onClick={() => props.handleRequest('ron')}>
            Generate a new one
          </Button>
        </UIdiv>
        {props.ronQuote ? <TextShower>{props.ronQuote}</TextShower> : null}
      </Wrapper>
      <Wrapper icons>
        <Link to={'/chuck'}>
          <Tab>
            <img
              src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
              alt="chuck icon"
            />
          </Tab>
        </Link>
        <Link to={'/kanye'}>
          <Tab>
            <img
              className="tab-icon"
              src="https://cdn.shopify.com/s/files/1/0084/5515/9889/products/Kanye_West_01_300x300.png"
              alt="kanye icon"
            />
          </Tab>
        </Link>
        <Tab active>
          <img
            className="tab-icon"
            src="https://66.media.tumblr.com/bfe6ad259302366633bd59bb25217c11/tumblr_nt50wvI4nQ1rpt59yo1_1280.png"
            alt="ron icon"
          />
        </Tab>
      </Wrapper>
    </>
  );
};
export default Chuck;
