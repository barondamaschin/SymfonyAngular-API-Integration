import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeazaItemComponent } from './creeaza-item.component';

describe('CreeazaItemComponent', () => {
  let component: CreeazaItemComponent;
  let fixture: ComponentFixture<CreeazaItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreeazaItemComponent]
    });
    fixture = TestBed.createComponent(CreeazaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
