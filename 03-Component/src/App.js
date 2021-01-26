import Counter from "./Counter";
import MyComponent from "./MyComponent";
import Say from "./Say";

// function App() {
//   const name = "리액트";
//   return <div className="react">{name}</div>;
// }

// class App extends Component {
//   render() {
//     const name = "react";
//     return <div className="react">{name}</div>;
//   }
// }

const App = () => {
  return (
    <>
      <MyComponent name="React" favoriteNumber={3}>
        리액트<MyComponent>안에 넣은 컴포넌트</MyComponent>
      </MyComponent>
      <Counter />
      <Say />
    </>
  );
};
export default App;
