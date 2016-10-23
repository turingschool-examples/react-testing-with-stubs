import React from 'react';
import { render } from 'react-dom';

import Org from './components/Org';
import Application from './components/Application';

// import firebase, { reference, signIn } from './firebase';

require('./style.scss');

// let app = <Application firebase={firebase} reference={reference} signIn={signIn} />
let org = <Org />

render(org, document.getElementById('application'));
