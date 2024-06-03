// --------- ERROR BOUNDARY DEMO ----------
// import React from 'react';
// import './App.css';

// // Component
// import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
// import UserForm from './components/errorBoundary/UserForm';
// class App extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//         name: 'Gourav',
//       }
//   }

//   render() {
//     return (
//       <div>
//           <ErrorBoundary>
//             <UserForm error={true} />
//           </ErrorBoundary>
//           <ErrorBoundary>
//             <UserForm />
//           </ErrorBoundary>
//       </div>
//     )
//   }
// }

// export default App




// --------- PROGRESSBAR DEMO ----------
// import React from 'react';
// import './App.css';

// // Component
// import ProgressBar from './components/progressBar/ProgressBar'

// class App extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//         name: 'Gourav',
//       }
//   }

//   render() {
//     return (
//       <div>
//           <ProgressBar />
//       </div>
//     )
//   }
// }

// export default App




// --------- LIFECYCLE METHODS DEMO ----------
// import React from 'react';
// import './App.css';

// // Component
// import LifecycleA from './components/lifecycleMethods/LifecycleA';

// class App extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//         name: 'Gourav',
//       }
//   }

//   render() {
//     return (
//       <div>
//           <LifecycleA />
//       </div>
//     )
//   }
// }

// export default App





// --------- HIGHER ORDER COMPONENT DEMO ----------
// import React from 'react';
// import './App.css';

// // Component
// import IncrementClick from './components/higherOrderComponent/incrementClick';
// import IncrementHover from './components/higherOrderComponent/IncrementHover';

// class App extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//         name: 'Gourav',
//       }
//   }

//   render() {
//     return (
//       <div>
//           <IncrementClick buttonText='Click to increment' />
//           <IncrementHover buttonText='Hover to increment'/>
//       </div>
//     )
//   }
// }

// export default App





// --------- RENDER PROPS PATTERN DEMO ----------
// import React from 'react';
// import './App.css';

// // Component
// import IncrementClick from './components/renderPropsPattern/IncrementClick';
// import Counter from './components/renderPropsPattern/Counter';
// import IncrementHover from './components/renderPropsPattern/IncrementHover';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Gourav',
//     }
//   }

//   render() {
//     return (
//       <div>
//         <Counter
//           render={(counter, onChange) => {
//             return (
//               <IncrementClick
//                 buttonText='Click to increment'
//                 counter={counter}
//                 onChange={onChange}
//               />
//             )
//           }}
//         />
//         <Counter
//           render={(counter, onChange) => {
//             return (
//               <IncrementHover
//                 buttonText='Hover to increment'
//                 counter={counter}
//                 onChange={onChange}
//               />
//             )
//           }}
//         />

//         {/* 
//         Inorder to run this way, replace this.props.render -> this.props.children in Counter.js
//         <Counter>
//             {(counter, onChange) => (
//                 <IncrementHover
//                     buttonText='Hover to increment'
//                     counter={counter}
//                     onChange={onChange}
//                 />
//             )}
//         </Counter> */}
//       </div>
//     )
//   }
// }

// export default App





// --------- STYLING PATTERN DEMO ----------
// import React from 'react';
// import './App.css';

// // Component
// import InlineBased from './components/stylingPatterns/inlineBased';
// import ClassBased from './components/stylingPatterns/classBased';
// import ModuleBased from './components/stylingPatterns/moduleBased';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Gourav',
//     }
//   }

//   render() {
//     return (
//       <div>
//             <ClassBased />
//             <InlineBased />
//             <ModuleBased />
//       </div>
//     )
//   }
// }

// export default App





// --------- CONTEXT DEMO ----------
// import React from 'react';
// import './App.css';

// // Component
// import ComponentA from './components/context/ComponentA';
// import { UserContextProvider } from './components/context/UserData';

// class App extends React.Component {
//   render() {
//     return (
//       <UserContextProvider value='Gourav'>
//         <ComponentA />
//       </UserContextProvider>
//     )
//   }
// }

