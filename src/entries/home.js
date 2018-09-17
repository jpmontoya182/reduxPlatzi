import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home'
import datos from '../api.json'

const homeContainer = document.getElementById('home-container')
// que voy a renderizar, donde lo voy a hacer
render(<Home data={datos} />,homeContainer);