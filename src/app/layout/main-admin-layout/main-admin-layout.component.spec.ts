import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdminLayoutComponent } from './main-admin-layout.component';

describe('MainAdminLayoutComponent', () => {
  let component: MainAdminLayoutComponent;
  let fixture: ComponentFixture<MainAdminLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAdminLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
