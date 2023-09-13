import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  Mark: number = 0;

  studentList: any[] = [

    { Name: 'Name 1 ', Email: 'email@gmail.com ', Mark: 55 },

    { Name: 'Name 2 ', Email: 'Email2@gmail.com', Mark: 30 }

  ];


  getMarkColor(Mark: number): string {

    return Mark < 50 ? 'red-text' : 'green-text';

  }


  getPassFailStatus(Mark: number): string {

    return Mark >= 50 ? 'PASS' : 'FAIL';

  }

  getStyle(): any {

    return {

      'background-color': 'rgba(255, 99, 71, 0.5)',

      'color': 'white',

      'padding': '10px',

      'text-align': 'center',

    };

  }


}
