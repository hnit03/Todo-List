import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from './../action/index';
class Form extends Component {
  componentWillMount(){
    if (this.props.itemEdit) {
      this.setState({
        id : this.props.itemEdit.id,
        name : this.props.itemEdit.name,
        status : this.props.itemEdit.status
      });
    }else{
      this.onClear();
    }
  }
  componentWillReceiveProps(nextProps){
    if (nextProps && nextProps.itemEdit) {
      this.setState({
        id : nextProps.itemEdit.id,
        name : nextProps.itemEdit.name,
        status : nextProps.itemEdit.status
      })
    }else{
      this.onClear();
    }
  }
  onExitForm = () =>{
    this.props.onExitForm();
  }
  onChange =  (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name] : value
    });
  }
  onSubmit = (e) =>{
    e.preventDefault();
    this.props.onSaveTask(this.state);
    console.log(this.state);
    this.onClear();
    this.onExitForm();
  }
  onClear = () => {
    this.setState({
      name : '',
      status : false
    });
    this.onExitForm();
  }
  render(){
    if (!this.props.isDisplayForm) return '';
    return (

          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">
                {this.state.id ? "Cập Nhật Công Việc ": "Thêm Công Việc "}
                <span style={{float: 'right'}} onClick = {this.onExitForm}>
                  <i className="fa fa-times-circle"></i>
                </span></h3>
            </div>
            <div className="panel-body">
              <form onSubmit = {this.onSubmit}>
                <div className="form-group">
                  <label>Tên :</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name = "name"
                    value = {this.state.name}
                    onChange = {this.onChange}/>
                </div>
                <label>Trạng Thái :</label>
                <select 
                  className="form-control" 
                  required="required"
                  name = "status"
                  value = {this.state.status}
                  onChange = {this.onChange}>
                  <option value= {true} >Kích Hoạt</option>
                  <option value= {false} >Ẩn</option>
                </select>
                <br />
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="btn btn-warning"
                    >Thêm</button>&nbsp;
                  <button 
                          type="submit"
                         className="btn btn-danger"
                         onClick = {this.onClear} >Hủy Bỏ</button>
                </div>
              </form>
            </div>
          </div>
      );
    }
  }

const mapStatetoProps = (state) =>{
  return {
    isDisplayForm : state.isDisplayForm,
    itemEdit : state.itemEdit
  }
}
const mapDispatchtoProps = (dispatch,props) =>{
  return {
    onSaveTask : (task) => {
      dispatch(action.saveTask(task));
    },
    onExitForm : () =>{
      dispatch(action.closeForm());
    }
  }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Form);
