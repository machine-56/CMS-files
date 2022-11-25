import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindEditComponent } from './admind-edit.component';

describe('AdmindEditComponent', () => {
  let component: AdmindEditComponent;
  let fixture: ComponentFixture<AdmindEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
