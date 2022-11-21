import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloworldComponentComponent } from './helloworld-component.component';

describe('HelloworldComponentComponent', () => {
  let component: HelloworldComponentComponent;
  let fixture: ComponentFixture<HelloworldComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloworldComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloworldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
