import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Button/Button";

function App() {
  const urls = [
    { url: "https://google.com", description: "this is the description of the 1 thing" },
    { url: "https://google.com", description: "this is the description of the 2 thing" },
    { url: "https://google.com", description: "this is the description of the 3 thing" },
    { url: "https://google.com", description: "this is the description of the 4 thing" },
  ];

  return (
    <div className="App">
      <header className="">
        <div>
          {urls.map((element, index) => {
            return (
              <Button
                key={index}
                url={element.url}
                description={element.description}
              />
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
