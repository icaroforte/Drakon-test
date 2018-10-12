import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrakonComponent } from './drakon.component';

describe('DrakonComponent', () => {
  let component: DrakonComponent;
  let fixture: ComponentFixture<DrakonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrakonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrakonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
