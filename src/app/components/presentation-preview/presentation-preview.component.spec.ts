import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationPreviewComponent } from './presentation-preview.component';

describe('PresentationPreviewComponent', () => {
  let component: PresentationPreviewComponent;
  let fixture: ComponentFixture<PresentationPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
