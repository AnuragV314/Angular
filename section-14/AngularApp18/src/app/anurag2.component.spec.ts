import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anurag2Component } from './anurag2.component';

describe('Anurag2Component', () => {
  let component: Anurag2Component;
  let fixture: ComponentFixture<Anurag2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anurag2Component]
    });
    fixture = TestBed.createComponent(Anurag2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
