import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotInstalledComponent } from './not-installed.component';

describe('NotInstalledComponent', () => {
  let component: NotInstalledComponent;
  let fixture: ComponentFixture<NotInstalledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotInstalledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotInstalledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
