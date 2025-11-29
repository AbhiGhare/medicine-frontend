import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToPaitents } from './to-paitents';

describe('ToPaitents', () => {
  let component: ToPaitents;
  let fixture: ComponentFixture<ToPaitents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToPaitents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToPaitents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
