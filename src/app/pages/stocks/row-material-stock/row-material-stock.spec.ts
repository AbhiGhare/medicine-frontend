import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowMaterialStock } from './row-material-stock';

describe('RowMaterialStock', () => {
  let component: RowMaterialStock;
  let fixture: ComponentFixture<RowMaterialStock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowMaterialStock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowMaterialStock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
