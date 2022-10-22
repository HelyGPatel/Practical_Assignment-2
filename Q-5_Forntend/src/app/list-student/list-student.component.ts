import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students:any=[];
  constructor(private service:StudentService,private routes:Router) { }

  ngOnInit(): void {
      this.service.getStudents().subscribe((data:Student[])=>{
        this.students=data;
      })
  }
  ondelete(data:any){
    this.service.deleteStudent(data._id).subscribe(data=>{
      console.log(data);
     })
     this.routes.navigate(['/list-student']);
  }
}
