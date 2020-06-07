import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyrecordsPage } from './myrecords.page';

describe('MyrecordsPage', () => {
  let component: MyrecordsPage;
  let fixture: ComponentFixture<MyrecordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrecordsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyrecordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
