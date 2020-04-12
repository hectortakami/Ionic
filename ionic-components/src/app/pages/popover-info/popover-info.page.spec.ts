import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopoverInfoPage } from './popover-info.page';

describe('PopoverInfoPage', () => {
  let component: PopoverInfoPage;
  let fixture: ComponentFixture<PopoverInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopoverInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
