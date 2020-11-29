import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RestApisService } from './services/rest-apis.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [RestApisService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'space-x-browser'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('space-x-browser');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    // expect(compiled.querySelector('.content span').textContent).toContain('space-x-browser app is running!');
  });

  it('should fire on screen resize',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.onResize("event");
  }); 

});
