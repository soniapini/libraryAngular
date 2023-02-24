import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyLibraryLogoComponent } from './academy-library-logo.component';

describe('AcademyLibraryLogoComponent', () => {
  let component: AcademyLibraryLogoComponent;
  let fixture: ComponentFixture<AcademyLibraryLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyLibraryLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademyLibraryLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
