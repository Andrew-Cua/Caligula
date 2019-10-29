import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitScoutFormComponent } from './pit-scout-form.component';

describe('PitScoutFormComponent', () => {
  let component: PitScoutFormComponent;
  let fixture: ComponentFixture<PitScoutFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitScoutFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitScoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
