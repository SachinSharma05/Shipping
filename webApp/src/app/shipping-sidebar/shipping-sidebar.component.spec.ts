import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingSidebarComponent } from './shipping-sidebar.component';

describe('ShippingSidebarComponent', () => {
  let component: ShippingSidebarComponent;
  let fixture: ComponentFixture<ShippingSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShippingSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
