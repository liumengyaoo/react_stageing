// //import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

// export default App;
//创建外壳组件app
//import React from 'react'
//这并不是结构赋值，这是es6模块化时分别暴漏的
import React,{Component} from 'react'
import Hello from './components/Hello/Hello.jsx'
import Welcome from './components/Welcome/Welcome.jsx'
class App extends Component{
  render(){
    return(
      <div>
        <Hello/>
        <Welcome/>
      </div>
    )
  }

}
export default App