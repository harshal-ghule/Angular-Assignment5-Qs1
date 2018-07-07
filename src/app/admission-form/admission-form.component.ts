import { Component, OnInit } from '@angular/core';
//import { Student } from '../student';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {

  public Studname;
  public Gender;
  public MobileNo;
  public CollageName;
  public Email;
  public BatchName;
  public Address;

  constructor() { }

  ngOnInit() {
  }

}
