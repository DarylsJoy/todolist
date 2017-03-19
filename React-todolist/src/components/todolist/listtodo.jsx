import React from 'react';
import './listtodo.css';

var ListTodo = React.createClass({
  // 删除一条
  handleDel(e) {
    var delIndex = e.target.getAttribute('data-key');
    this.props.todo.splice(delIndex, 1);
    this.props.onChange(this.props.todo);
  },
  // 是否已完成
  handleFin(i, e) {
    if (e.target.className === 'things') {
      this.props.todo[i].isFinished = !this.props.todo[i].isFinished;
      this.props.onChange(this.props.todo);
    }
  },
  render() {
    return (
      <div>
        <ul id="list">
          {
            this.props.todo.map(function (item, i) {
              return (
                <li onClick={this.handleFin.bind(this, i)} className={this.props.todo[i].isFinished ? "finished" : ""}>
                  <span className="things">{item.label}</span>
                  <span className="delete" onClick={this.handleDel} data-key={i}>&times;</span>
                </li>
              );
            }.bind(this))
          }
        </ul>
      </div>
    );
  }
})

export default ListTodo;
