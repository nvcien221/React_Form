import React, { Component } from 'react'
import Result from './result'

export default class ReactForm extends Component {
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
              <input type="text" className="form-control " id="id"  />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="name">Họ tên</label>
              <input type="text" className="form-control " id="name" />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="phone">Số điện thoại</label>
              <input type="text" className="form-control " id="phone"  />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control " id="email"  />
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
