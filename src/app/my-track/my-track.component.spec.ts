import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTrackComponent } from './my-track.component';

describe('MyTrackComponent', () => {
  let component: MyTrackComponent;
  let fixture: ComponentFixture<MyTrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyTrackComponent]
    });
    fixture = TestBed.createComponent(MyTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
