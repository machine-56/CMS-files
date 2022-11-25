import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdEditComponent } from './userd-edit.component';

describe('UserdEditComponent', () => {
  let component: UserdEditComponent;
  let fixture: ComponentFixture<UserdEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
