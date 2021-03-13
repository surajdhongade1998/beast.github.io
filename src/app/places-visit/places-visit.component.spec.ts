import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesVisitComponent } from './places-visit.component';

describe('PlacesVisitComponent', () => {
  let component: PlacesVisitComponent;
  let fixture: ComponentFixture<PlacesVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
