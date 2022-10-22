import { Component, OnInit } from '@angular/core';
import { FormsModule,FormControl, FormGroup ,Validator}   from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {


  constructor(private studentService:StudentService,private router:ActivatedRoute,private routes:Router){}
  editStudent=new FormGroup({
    first_name:new FormControl(''),    
    last_name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    _id:new FormControl('')
  })
  
   student:any=[];
   ngOnInit() :void{
    // first get querystring parameter using 
  //  this.router.params.subscribe(params=>{this.studentService.singleStudent(params['id'])}))
    this.router.params.subscribe(params => {
      console.log(params['id'])
       this.studentService.getStudent(params['id']).subscribe((res)=>{
        this.student=res;
      });
    });
  }
  UpdateData(){
        //console.log(this.editStudent.value);
        this.studentService.updateStudent(this.editStudent.value).subscribe((data:any)=>{
          this.routes.navigate(['list-student']);
        })
  }   

      
  
  

}
