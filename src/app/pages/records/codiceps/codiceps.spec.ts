import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Codiceps } from './codiceps';

describe('Codiceps', () => {
  let component: Codiceps;
  let fixture: ComponentFixture<Codiceps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Codiceps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Codiceps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
