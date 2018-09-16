import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeoresComponent } from './heores.component';

describe('HeoresComponent', () => {
  let component: HeoresComponent;
  let fixture: ComponentFixture<HeoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
