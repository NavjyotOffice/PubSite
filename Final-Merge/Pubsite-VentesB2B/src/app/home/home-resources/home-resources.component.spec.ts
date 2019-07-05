import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeResourcesComponent } from './home-resources.component';

describe('HomeResourcesComponent', () => {
  let component: HomeResourcesComponent;
  let fixture: ComponentFixture<HomeResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
