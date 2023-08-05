import React, { Component } from 'react'
import Result from './result'

export default class ReactForm extends Component {
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
    this.setState({
      value:{
        ...this.state.value,
        [id] : value,
      },
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
  render() {
    return (
      <div className='container mt-5'>
        <div className='p-3 mb-2 bg-dark text-white'>
          <h2>Thông tin sinh viên</h2>
        </div>
        <form>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="id">Mã sinh viên</label>
              <input type="text" className="form-control " id="id"  
              onFocus={this.handleFocus}
              value={this.state.value.id}
              onChange={(event)=>{
                this.handleChange(event);
              }}
              />
              {
                this.state.touch.id && this.state.error.id && (
                  <p>Mã sinh viên Kkhoong bỏ trống!</p>
                )
              }
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="name">Họ tên</label>
              <input 
              onFocus={this.handleFocus}
              value={this.state.value.name}
              onChange={(event)=>{
                this.handleChange(event);
              }}
              type="text" className="form-control " id="name" />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="phone">Số điện thoại</label>
              <input 
              onFocus={this.handleFocus}
              value={this.state.value.phone}
              onChange={(event)=>{
                this.handleChange(event);
              }}              
              type="text" className="form-control " id="phone"  />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="email">Email</label>
              <input 
              onFocus={this.handleFocus}
              value={this.state.value.email}
              onChange={(event)=>{
                this.handleChange(event);
              }}              
              type="text" className="form-control " id="email"  />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
          </div>

          <button className="btn btn-success" type="submit">Thêm sinh viên</button>

          <Result/>
        </form>
      </div>
    )
  }
}
