import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinesPage } from './wines.page';

describe('WinesPage', () => {
  let component: WinesPage;
  let fixture: ComponentFixture<WinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
