import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  
  state = {
    mouse:false,
    //这么做没必要，因为本身有chacked属性
   // chack:this.props.item.done
  }
  //鼠标移入移出的回调
  handleMouse = (isLeave)=>{
    return (event)=>{
      // console.log(e)
      // console.log(isLeave);
      this.setState({mouse: isLeave})
    }
  } 
  // 勾选状态改变的回调
  handleCheck = (id)=>{
    return (e)=>{
      //console.log()
      //const {chack}=this.state
      //this.setState({chack:!chack})
     // e.target.chack=
     console.log(id,e.target.checked)
     this.props.updateTodo(id,e.target.checked)
    }


  }
  handleDelete = (id) =>{
    //console.log('通知删除',id)
    //要加window
    if(window.confirm('确定删除吗？')){
      this.props.deleteTodo(id)
    }
    

  }
  render() {
       const {item}=this.props
       const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse ? '#ddd':'#fff'}}onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
            <label>
              <input type="checkbox" checked={item.done}  onChange={this.handleCheck(item.id)}/>
              <span>{item.name}</span>
            </label>
            <button onClick={()=>this.handleDelete(item.id)} className="btn btn-danger" style={{display:mouse? 'block':'none'}}>删除</button>
          </li>
        )
    }
}
