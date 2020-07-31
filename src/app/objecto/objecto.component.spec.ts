import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectoComponent } from './objecto.component';

describe('ObjectoComponent', () => {
  let component: ObjectoComponent;
  let fixture: ComponentFixture<ObjectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
