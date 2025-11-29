import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowMaterial } from './row-material';

describe('RowMaterial', () => {
  let component: RowMaterial;
  let fixture: ComponentFixture<RowMaterial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowMaterial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowMaterial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
