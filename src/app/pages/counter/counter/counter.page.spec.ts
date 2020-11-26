import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CounterPage } from './counter.page';

describe('CounterPage', () => {
  let component: CounterPage;
  let fixture: ComponentFixture<CounterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
