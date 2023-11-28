import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconcertComponent } from './add-concert.component';

describe('AddconcertComponent', () => {
  let component: AddconcertComponent;
  let fixture: ComponentFixture<AddconcertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddconcertComponent]
    });
    fixture = TestBed.createComponent(AddconcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
