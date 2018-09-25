import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hello greeting={'Hello' + 'React Ninja'} />, document.getElementById('root'));
registerServiceWorker();