// export default App





// --------- AXIOS DEMO ----------
// import React from 'react';
// import './App.css';

// // Component
// import User from './components/axios/User';

// class App extends React.Component {
//   render() {
//     return (
//       <User />
//     )
//   }
// }

// export default App





// --------- useContext() DEMO ----------
// import React from 'react';
// import './App.css';

// // Component
// import ComponentA from './components/useContext/ComponentA';

// export const UserContext = React.createContext('default_name')

// class App extends React.Component {
//   render() {
//     return (
//       <UserContext.Provider value="gourav">
//         <ComponentA />
//       </UserContext.Provider>
//     )
//   }
// }

// export default App





// --------- useReducer() DEMO ----------
// import React from 'react';
// import './App.css';

// import ReducerDemo from './components/useReducer';

// // Component

// class App extends React.Component {
//   render() {
//     return (
//         <ReducerDemo />
//     )
//   }
// }

// export default App





// --------- useReducer With useContext DEMO ----------
// import React, { useReducer } from 'react';
// import './App.css';

// // Component
// import ComponentA from './components/useReducerWithuseContext/ComponentA';
// import ComponentB from './components/useReducerWithuseContext/ComponentB';
// import ComponentC from './components/useReducerWithuseContext/ComponentC';


// let initialState = { 
//   counter: 0 
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment': return {
//       ...state,
//       counter: state.counter + action.value
//     }
//     case 'decrement': return {
//       ...state,
//       counter: state.counter - action.value
//     }
//     case 'reset': return {
//       ...initialState
//     }
//     default: return state
//   }
// }

// export const CountContext = React.createContext();

// const App = () => {

//   const [counter, dispatch] = useReducer(reducer, initialState)

//   return (
//     <CountContext.Provider value={{ counter, dispatch }}>
//       <ComponentA />
//       <ComponentB />
//       <ComponentC />
//     </CountContext.Provider>
//   )
// }

// export default App





// --------- Axios with useReducer DEMO ----------
// import React from 'react';
// import './App.css';

// // Component
// import AxiosWithUseReducerDemo from './components/axiosWithuseReducer';

// const App = () => {
//   return (
//     <AxiosWithUseReducerDemo />
//   )
// }

// export default App





// --------- useCallback DEMO ----------
// import React from 'react';
// import './App.css';

// // Component
// import Parent from './components/useCallbackDemo/Parent';

// const App = () => {
//   return (
//     <Parent />
//   )
// }

// export default App





// --------- useMemo DEMO ----------
// import React from 'react';
// import './App.css';

// // Component
// import Parent from './components/useMemoDemo/Parent';

// const App = () => {
//   return (
//     <Parent />
//   )
// }

// export default App





// --------- useRef DEMO ----------
// import React from 'react';
// import './App.css';

// // Component
// import UseRefDemo from './components/useRefDemo/index';

// const App = () => {
//   return (
//     <UseRefDemo />
//   )
// }

// export default App





// --------- redux DEMO ----------
// import React from 'react';
// import './App.css';

// // Component
// //import ReduxMultipleReducerDemo from './components/reduxDemo/ReduxMultipleReducerDemo';
// import ReduxThunkDemo from './components/reduxDemo/ReduxThunkDemo';

// const App = () => {
//   return (
//     <div>
//         {/* <ReduxMultipleReducerDemo /> */}
//         <ReduxThunkDemo />
//     </div>
//   )
// }

// export default App





// --------- redux DEMO ----------
import React from 'react';
import { Provider } from 'react-redux'
import './App.css';

// Component
import store from './components/reactReduxDemo/redux/store'
import IceCream from './components/reactReduxDemo/components/IceCream';
import Cake from './components/reactReduxDemo/components/Cake';
import HookCake from './components/reactReduxDemo/components/HookCake';


const App = () => {
  return (
    <div>
        <Provider store={store}>
          <IceCream />
          <Cake />
          <HookCake />
        </Provider>
    </div>
  )
}

export default App





