import React, { Component } from 'react'
import Result from './result'
import {connect} from 'react-redux'
import { dangKySVCreator } from '../redux-form/react-form.action'
 class ReactForm extends Component {
  state = {
    value:{
      id: "",
      name:"",
      phone:"",
      email:"",
    },
    touch:{
      id: false,
      name:false,
      phone:false,
      email:false,
    },
    error:{
      id: "",
      name:"",
      phone:"",
      email:"",
    }
  }

  handleChange = (event)=>{
    const {value, id, name, className} = event.target;
    console.log(value);

    let newError = {};
    for (const key in this.state.touch) {
      console.log(key,"key")
      if(this.state.touch[key]){
        const checkValue = key === id ? value:this.state.value[key];


          if(checkValue.length === 0){
            newError[key] = key + ' không được bỏ trống!';
          }

        switch(key){
          case "id": {
            if (/^\d*$/.test(checkValue) === false) {
              newError[key] = "Mã sinh viên phải là số.";

            }
            break;
          }
          case "name":{
            const regexName = /^[\p{L}\s.?!,-]+$/u;
            if(regexName.test(checkValue) === false){
              newError[key] = "Tên sinh viên không phù hợp!";
            }
            break;
          }
          case "phone":{
            if (/^\d*$/.test(checkValue) === false) {
              newError[key] = "Số điện thoại không hợp lệ!";
            }
            if(checkValue.length > 13){
              newError[key] = "Số điện thoại giới hạn 12 số!";
            }
            break;
          }
          case "email":{
            if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(checkValue) === false){
              newError[key] = "Email không hợp lệ!";
            }
            break;
          }
          default :{
            break;
          }
        }

      }
    }


    this.setState({
      value:{
        ...this.state.value,
        [id] : value,
      },
      error : newError,
    })
  }

  handleFocus = (event)=>{
    const { id, name , phone} = event.target;
    this.setState({
      touch:{
        ...this.state.touch,
        [id]: true,
      }
    })
  }
  handleSubmit = (event)=>{
    event.preventDefault();
    for (const key in this.state.value) {
      if(this.state.value[key].length === 0 || this.state.error[key]?.length > 0){
        return;
      }
    }
    this.props.dispatch(dangKySVCreator(this.state.value));

    this.setState({
      value:{
        id: "",
        name:"",
        phone:"",
        email:"",
      }
    })
  }

 static getDerivedStateFromProps(newProps, currentState){
    console.log({newProps, currentState})
    if(newProps.svChinhSua?.id != currentState.value){
      return {
        value: newProps.svChinhSua,
      }
    }
    return currentState;
  }

  render() {
    return (
      <div className='container mt-5'>
        <div className='p-3 mb-2 bg-dark text-white'>
          <h2>Thông tin sinh viên</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="id">Mã sinh viên</label>
              <input type="text" className="form-control " id="id"  
              onFocus={this.handleFocus}
              value={this.state.value?.id}
              onChange={(event)=>{
                this.handleChange(event);
              }}
              />
              {
                this.state.touch?.id && this.state.error?.id && (
                  <p className='text-danger'>{this.state.error?.id}</p>
                )
              }
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="name">Họ tên</label>
              <input 
              onFocus={this.handleFocus}
              value={this.state.value?.name}
              onChange={(event)=>{
                this.handleChange(event);
              }}
              type="text" className="form-control " id="name" />
              {
                this.state.touch?.name && this.state.error?.name && (
                  <p className='text-danger'>{this.state.error?.name}</p>
                )
              }
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="phone">Số điện thoại</label>
              <input 
              onFocus={this.handleFocus}
              value={this.state.value?.phone}
              onChange={(event)=>{
                this.handleChange(event);
              }}              
              type="text" className="form-control " id="phone"  />
              {
                this.state.touch?.phone && this.state.error?.phone && (
                  <p className='text-danger'>{this.state.error?.phone}</p>
                )
              }
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="email">Email</label>
              <input 
              onFocus={this.handleFocus}
              value={this.state.value?.email}
              onChange={(event)=>{
                this.handleChange(event);
              }}              
              type="text" className="form-control " id="email"  />
              {
                this.state.touch?.email && this.state.error?.email && (
                  <p className='text-danger'>{this.state.error?.email}</p>
                )
              }
            </div>
          </div>

          <button className="btn btn-success" type="submit">Thêm sinh viên</button>

          <Result/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer)=>{
  return {
    svChinhSua: rootReducer.ReactFormReducer.svChinhSua,
  }
}

export default connect(mapStateToProps)(ReactForm);
