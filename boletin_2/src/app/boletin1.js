import React, { useState } from 'react';

// Ejercicio 1: Greeting
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Ejercicio 2: Card
function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

// Ejercicio 2: App.js (para múltiples tarjetas)
function App() {
  return (
    <div>
      <Card 
        title="Card 1" 
        description="This is the first card" 
        image="https://via.placeholder.com/150"
      />
      <Card 
        title="Card 2" 
        description="This is the second card" 
        image="https://via.placeholder.com/150"
      />
    </div>
  );
}

// Ejercicio 3: Counter
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Ejercicio 4: Product
function Product(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Price: ${props.price}</p>
      <p>{props.description}</p>
    </div>
  );
}

// Ejercicio 4: ProductList
function ProductList() {
  const products = [
    { name: 'Product 1', price: 10, description: 'This is product 1' },
    { name: 'Product 2', price: 20, description: 'This is product 2' },
    { name: 'Product 3', price: 30, description: 'This is product 3' },
  ];

  return (
    <div>
      {products.map((product, index) => (
        <Product 
          key={index} 
          name={product.name} 
          price={product.price} 
          description={product.description} 
        />
      ))}
    </div>
  );
}

// Ejercicio 5: UserCard
function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

// Ejercicio 5: App.js (para renderizar múltiples UserCard)
function UserList() {
  const users = [
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { name: 'Jane Doe', email: 'jane@example.com', phone: '098-765-4321' },
  ];

  return (
    <div>
      {users.map((user, index) => (
        <UserCard 
          key={index} 
          name={user.name} 
          email={user.email} 
          phone={user.phone} 
        />
      ))}
    </div>
  );
}

// Ejercicio 6: Parent
function Parent() {
  const [message, setMessage] = useState('');

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Message from Child: {message}</p>
      <Child sendMessage={handleMessage} />
    </div>
  );
}

// Ejercicio 6: Child
function Child(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={() => props.sendMessage('Hello from Child!')}>
        Send Message to Parent
      </button>
    </div>
  );
}

// Ejercicio 7: ToggleSwitch
function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <div>
      <p>{isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

// Ejercicio 8: ToDoList
function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, { text: task, completed: false }]);
    setTask('');
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span style={{ textDecoration: task.completed ? 'line-through' : '' }}>
              {task.text}
            </span>
            <button onClick={() => toggleTask(index)}>Toggle</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Ejercicio 9: Counter (incrementar y decrementar)
function CounterIncDec() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

// Ejercicio 10: LoginControl
function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
      </button>
    </div>
  );
}

// Ejercicio 11: ProductStock
function ProductStock(props) {
  return (
    <div>
      {props.inStock ? (
        <p>The product is in stock!</p>
      ) : (
        <p>The product is out of stock!</p>
      )}
    </div>
  );
}

// Ejercicio 12: ContactForm
function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      alert('Form submitted successfully!');
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <textarea 
        placeholder="Message" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Ejercicio 13: ShoppingList
function ShoppingList() {
  const [products, setProducts] = useState(['Apple', 'Banana', 'Orange']);

  const removeProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  return (
    <div>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product} 
            <button onClick={() => removeProduct(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Ejercicio 14: Dropdown
function Dropdown(props) {
  return (
    <select>
      {props.options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

// Ejercicio 15: ImageGallery
function ImageGallery() {
  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
  ];

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
    </div>
  );
}

export default App;