import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobIntrenshipsComponent } from './job-intrenships.component';

describe('JobIntrenshipsComponent', () => {
  let component: JobIntrenshipsComponent;
  let fixture: ComponentFixture<JobIntrenshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobIntrenshipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobIntrenshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
