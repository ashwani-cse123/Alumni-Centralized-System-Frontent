import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentfollowRequestComponent } from './studentfollow-request.component';

describe('StudentfollowRequestComponent', () => {
  let component: StudentfollowRequestComponent;
  let fixture: ComponentFixture<StudentfollowRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentfollowRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentfollowRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
