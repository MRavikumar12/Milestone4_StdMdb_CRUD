import { Component } from '@angular/core';
import { Student } from './Models/student';
import { StudentService } from './Services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Milestone4_StdMdb_CRUD';

  
  data:any=[];

  std:Student={

    id: "",
    StudentName: "",
    Age: "",
    Gender: "",
    Class: "",
    Course: "",
    Address: ""
  };

  UpdateData:any;

  currentData:Student={
    id: "",
    StudentName: "",
    Age: "",
    Gender: "",
    Class: "",
    Course: "",
    Address: ""
  };
  constructor(private service:StudentService){}

  ngOnInit()
  {
    this.GetAll();
  }

  GetAll()
  {
    this.service.GetStudents().subscribe(response=>
      {
        this.data=response;
      })
  }

  DeleteRecord(id:string)
  {
    this.service.DeleteStudent(id).subscribe(response=>
      {
        this.GetAll();
      })
  }
  
  UpdateStd()
  {
    this.service.UpdateStudent(this.currentData).subscribe(response=>
      {
        this.GetAll();
        console.log(response);
      })
  }

  GetCurrentData(data:Student)
  {
    this.service.GetStudentById(data.id).subscribe(res=>
      {
        this.UpdateData=res;
        this.currentData=this.UpdateData;
        console.log(res);
      })
  }

  AddStudent()
  {
    this.service.AddNewStudent(this.std).subscribe(res=>
      {
        console.log(res);
        this.GetAll();
      })
  }
}


