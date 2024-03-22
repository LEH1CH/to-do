import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDescriptionPageComponent } from './project-description-page.component';

describe('ProjectDescriptionPageComponent', () => {
  let component: ProjectDescriptionPageComponent;
  let fixture: ComponentFixture<ProjectDescriptionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDescriptionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDescriptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
