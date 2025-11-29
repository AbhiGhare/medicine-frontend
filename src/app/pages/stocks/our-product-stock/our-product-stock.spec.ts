import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductStock } from './our-product-stock';

describe('OurProductStock', () => {
  let component: OurProductStock;
  let fixture: ComponentFixture<OurProductStock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurProductStock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurProductStock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
