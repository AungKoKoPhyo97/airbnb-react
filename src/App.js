import './App.css';
import Appbar from './components/appbar';
import UpperBody from './components/upper-body';
import Card from './components/card';
import cardData from './data/cardData';

function App() {
  const cardElements = cardData.map(data => {
    return <Card
      key={data.id}
      {...data}
    />;
  });

  return (
    <div className="App">
      <Appbar />
      <UpperBody />
      <div className="scroll" >
        {cardElements}
      </div>
    </div>
  );
}

export default App;
