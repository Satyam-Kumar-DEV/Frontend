import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHoverDropdownComponent } from './nav-hover-dropdown.component';

describe('NavHoverDropdownComponent', () => {
  let component: NavHoverDropdownComponent;
  let fixture: ComponentFixture<NavHoverDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavHoverDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavHoverDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
