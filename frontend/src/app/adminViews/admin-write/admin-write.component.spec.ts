import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWriteComponent } from './admin-write.component';

describe('AdminWriteComponent', () => {
  let component: AdminWriteComponent;
  let fixture: ComponentFixture<AdminWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
