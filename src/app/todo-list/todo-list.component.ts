import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDo } from '../types/todoList';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TodoListItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  listItems: ToDo[];
  listItemText = new FormControl("Program Skynet");
  constructor(){
      this.listItems = [];
  }
  updateField(e: Event){
    this.listItemText.setValue(this.listItemText.getRawValue());
  }
  createTodo(){
    const todo = new ToDo(this.listItemText.getRawValue() as string);
    this.listItems.push(todo);
  }
}
