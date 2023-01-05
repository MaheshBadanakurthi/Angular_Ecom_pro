import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsellproductComponent } from './addsellproduct.component';

describe('AddsellproductComponent', () => {
  let component: AddsellproductComponent;
  let fixture: ComponentFixture<AddsellproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsellproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsellproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
