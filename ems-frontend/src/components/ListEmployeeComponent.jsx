import React, {useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'
import {useNavigate} from 'react-router-dom'
import { deleteEmployee } from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployee] = useState([])

    const nagivator = useNavigate();

    useEffect(() => {
        getAllEmployees()
    }, [])

    function getAllEmployees(){
        listEmployees().then((response) => {
            setEmployee(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee() {
        nagivator('/add-employee')
    }

    function updateEmployee(id) {
        nagivator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        deleteEmployee(id).then((response) => {
            console.log(response);
            // setEmployee(employees.filter(e => e.id !== id));
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className='container'>
        <br/>
        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                            <button className='btn btn-danger ms-2' onClick={() => removeEmployee(employee.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent