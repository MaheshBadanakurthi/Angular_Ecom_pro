import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProDetailsComponent } from './show-pro-details.component';

describe('ShowProDetailsComponent', () => {
  let component: ShowProDetailsComponent;
  let fixture: ComponentFixture<ShowProDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
