import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import  { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'developers-Project';
//   question: string = '';
//   answers: { text: string }[] = [];
//   empForm: FormGroup;


//   constructor(private fb: FormBuilder) {}

//   addQuestion() {
//     if (this.question.trim() !== '') {
//       this.answers = [];
//     }
//   }

//   addAnswer() {
//     this.answers.push({ text: '' });
//   }

//   removeAnswer(index: number) {
//     this.answers.splice(index, 1);
//   }
//   // closeMCQ() {
//   //   document.getElementById('showMCQ').style.display = "none";
//   //   this.empForm.reset();
//   //   const employeesArray = this.empForm.get('employees') as FormArray;
//   //   while (employeesArray.length !== 0) {
//   //     employeesArray.removeAt(0);
//   //   }
//   // }

//   employees(): FormArray {
//     return this.empForm.get('employees') as FormArray;
//   }

//   newEmployee(): FormGroup {
//     return this.fb.group({
//       question: '',
//       skills: this.fb.array([])
//     });
//   }

//   addEmployee() {
//     console.log('Adding an employee');
//     this.employees().push(this.newEmployee());
//   }

//   removeEmployee(empIndex: number) {
//     this.employees().removeAt(empIndex);
//   }

//   employeeSkills(empIndex: number): FormArray {
//     return this.employees()
//       .at(empIndex)
//       .get('skills') as FormArray;
//   }

//   newSkill(): FormGroup {
//     return this.fb.group({
//       answer: '',
//       // exp: '',
//       selectedChoice: false // Add selectedChoice FormControl
//     });
//   }

//   addEmployeeSkill(empIndex: number) {
//     const skillsArray = this.employeeSkills(empIndex);

//     // Uncheck previously selected choices
//     for (const control of skillsArray.controls) {
//       // control.get('selectedChoice').setValue(false);
//     }

//     skillsArray.push(this.newSkill());
//   }

//   removeEmployeeSkill(empIndex: number, skillIndex: number) {
//     this.employeeSkills(empIndex).removeAt(skillIndex);
//   }

//   onSubmit() {
//     // console.log(this.empForm.value);
//     // alert(JSON.stringify(this.empForm.value));

//     // var editor = CKEDITOR.instances['editor']; 
//     // var startElement = editor.getSelection().getStartElement();
//     // var paraDataIndexId = editorInstance.generateDataIndexIds('p');
//     // var paraElement = editorInstance.elementCreation('p', { 'type': 'paragraph', 'data-indexid': paraDataIndexId }); 
//     // paraElement.insertAfter(startElement);
//     // editor.focus();
//     // var selection = editor.getSelection();
//     // var range = selection.getRanges()[0];
//     // range.moveToElementEditablePosition(paraElement, true);
//     // range.select();
//     // editor.getSelection().selectRanges([range]);

//     // var editor = CKEDITOR.instances['editor'];
//     // var startElement = editor.getSelection().getStartElement();
//     // var divEle = editorInstance.elementCreation('div', { 'type': 'interactivity-mc', 'id': 'page12-mc1' });
//     // divEle.insertAfter(startElement);
//     // editor.focus();
//     // var selection = editor.getSelection();
//     // var range = selection.getRanges()[0];
//     // range.moveToElementEditablePosition(divEle, true);
//     // range.select();
//     // editor.getSelection().selectRanges([range]);
//   }

//   getSelectedChoice(empIndex: number): number {
//     const skillsArray = this.employeeSkills(empIndex);

//     for (let i = 0; i < skillsArray.length; i++) {
//       // if (skillsArray.at(i).get('selectedChoice').value) {
//       //   return i;
//       // }
//     }

//     return -1; // No choice selected
//   }


// }


export class AppComponent implements OnInit {
  // form: FormGroup;

  constructor(private fb: FormBuilder, private http:HttpClient,
    private router:Router) {
    // this.form = this.fb.group({
    //   questions: this.fb.array([])
    // });
  }

  // get questions(): FormArray {
  //   return this.form.get('questions') as FormArray;
  // }

  // addQuestion() {
  //   const questions = this.form.get('questions') as FormArray;
  //   questions.push(
  //     this.fb.group({
  //       question: ['', Validators.required],
  //       answers: this.fb.array([])
  //     })
  //   );
  // }

  // removeQuestion(index: number) {
  //   const questions = this.form.get('questions') as FormArray;
  //   questions.removeAt(index);
  // }

  // addAnswer(question: FormGroup) {
  //   const answers = question.get('answers') as FormArray;
  //   answers.push(this.fb.control(''));
  // }

  // removeAnswer(question: FormGroup, index: number) {
  //   const answers = question.get('answers') as FormArray;
  //   answers.removeAt(index);
  // }

  // submitForm() {
  //   // Handle form submission logic here
  //   console.log(this.form.value);
  // }

  ngOnInit() {}
 
}
