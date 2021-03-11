import './App.css';
import Form from './components/Form';
import ListItem from './components/ListItem';
import Search from './components/Search';
import Sort from './components/Sort';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from './action/index';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filter : {
        name : '',
        status : -1
      },
      keyword : '',
      sortBy : 'name',
      sortValue : 1
    }
  }

  onToggleForm = () =>{
    var {itemEdit} = this.props;
    if (itemEdit && itemEdit.id !== '') {
      this.props.onShowForm();
    } else {
      this.props.onToggleForm(); 
    }
       
    this.props.onClearTask({
      id : '',
      name : '',
      status : false
    });
  }

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus,10);
    this.setState({
      filter : {
        name : filterName.toLowerCase(),
        status : filterStatus
      }
    })
  }
  onSearch = (keyword) =>{
    this.setState({
      keyword : keyword
    });
  }
  onSort = (sortBy, sortValue) => {
    this.setState({
        sortBy : sortBy,
        sortValue : sortValue
    })
  }
  
  render() {
    var {sortBy,sortValue} = this.state;

    /*if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task) =>{
          return task.name.toLowerCase().indexOf(filter.name)!==-1;
        });
      }
      tasks = tasks.filter((task) =>{
        if (filter.status === -1) {
          return task;
        }else{
          return task.status === (filter.status === 1 ? true : false ); 
        }
      });
    }

    if(this.state.keyword){
      tasks = tasks.filter((task) =>{
        return task.name.toLowerCase().indexOf(this.state.keyword)!==-1;
      });
    }
    if(sortBy === 'name'){
      tasks.sort((a,b) =>{
        if(a.name > b.name) return sortValue;
        else if(a.name < b.name) return -sortValue;
        else return 0;
      });
    }else{
      tasks.sort((a,b) =>{
        if(a.status > b.status) return -sortValue;
        else if(a.status < b.status) return sortValue;
        else return 0;
      });
    }*/
    var {isDisplayForm} = this.props;
  return (
      <div className="container">
         <div className="text-center">
           <h1>Quản Lý Công Việc</h1>
           <hr />
         </div>
         <div className="row">
          <div className={ isDisplayForm === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>
            <Form/>
          </div>
           <div className={ isDisplayForm === true ? 
              'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 
              'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
             <button type="button" 
                      className="btn btn-primary" 
                      onClick = {this.onToggleForm}>
               <span className="fa fa-plus mr-5" />Thêm Công Việc
             </button>
             <div className="row mt-15">
               <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Search onSearch = {this.onSearch}/>
               </div>
                <Sort 
                  onSort = {this.onSort}
                  sortBy = {sortBy}
                  sortValue ={sortValue}/>
             </div>
             <div className="row mt-15">
              <ListItem  onFilter = {this.onFilter}/>
             </div>
           </div>
         </div>
       </div>
    );
  }
}

const mapStatetoProps = state =>{
  return {
    isDisplayForm : state.isDisplayForm,
    itemEdit : state.itemEdit
  };
}
const mapDispatchtoProps = (dispatch,props) =>{
  return {
    onToggleForm : () =>{
      dispatch(action.toggleForm());
    },
    onClearTask : (task) =>{
      dispatch(action.editTask(task));
    },
    onShowForm : () =>{
      dispatch(action.openForm());
    }
  };
}
export default connect(mapStatetoProps,mapDispatchtoProps)(App);
