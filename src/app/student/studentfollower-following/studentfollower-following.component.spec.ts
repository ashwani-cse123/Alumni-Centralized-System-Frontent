import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentfollowerFollowingComponent } from './studentfollower-following.component';

describe('StudentfollowerFollowingComponent', () => {
  let component: StudentfollowerFollowingComponent;
  let fixture: ComponentFixture<StudentfollowerFollowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentfollowerFollowingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentfollowerFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
