import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTableting } from './for-tableting';

describe('ForTableting', () => {
  let component: ForTableting;
  let fixture: ComponentFixture<ForTableting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForTableting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForTableting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
