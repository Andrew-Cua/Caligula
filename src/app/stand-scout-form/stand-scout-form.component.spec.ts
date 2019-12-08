import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandScoutFormComponent } from './stand-scout-form.component';

describe('StandScoutFormComponent', () => {
  let component: StandScoutFormComponent;
  let fixture: ComponentFixture<StandScoutFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandScoutFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandScoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
