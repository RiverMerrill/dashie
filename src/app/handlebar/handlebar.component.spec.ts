import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlebarComponent } from './handlebar.component';

describe('HandlebarComponent', () => {
  let component: HandlebarComponent;
  let fixture: ComponentFixture<HandlebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
