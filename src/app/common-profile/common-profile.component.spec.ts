import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonProfileComponent } from './common-profile.component';

describe('CommonProfileComponent', () => {
  let component: CommonProfileComponent;
  let fixture: ComponentFixture<CommonProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
