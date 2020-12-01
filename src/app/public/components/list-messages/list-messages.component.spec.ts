import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ListMessagesComponent } from './list-messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
describe('ListMessagesComponent', () => {
  let component: ListMessagesComponent;
  let fixture: ComponentFixture<ListMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMessagesComponent ],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatPaginatorModule,
        MatTableModule,
        MatInputModule,
        MatSortModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
