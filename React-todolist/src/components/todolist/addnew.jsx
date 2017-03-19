import React from 'react';
import './addnew.css'

var AddNew = React.createClass({
  handleAdd(e) {
    e.preventDefault();
    var inputDom = this.refs.inputnew.value;
    var rows = this.props.todo;
    if (inputDom !== '') {
      // 更新数据
      rows.push({
        label: inputDom,
        isFinished: false
      });
      this.props.onAdd(rows);
    }
    this.refs.inputnew.value = '';
  },

  render() {
    return (
      <div id="addNew">
        <form onSubmit={this.handleAdd}>
          <input type="text" ref="inputnew" placeholder="干点啥呢..."/>
        </form>
      </div>
    );
  }
})

export default AddNew;
