import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RefreshnerPage } from './refreshner.page';

describe('RefreshnerPage', () => {
  let component: RefreshnerPage;
  let fixture: ComponentFixture<RefreshnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RefreshnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
