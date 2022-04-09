import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecustomComponent } from './updatecustom.component';

describe('UpdatecustomComponent', () => {
  let component: UpdatecustomComponent;
  let fixture: ComponentFixture<UpdatecustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
