import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriePage } from './categorie.page';

describe('CategoriePage', () => {
  let component: CategoriePage;
  let fixture: ComponentFixture<CategoriePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
