import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../Models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private base_url="https://localhost:7100/api/Student";
  constructor(private http:HttpClient) { }

  GetStudents()
  {
    return this.http.get(this.base_url);
  }

  DeleteStudent(id:string)
  {
    
    return this.http.delete(this.base_url+"/"+id);
  }

  UpdateStudent(student:Student)
  {
    return this.http.put(this.base_url+"/"+student.id,student);
  }

  GetStudentById(id:string)
  {
    return this.http.get(this.base_url+"/"+id);
  }
  AddNewStudent(Student:Student)
  {
    return this.http.post(this.base_url,Student);
  }
}
