import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizualizeazaItemComponent } from './vizualizeaza-item.component';

describe('VizualizeazaItemComponent', () => {
  let component: VizualizeazaItemComponent;
  let fixture: ComponentFixture<VizualizeazaItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VizualizeazaItemComponent]
    });
    fixture = TestBed.createComponent(VizualizeazaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
