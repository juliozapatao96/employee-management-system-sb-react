import React from 'react'

const ListEmployeeComponent = () => {

    const dummyData = [
        {
            "id": 1,
            "firstName": "Julio",
            "lastName": "Zapata",
            "email": "john.doe@example.com"
        },
        {
            "id": 2,
            "firstName": "Natalia",
            "lastName": "Machado",
            "email": "nm@example.com"
        },
        {
            "id": 3,
            "firstName": "Andres",
            "lastName": "Quintana",
            "email": "aq@example.com"
        }
    ]

  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
                {dummyData.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent