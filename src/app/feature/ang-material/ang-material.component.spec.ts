import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngMaterialComponent } from './ang-material.component';

describe('AngMaterialComponent', () => {
  let component: AngMaterialComponent;
  let fixture: ComponentFixture<AngMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
