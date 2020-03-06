import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshCompComponent } from './fresh-comp.component';

describe('FreshCompComponent', () => {
  let component: FreshCompComponent;
  let fixture: ComponentFixture<FreshCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
