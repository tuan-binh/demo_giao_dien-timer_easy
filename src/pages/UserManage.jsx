import { useState } from 'react';

function UserManage() {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Nguyễn Trường Giang',
      age: 18,
      email: 'giang@gmail.com',
      dob: '16/09/2001',
      manage: 'user',
    },
    {
      id: 2,
      name: 'Trần Quang Đạo',
      age: 22,
      email: 'dao@gmail.com',
      dob: '16/09/1998',
      manage: 'user',
    },
    {
      id: 3,
      name: 'Liêm CR7',
      age: 17,
      email: 'niem@gmail.com',
      dob: '16/09/2002',
      manage: 'user',
    },
    {
      id: 4,
      name: 'Phan Văn Tự',
      age: 10,
      email: 'tu@gmail.com',
      dob: '16/09/2010',
      manage: 'user',
    },
    {
      id: 5,
      name: 'Nguyễn văn tiến',
      age: 20,
      email: 'tien@gmail.com',
      dob: '16/09/1994',
      manage: 'admin',
    },
  ]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-uppercase mb-0">MANAGER USER</h5>
            </div>
            <div className="table-responsive">
              <table className="table no-wrap user-table mb-0">
                <thead>
                  <tr>
                    <th scope="col" className="border-0 text-uppercase font-medium pl-4" />
                    <th scope="col" className="border-0 text-uppercase font-medium">
                      Name
                    </th>
                    <th scope="col" className="border-0 text-uppercase font-medium">
                      Age
                    </th>
                    <th scope="col" className="border-0 text-uppercase font-medium">
                      Email
                    </th>
                    <th scope="col" className="border-0 text-uppercase font-medium">
                      Dateofbirth
                    </th>
                    <th scope="col" className="border-0 text-uppercase font-medium">
                      Manage
                    </th>
                    <th scope="col" className="border-0 text-uppercase font-medium">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.id}>
                      <td className="pl-4">{index + 1}</td>
                      <td>
                        <h6 className="font-medium mb-0">{item.name}</h6>
                      </td>
                      <td>
                        <span className="text-muted">{item.age}</span>
                      </td>
                      <td>
                        <span className="text-muted">{item.email}</span>
                        <br />
                      </td>
                      <td>
                        <span className="text-muted">{item.dob}</span>
                      </td>
                      <td>
                        <select
                          defaultValue={item.manage}
                          className="form-control category-select"
                          id="exampleFormControlSelect1"
                        >
                          <option value="user">user</option>
                          <option value="moderator">moderator</option>
                          <option value="admin">admin</option>
                        </select>
                      </td>
                      <td>
                        <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2">
                          <i className="fa fa-trash" />
                        </button>
                        <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2">
                          <i className="fa fa-edit" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManage;
