import "./App.css";

function App() {
  const name = "Pranay";
  const buttonLabel = "Click Me";
  const welcome = "Welcome";
  const isLoggedIn = true;
  return (
    <>
      <div>
        <h1>
          {isLoggedIn ? welcome : "Log in to your account"} {isLoggedIn && name}
        </h1>
        <button style={{ backgroundColor: "green", color: "white" }}>
          {buttonLabel}
        </button>
        <button onClick={() => alert("Button Clicked")}>alert me</button>
        <img
          src="https://images.unsplash.com/photo-1663208846258-ac737c0e7276?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={"image"}
        />
      </div>
    </>
  );
}

export default App;
