import { v4 } from 'uuid';

type Todo = {
  [key: string]: boolean | string | Date,
  id: string,
  completed: boolean,
  title: string,
  createdDate: Date,
  createdDateString: string,
  modifiedDate: Date,
  modifiedDateString: string,
}

export class ToDo {
  details: Todo;
  constructor(_title: string){
    this.details = {
      id: v4(),
      completed: false,
      title: _title,
      createdDate: new Date(),
      createdDateString: this.generateDate(new Date()),
      modifiedDate: new Date(),
      modifiedDateString: this.generateDate(new Date())
    };
  }
  generateTodo() : Todo { 
    return this.details; 
  }
  generateDate(date: Date): string {
    let formattedDate: string[]= ["DD","MM","YYYY", "HH", "MM", "SS"];
    formattedDate[0] = date.getDate().toString();
    formattedDate[1] = (date.getMonth() + 1).toString();
    formattedDate[2] = date.getFullYear().toString();
    formattedDate[3] = date.getHours().toString();
    formattedDate[4] = date.getMinutes().toString();
    formattedDate[5] = date.getSeconds() > 9 ? date.getSeconds().toString() : "0" + date.getSeconds().toString();
    return formattedDate.slice(0, 3).join("/") + " @ " + formattedDate.slice(3, formattedDate.length).join(":");
  }
  updateTodo(key: string, value: string | Date | boolean){
    if(typeof value === 'object'){
      this.details.modifiedDate = value;
      this.details.modifiedDateString = this.generateDate(value);
    } else {
      this.details[key] = value;
      this.updateTodo("modifiedDate", new Date());
    }
  }
  getId(): string { return this.details.id };
  getTitle(): string { return this.details.title; }
  getStatus(): boolean { return this.details.completed; }
  setStatus(): void { this.updateTodo('completed', !this.details.completed); }
  getCreatedDateString(): string { return this.details.createdDateString; }
  getModifiedDateString(): string { return this.details.modifiedDateString; }
}