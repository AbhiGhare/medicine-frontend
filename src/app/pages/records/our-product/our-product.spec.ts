import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProduct } from './our-product';

describe('OurProduct', () => {
  let component: OurProduct;
  let fixture: ComponentFixture<OurProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
