import React, { Component } from 'react'

export default class Result extends Component {
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
                <tr>
                    <td>1</td>
                    <td>Nguyễn Văn Kiên</td>
                    <td>0982672448</td>
                    <td>vnk22012002@gmail.com</td>
                    <td>
                        <button className='btn btn-success '>Chỉnh sửa</button>
                        <button className='btn btn-danger mx-2'>Xóa</button>
                    </td>
                </tr>
            </tbody>
          </table>
        </div>

      </>
    )
  }
}
