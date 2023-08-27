import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemComponent } from './lista-item.component';

describe('ListaItemComponent', () => {
  let component: ListaItemComponent;
  let fixture: ComponentFixture<ListaItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaItemComponent]
    });
    fixture = TestBed.createComponent(ListaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
