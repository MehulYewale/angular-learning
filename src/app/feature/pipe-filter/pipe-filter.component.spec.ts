import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeFilterComponent } from './pipe-filter.component';

describe('PipeFilterComponent', () => {
  let component: PipeFilterComponent;
  let fixture: ComponentFixture<PipeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
