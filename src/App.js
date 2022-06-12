import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const blog = {
  color: 'blue',
  backgroundColor: 'tomato',
  border: '2px solid pink',

};

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])

  return (
    <div className="App">
      <div>
        {/* //Task-1 */}
        <article style={blog}>
          <h3>Noyon</h3>
          <p>I am a student of programming-hero in 5th batch. Now, I am learning react.js</p>

          {/* Task-2 */}
          <p style={{
            color: 'white',
            backgroundColor: 'black',
            border: '2px solid pink',
            marginLeft: '100px',
            marginRight: '100px',

          }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, odio. Quae ullam sit aut ut, dolor harum iusto praesentium pariatur ipsa laborum labore similique iure officia! Aliquid dignissimos nostrum nulla!</p>

        </article>
      </div>
      <Blog></Blog>
      <Mobile></Mobile>

      {/* Task-5 */}
      {
        todos.map(elements => <DisplayProperty property={{ elements }}></DisplayProperty>)
      }


    </div>
  );
}

//Task-5
function DisplayProperty(props) {
  console.log(props)
  const { id, title } = props.property.elements;
  return (
    <div>
      <h3>Id = {id}</h3>
      <p>Title = {title}</p>
    </div>
  )
}

//Task-3
function Blog() {
  return (
    <div>
      <h3>Heading</h3>
      <h4>author</h4> <hr />
      <h3>Heading</h3>
      <h4>author</h4> <hr />
      <h3>Heading</h3>
      <h4>author</h4> <hr />
    </div>
  )
}

// Task-4
function Mobile() {

  const [charge, setCharge] = useState(100);
  if (charge <= 0) {
    document.getElementById('togglee').style.visibility = 'hidden';
  }
  const decrease = () => setCharge(charge - 10);

  return (
    <div>
      <h3>Charge: {charge}</h3>
      <button id="togglee" onClick={decrease}>Battery Down</button>
    </div>
  )
}

export default App;
