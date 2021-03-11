import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from './../action/index';
class Item extends Component { 

  onDelete = () => {
    this.props.onDelete(this.props.task.id);
  }
  onEditTask = () => {
    this.props.onShowForm();
    this.props.onEditTask(this.props.task); 
  }

  onUpdateStatus = () =>{
    this.props.onToggleStatus(this.props.task.id); 
  }
  render(){
    var {task , index} = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
                className={ this.props.task.status ? 'label label-danger' 
                            : 'label label-info' }
                onClick={ this.onUpdateStatus }
          >{ this.props.task.status === true ? 'Kích Hoạt' : 'Ẩn' }</span>
        </td>
        <td className="text-center">
          <button 
            type="button" 
            className="btn btn-warning"
            onClick = {this.onEditTask}>
            <span className="fa fa-pencil mr-5" />Sửa
          </button>
          &nbsp;
          <button 
            type="button" 
            className="btn btn-danger"
            onClick = {this.onDelete}>
            <span className="fa fa-trash mr-5" />Xóa
          </button>
        </td>
      </tr>
    );
  }
}

const mapStatetoProps = state =>{
  return {};
}
const mapDispatchtoProps = (dispatch,props) => {
  return{
    onToggleStatus : (id) =>{
      dispatch(action.toggleStatus(id));
    },
    onDelete : (id) =>{
      dispatch(action.deleteTask(id));
    },
    onEditTask : (task) =>{
      dispatch(action.editTask(task));
    },
    onShowForm : () =>{
      dispatch(action.openForm());
    },
  }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Item);
