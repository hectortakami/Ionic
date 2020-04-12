import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FloatingActionButtonPage } from './floating-action-button.page';

describe('FloatingActionButtonPage', () => {
  let component: FloatingActionButtonPage;
  let fixture: ComponentFixture<FloatingActionButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingActionButtonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FloatingActionButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
