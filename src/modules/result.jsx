import React, { Component } from 'react'
import {connect} from 'react-redux'
import { chinhSuaCreator, xoaSVCreator } from '../redux-form/react-form.action'
 class Result extends Component {
  render() {
    return (
      <>
        <div className='mt-3'>
          <table className='table'>
            <thead className='p-1 mt-4 bg-dark text-white'>
                <th>Mã SV</th>
                <th>Họ tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th></th>
            </thead>
            <tbody>
              {
                this.props.mangDanhSach.map(sv =>{
                  return  <tr key={sv.id}>
                  <td>{sv.id}</td>
                  <td>{sv.name}</td>
                  <td>{sv.phone}</td>
                  <td>{sv.email}</td>
                  <td>
                      <button 
                      onClick={()=>{
                        this.props.dispatch(chinhSuaCreator(sv))
                      }}
                      className='btn btn-success '>Chỉnh sửa</button>
                      <button 
                      onClick={()=>{
                        if(window.confirm('Bạn muốn xóa sinh viên này khỏi danh sách!')){
                          this.props.dispatch(xoaSVCreator({
                            id: sv.id,
                          }));
                        }
                      }}
                      className='btn btn-danger mx-2'>Xóa</button>
                  </td>
              </tr>
                })
              }
               
            </tbody>
          </table>
        </div>

      </>
    )
  }
}

const mapStateToProps = (rootReducer)=>{
  return {
    mangDanhSach : rootReducer.ReactFormReducer.mangDanhSach,
  }
}

export default connect(mapStateToProps)(Result);
