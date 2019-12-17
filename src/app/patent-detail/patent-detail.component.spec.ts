import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentDetailComponent } from './patent-detail.component';

describe('PatentDetailComponent', () => {
  let component: PatentDetailComponent;
  let fixture: ComponentFixture<PatentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
