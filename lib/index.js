import React from 'react';
import { render } from 'react-dom';

import Org from './components/Org';

require('./style.scss');

let org = <Org />

render(org, document.getElementById('application'));
