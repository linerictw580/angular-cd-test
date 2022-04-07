import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/Todo.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  @Input() todos: ITodo[];

  constructor() {}

  ngOnInit(): void {}
}
