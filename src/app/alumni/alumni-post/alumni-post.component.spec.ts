import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniPostComponent } from './alumni-post.component';

describe('AlumniPostComponent', () => {
  let component: AlumniPostComponent;
  let fixture: ComponentFixture<AlumniPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumniPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
