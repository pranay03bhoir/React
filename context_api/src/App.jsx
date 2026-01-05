import "./App.css";
import { createContext, useContext, useState } from "react";

// 1. Creating the Context
// createContext is a React function that creates a Context object.
// This object comes with a Provider and a Consumer component (though Consumer is less common now with useContext).
//
// The argument passed to createContext (here, an object { theme: "light", toggleTheme: () => {} })
// is the *default value* for the context. This value is used when a component tries to consume the context
// but there is no matching <Context.Provider> above it in the component tree.
// It's good practice to define the shape of your context value here, including functions,
// even if they are no-ops, to help with autocompletion and type checking.
//
// In this case, ThemeContext will hold two pieces of information:
// - `theme`: A string indicating the current theme ("light" or "dark").
// - `toggleTheme`: A function to switch between themes.
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// The main App component, which will manage the theme state and provide it to its children.
function App() {
  // 2. Managing State with useState
  // useState is a React Hook that lets you add React state to function components.
  // Here, `theme` is the current state value (initialized to "light"), and `setTheme` is the function
  // that allows you to update the `theme` state. When `setTheme` is called, the component re-renders.
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // 3. Providing the Context Value
    // ThemeContext.Provider is a component that comes from the ThemeContext object.
    // Its `value` prop is where you pass the actual data that you want to make available
    // to all components nested within this Provider.
    //
    // In this example, we are passing an object `{ theme, toggleTheme }`.
    // This means any component within the <ThemeContext.Provider> tree can access
    // the current `theme` state and the `toggleTheme` function.
    //
    // When the `theme` state changes in the App component (via `setTheme`),
    // the App component re-renders, and the `value` prop of the Provider updates.
    // This causes all consuming components (like ThemedComponent) to re-render with the new context value.
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <header className="app-header">
          <h1>Context API Demo</h1>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </header>
        <main className="app-content">
          <div className="component-container">
            <h2>Component A (Parent)</h2>
            <ComponentA />
          </div>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

// ComponentA is a parent component that doesn't directly use the theme,
// but it renders ComponentB, which eventually renders ThemedComponent.
function ComponentA() {
  return (
    <div className="component component-a">
      <h3>Component B (Child)</h3>
      <ComponentB />
    </div>
  );
}

// ComponentB is a child component that also doesn't directly use the theme,
// but it renders ThemedComponent.
function ComponentB() {
  return (
    <div className="component component-b">
      <h4>Component C (Grandchild)</h4>
      <ThemedComponent />
    </div>
  );
}

// ThemedComponent is a grandchild component (or deeper) that needs to access the theme.
function ThemedComponent() {
  // 4. Consuming the Context Value
  // useContext is a React Hook that lets you read and subscribe to context from your function component.
  // It takes the Context object (ThemeContext in this case) as an argument.
  // It returns the current context value, which is the `value` prop passed to the nearest <ThemeContext.Provider> above it.
  //
  // Here, we destructure `{ theme }` from the context value, meaning we only need the `theme` property.
  const { theme } = useContext(ThemeContext);
  return (
    <div className="themed-component">
      <h5>Themed Component (Great grandchild)</h5>
      <p>
        Current Theme: <span className="theme-indicator">{theme}</span>
      </p>
      <p className="theme-desc">
        This component is using the {theme} theme through React Context.
      </p>
    </div>
  );
}

export default App;
