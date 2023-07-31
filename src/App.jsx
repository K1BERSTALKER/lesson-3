import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Sardorbek");
  const [users, setUsers] = useState([
    { id: 1, name: "Xurshidbek" },
    { id: 2, name: "Asilbek" },
    { id: 3, name: "Jamshidbek" },
    { id: 4, name: "Shohnur" },
    { id: 5, name: "Sardorbek" },
    { id: 6, name: "Kabulov" },
    { id: 7, name: "Muzaffar" },
  ]);

  const resetName = () => {
    setName(name === "Sardorbek" ? "Kabulov" : "Sardorbek");
  };

  const delName = (id) => {
    const newUsers = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(newUsers);
  };

  const resetNames = () => {
    setUsers(
      [{ id: 1, name: "Xurshidbek" },
      { id: 2, name: "Asilbek" },
      { id: 3, name: "Jamshidbek" },
      { id: 4, name: "Shohnur" },
      { id: 5, name: "Sardorbek" },
      { id: 6, name: "Kabulov" },
      { id: 7, name: "Muzaffar" }]
    );
  };
  return (
    <>
      <h1 className="headerName">My name is {name}</h1>
      <button onClick={resetName} className="headerName--button">
        Reset Name
      </button>
      <ul className="list">
        {users.map((item) => (
          <li key={item.id} className="list__item">
            <span className="list__item__span">{item.name}</span>
            <button
              className="list__item__button clr-white"
              onClick={() => delName(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
        <li>
          <button className="list__item__button clr-white" onClick={resetNames}>RESET</button>
        </li>
      </ul>
    </>
  );
}

export default App;
