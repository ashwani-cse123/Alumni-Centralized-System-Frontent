import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPostComponent } from './student-post.component';

describe('StudentPostComponent', () => {
  let component: StudentPostComponent;
  let fixture: ComponentFixture<StudentPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
