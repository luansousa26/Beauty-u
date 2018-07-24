import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToopComponent } from './back-toop.component';

describe('BackToopComponent', () => {
  let component: BackToopComponent;
  let fixture: ComponentFixture<BackToopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackToopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
