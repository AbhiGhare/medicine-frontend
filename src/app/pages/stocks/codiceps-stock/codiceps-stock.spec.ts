import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodicepsStock } from './codiceps-stock';

describe('CodicepsStock', () => {
  let component: CodicepsStock;
  let fixture: ComponentFixture<CodicepsStock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodicepsStock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodicepsStock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
