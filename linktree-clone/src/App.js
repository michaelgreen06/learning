import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Button/Button";
import Logo from "./Components/Logo/Logo";

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
        <Logo />
      </header>
      <section>
        {urls.map((element, index) => {
          return (
            <Button
              key={index}
              url={element.url}
              description={element.description}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
