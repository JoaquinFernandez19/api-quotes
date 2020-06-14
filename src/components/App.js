import React, { useState, useEffect } from 'react';
import Chuck from './people/Chuck';
import Kanye from './people/Kanye';
import Ron from './people/Ron';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { customFetch } from '../utility/fetch';

const App = () => {
  const [chuckQuote, setChuckQuote] = useState(null);
  const [kanyeQuote, setKanyeQuote] = useState(null);
  const [ronQuote, setRonQuote] = useState(null);
  useEffect(() => {
    handleRequest('chuck');
    handleRequest('kanye');
    handleRequest('ron');
  }, []);

  const handleRequest = async (who) => {
    switch (who) {
      case 'chuck':
        setChuckQuote('Loading...');
        const dataChuck = await customFetch(
          'https://api.chucknorris.io/jokes/random'
        );
        setChuckQuote(dataChuck.value);
        break;
      case 'kanye':
        setKanyeQuote('Loading...');
        const dataKanye = await customFetch('https://api.kanye.rest');
        setKanyeQuote(dataKanye.quote);
        break;
      case 'ron':
        setRonQuote('Loading...');
        const dataRon = await customFetch(
          'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
        );
        setRonQuote(dataRon[0]);
        break;
      default:
        return null;
    }
  };

  return (
    <BrowserRouter>
      <Route
        path={'/chuck'}
        component={() => (
          <Chuck chuckQuote={chuckQuote} handleRequest={handleRequest} />
        )}
      />
      <Route
        path={'/kanye'}
        component={() => (
          <Kanye kanyeQuote={kanyeQuote} handleRequest={handleRequest} />
        )}
      />
      <Route
        path={'/ron'}
        component={() => (
          <Ron ronQuote={ronQuote} handleRequest={handleRequest} />
        )}
      />
      <Redirect to={'/chuck'} />
    </BrowserRouter>
  );
};

export default App;
