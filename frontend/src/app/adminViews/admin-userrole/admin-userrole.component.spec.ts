import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserroleComponent } from './admin-userrole.component';

describe('AdminUserroleComponent', () => {
  let component: AdminUserroleComponent;
  let fixture: ComponentFixture<AdminUserroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserroleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
