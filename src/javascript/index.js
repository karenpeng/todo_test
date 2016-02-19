import ReactDOM from 'react-dom'
import List from './components/List'

ReactDOM.render(
  React.createElement(List, {name: "World"}),
  document.getElementById('container')
);
