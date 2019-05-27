import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinesInsertUpdatePage } from './wines-insert-update.page';

describe('WinesInsertUpdatePage', () => {
  let component: WinesInsertUpdatePage;
  let fixture: ComponentFixture<WinesInsertUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinesInsertUpdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinesInsertUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
