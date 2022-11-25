import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWriteComponent } from './user-write.component';

describe('UserWriteComponent', () => {
  let component: UserWriteComponent;
  let fixture: ComponentFixture<UserWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
