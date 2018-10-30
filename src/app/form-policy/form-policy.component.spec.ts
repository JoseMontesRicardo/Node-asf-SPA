import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPolicyComponent } from './form-policy.component';

describe('FormPolicyComponent', () => {
  let component: FormPolicyComponent;
  let fixture: ComponentFixture<FormPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
