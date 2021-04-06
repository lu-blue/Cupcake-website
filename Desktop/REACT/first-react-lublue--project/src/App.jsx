import MyComponent from "./components/MyComponent";
import MyJSON from "./data/pets.json";


import "./styles/style3.css";

import logo from "./images/logo.svg";
import "./styles/index.css";
import "./styles/App.css";

export default function App() {
// Components
const ComponentArray = MyJSON.map((item) => (
  <MyComponent key={item.id} title={item.title} 
  fileName={item.fileName} />
));

return (
  <div className="App">
    <h1>Pets available</h1>

    <div className="grid">{ComponentArray}</div>
  </div>
);
}
