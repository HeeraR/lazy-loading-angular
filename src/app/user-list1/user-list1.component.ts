import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Array<{ name: string }> = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Sam Johnson' }
  ];

  ngOnInit() {
  }
}
