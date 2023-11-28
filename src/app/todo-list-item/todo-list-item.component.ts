import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDo } from '../types/todoList';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent {
 @Input() listItem: ToDo = new ToDo('Placeholder');
}
