import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodToKnowComponent } from './good-to-know.component';

describe('GoodToKnowComponent', () => {
  let component: GoodToKnowComponent;
  let fixture: ComponentFixture<GoodToKnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodToKnowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodToKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
