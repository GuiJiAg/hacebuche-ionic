import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWinesPage } from './modal-wines.page';

describe('ModalWinesPage', () => {
  let component: ModalWinesPage;
  let fixture: ComponentFixture<ModalWinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWinesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
