import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './Description';
import Image from './Image';
import Name from './Name';
import Price from './Price';

function App() {
  let name="asia"
  return (
    <Card style={{ width: '18rem' }}>
 <Image />
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
         <Description />
        </Card.Text>
        <Card.Title><Price /></Card.Title>
      </Card.Body>
      {name ? `hello ${name}`: "hello there"}
     
    </Card>
  );
}

export default App;
