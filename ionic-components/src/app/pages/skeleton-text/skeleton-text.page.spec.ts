import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkeletonTextPage } from './skeleton-text.page';

describe('SkeletonTextPage', () => {
  let component: SkeletonTextPage;
  let fixture: ComponentFixture<SkeletonTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonTextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkeletonTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
