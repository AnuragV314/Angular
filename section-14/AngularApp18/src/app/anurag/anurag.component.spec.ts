import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuragComponent } from './anurag.component';

describe('AnuragComponent', () => {
  let component: AnuragComponent;
  let fixture: ComponentFixture<AnuragComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnuragComponent]
    });
    fixture = TestBed.createComponent(AnuragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
