import "./styles.css";

export default function App() {
  const list = [
    {
      text: "ddddd"
    }
  ];
  return (
    <div className="App">
      {list.map((item, index) => (
        <li key={index}>
          {item.text}
          <button>up</button>
          <button>down</button>
        </li>
      ))}
    </div>
  );
}
