import React from 'react';
import AddNew from './addnew'
import ListTodo from './listtodo'
import ClrBtn from './clrbtn'
import Store from '../../store'

let TodoList = React.createClass({
  // 初始化数据，todolist的数据由state来控制
  getInitialState() {
    return {
      todolist: Store.fetch() == null ? []: Store.fetch()
    };
  },

  // 接收一个传入的数据，并将它实时更新到组件的 state 中
  handleChange(rows) {
    this.setState({
      todolist: rows
    });
    Store.save(this.state.todolist)
  },

  handleClr() {
    this.setState({
      todolist: []
    });
    Store.save([])
  },

  // 将各部分组件整合
  render() {
    return (
        <div>
          {/*todo - 将todolist的数据传入到组件，新增时，更新todolist数据*/}
          {/*onAdd - 将 handleChange 函数传入到组件，新增时，处理最新的todolist数据*/}
          <AddNew onAdd={this.handleChange} todo={this.state.todolist}/>
          {/*todo - 将todolist的数据传入到组件，用于组件展示数据*/}
          {/*onDel - 将 handleChange 函数传入到组件，删除时，用它来处理最新的todolist数据*/}
          <ListTodo onChange={this.handleChange} todo={this.state.todolist}/>
          <ClrBtn onClr={this.handleClr}/>
        </div>
    );
  }
})

export default TodoList;
