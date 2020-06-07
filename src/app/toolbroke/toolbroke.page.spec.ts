import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolbrokePage } from './toolbroke.page';

describe('ToolbrokePage', () => {
  let component: ToolbrokePage;
  let fixture: ComponentFixture<ToolbrokePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbrokePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbrokePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
