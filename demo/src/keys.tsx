import { h, render, useState } from "../../src/index"
// import {h, render} from '../../.ignore/eee'

// function App() {
//   const [key, setKey] = useState([3,1,2])
//   return [
//     <button onClick={() => setKey([1,2,3])}>x</button>,
//     <ul>
//       {key.map((i) => (
//         <li key={i}>{i}</li>
//       ))}
//     </ul>,
//   ]
// }

// function App() {
//   const [key, setKey] = useState([1,2,6, 3])
//   return [
//     <button onClick={() => setKey([1,3,5,2,4])}>x</button>,
//     <ul>
//       {key.map((i) => (
//         <li key={i}>{i}</li>
//       ))}
//     </ul>,
//   ]
// }

// function App() {
//   const [key, setKey] = useState(['a', 'b', 'c'])
//   return h(A, null, 222, " items left")
// }

// function App() {
//   const [key, setKey] = useState([1,2,3])
//   return <div>
//     <button onClick={() => setKey([3,1])}>x</button>
//     <ul>
//       {key.map((i) => (
//         <Li i={i} key={i} />
//         // <li key={'#'+i}>{i}</li>
//       ))}
//     </ul>
//   </div>
// }

// function App() {
//   const [list, setList] = useState([1, 2, 3])
//   return <div>{list.map((d) => <span>{d}</span>)} <button onClick={() => setList(list.concat(4))}>+</button></div>
// }

const App = () => {
  let [bool, setbool] = useState(true)
  return <div>
      {bool ? <Header /> : null}
      <button onClick={()=>setbool(!bool)}>x</button>
  </div>
}

function Header(){
  return <div><a href="">222</a></div>
}

// function App() {
//   const [key, setKey] = useState([1,2,3,4,5])
//   return (
//     <div>
//       {key.map((i) => (
//         // <Li i={i} key={i} />
//         <li key={i} >{i}</li>
//       ))}
//       <button onClick={() => setKey([5,3,4])}>x</button>
//     </div>
//   )
// }

// export default function App() {
//   const [state, setState] = useState(true);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setState(false);
//         }}
//       >
//         set
//       </button>
//       {state?<li>111</li>:null}
//     </div>
//   );
// }

// function Li(props) {
//   return <div>
//     <li>{props.i}</li>
//     <li>{props.i}</li>
//   </div>
// }

// function Li(props) {
//   return <li>{props.i}</li>
// }

// const parentNode = document.getElementById("app");

// render(<div><li key={1}>1</li><li key={2}>2</li><li key={3}>3</li></div>, parentNode);

// render(<div><li key={3}>3</li><li key={2}>2</li><li key={1}>1</li></div>, parentNode);

render(<App />, document.getElementById("app"))
