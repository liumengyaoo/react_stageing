import React, { Component } from 'react'
//引入对props传递限制的库
import PropTypes from 'prop-types'
//这个库可以生成唯一的id
import {nanoid} from  'nanoid'
import './index.css'
export default class Header extends Component {
   //对接收的props进行：类型，必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    state =  {
        value:''
    }
    handleKeyUp = (event)=>{
        
        
        if(event.keyCode===13){
            if(event.target.value.trim()===''){
                alert('输入不能为空')
                return 
            }
            const todoObj = {id:nanoid(),name:event.target.value.trim(),done:false}
            console.log(todoObj)
            this.props.addTodo(todoObj)
            //清空输入
            event.target.value='';
           // console.log(event.target.value,event.keyCode);
        }
    }
    render() {
        return (
            <div className="todo-header">
                 <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
             </div>
        )
    }
}
