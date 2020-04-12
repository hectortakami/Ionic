import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SplitPanePage } from './split-pane.page';

describe('SplitPanePage', () => {
  let component: SplitPanePage;
  let fixture: ComponentFixture<SplitPanePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitPanePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SplitPanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
