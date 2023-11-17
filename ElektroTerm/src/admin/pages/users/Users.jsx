import './users.scss'

const Users = () => {
  return (
    <div className='asdminUsers'>
      <h1>İstifadəçilər</h1>
      <table className="content-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Esldon</td>
            <td>Osmanaga</td>
            <td>Jhon@mail.ru</td>
            <td>+994-555-55-55</td>
            <td>Manager</td>
          </tr>
          <tr className="active-row">
            <td>2</td>
            <td>Stevie</td>
            <td>Osmanaga</td>
            <td>sdfsdihf@mail.ru</td>
            <td>+994-555-55-55</td>
            <td>User</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Royetr</td>
            <td>Osmanaga</td>
            <td>asdsafsd@mail.ru</td>
            <td>+994-555-55-55</td>
            <td>Admin</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Users