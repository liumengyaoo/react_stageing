import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  handleCheckAll = (e)=>{
    console.log('全选')
   // e.target.checked = !e.target.checked
   this.props.checkAlltodo(e.target.checked)
  }
  handleClearAllDone = () =>{
    this.props.clearAllDone()
  }
  render() {
        const {todos}=this.props
        //已完成的个数
        
        const count=todos.reduce((acc,todo)=>{
          if(todo.done){
           return  acc =acc+1
          }else return acc
        },0)
        const total = todos.length
        return (
            <div className="todo-footer">
                 <label>
                   <input type="checkbox" onChange={this.handleCheckAll} checked={count === total && total!==0 ? true : false}/>
                 </label>
                 <span>
                   <span>已完成{count}</span> / 全部{total}
                 </span>
                 <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
