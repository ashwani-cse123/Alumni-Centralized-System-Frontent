import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsIntrenshipsComponent } from './jobs-intrenships.component';

describe('JobsIntrenshipsComponent', () => {
  let component: JobsIntrenshipsComponent;
  let fixture: ComponentFixture<JobsIntrenshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsIntrenshipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsIntrenshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
