import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMenuPage } from './modal-menu.page';

describe('ModalMenuPage', () => {
  let component: ModalMenuPage;
  let fixture: ComponentFixture<ModalMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
