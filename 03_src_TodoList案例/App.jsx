import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from  './components/Footer'
import './App.css'
export default class App extends Component {
    //状态在哪里，引发状态发生变化的方法就写在哪里  
    state = {
        todos:[
            {id:'001',name:'吃饭',done:true},
            {id:'002',name:'睡觉',done:false},
            {id:'003',name:'打代码',done:false}
        ]
    }
    //用于添加todo接收一个todo对象
    addTodo = (todoObj)=>{
        //console.log(data)

        this.setState({todos:[todoObj,...this.state.todos]})
    }
    updateTodo = (id,done)=>{
        const {todos}=this.state
        const newTodos=todos.map((todoObj)=>{
            if(todoObj.id===id) 
            {
                return {...todoObj,done}
            }else return todoObj
        })
        //return
        this.setState({todos:newTodos}) 
        console.log(this.state.todos)
        console.log(newTodos)
    }
    //用于删除一个todo
    deleteTodo = (id)=>{
        const {todos}=this.state
        //删除指定id的todo对象
       const newTodos = todos.filter((todoObj)=>{
            return todoObj.id!==id
        })
        this.setState({todos:newTodos})
    }
    //用于全选
    checkAlltodo = (done)=>{
        const {todos} = this.state
        const newTodos=todos.map((todo)=>{
            //es6语法第二个done可以省略
            return {...todo,done:done}
        })
        this.setState({todos:newTodos})
    }
    //清除已经完成的
    clearAllDone = () =>{
        const {todos} = this.state
        const newTodos = todos.filter((todo)=>{
            return todo.done ===false;
        })
        this.setState({todos:newTodos})

    }
    render() {
        return (
        <div className="todo-container">
            <div className="todo-wrap">
             <Header addTodo={this.addTodo}/>
              <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
              <Footer todos={this.state.todos} checkAlltodo={this.checkAlltodo} clearAllDone={this.clearAllDone}/>
            </div>
        </div>
        )
    }
}
