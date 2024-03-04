import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewTrisComponent } from './overview-tris.component';

describe('OverviewTrisComponent', () => {
  let component: OverviewTrisComponent;
  let fixture: ComponentFixture<OverviewTrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewTrisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewTrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
