import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListItemComponent } from './todo-list-item.component';

describe('TodoListItemComponent', () => {
  let component: TodoListItemComponent;
  let fixture: ComponentFixture<TodoListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a placeholder todo item.', () => {
    const placeholder = component.listItem.getTitle();
    expect(placeholder).toEqual('Placeholder');
  });
});
