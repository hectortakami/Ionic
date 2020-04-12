import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReorderGroupPage } from './reorder-group.page';

describe('ReorderGroupPage', () => {
  let component: ReorderGroupPage;
  let fixture: ComponentFixture<ReorderGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReorderGroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReorderGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
