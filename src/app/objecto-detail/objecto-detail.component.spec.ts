import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectoDetailComponent } from './objecto-detail.component';

describe('ObjectoDetailComponent', () => {
  let component: ObjectoDetailComponent;
  let fixture: ComponentFixture<ObjectoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
