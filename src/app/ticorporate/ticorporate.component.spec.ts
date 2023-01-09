import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicorporateComponent } from './ticorporate.component';

describe('TicorporateComponent', () => {
  let component: TicorporateComponent;
  let fixture: ComponentFixture<TicorporateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicorporateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
