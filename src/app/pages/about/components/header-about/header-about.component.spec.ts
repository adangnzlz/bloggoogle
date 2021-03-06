import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAboutComponent } from './header-about.component';

describe('HeaderAboutComponent', () => {
  let component: HeaderAboutComponent;
  let fixture: ComponentFixture<HeaderAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
