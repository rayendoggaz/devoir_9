import { ComponentFixture, TestBed } from '@angular/core/testing';

import { concertsComponent } from './concerts.component';

describe('concertsComponent', () => {
  let component: concertsComponent;
  let fixture: ComponentFixture<concertsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [concertsComponent]
    });
    fixture = TestBed.createComponent(concertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
