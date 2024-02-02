import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitashechasComponent } from './citashechas.component';

describe('CitashechasComponent', () => {
  let component: CitashechasComponent;
  let fixture: ComponentFixture<CitashechasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitashechasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitashechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
