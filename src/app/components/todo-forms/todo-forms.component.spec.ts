import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormsComponent } from './todo-forms.component';

describe('TodoFormsComponent', () => {
  let component: TodoFormsComponent;
  let fixture: ComponentFixture<TodoFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
