package net.javajz.ems.service.impl;

import lombok.AllArgsConstructor;
import net.javajz.ems.dto.EmployeeDto;
import net.javajz.ems.entity.Employee;
import net.javajz.ems.exception.ResourceNotFoundException;
import net.javajz.ems.mapper.EmployeeMapper;
import net.javajz.ems.repository.EmployeeRepository;
import net.javajz.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee is not exists with given id : " + employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }
}
