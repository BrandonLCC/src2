import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThirdPagePage } from './third-page.page';

describe('ThirdPagePage', () => {
  let component: ThirdPagePage;
  let fixture: ComponentFixture<ThirdPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
