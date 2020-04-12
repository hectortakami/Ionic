import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemSlidingPage } from './item-sliding.page';

describe('ItemSlidingPage', () => {
  let component: ItemSlidingPage;
  let fixture: ComponentFixture<ItemSlidingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSlidingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemSlidingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
