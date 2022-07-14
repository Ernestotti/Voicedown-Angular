import { TestBed } from '@angular/core/testing';
import { AppService } from './app.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../environments/environment';

describe('AppService', () => {
  let httpTestingController: HttpTestingController;
  let service: AppService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(AppService);
    
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('saveNote', () => {
    it('calls to the API with the note to save and the title were belong', () => {
      const response = {};
      const title = 'A title'
      const note = 'A note'
    
  
      service.saveNote(title, note).subscribe(() => {});
  
      const req = httpTestingController.expectOne(`${environment.apiUrl}/saveNote`);
  
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual({title: title, note: note})
  
      req.flush(response);
    });
  }); 
  describe('deleteNote', () => {
    it('calls to the API with the note to delete from the title were belong', () => {
      const response = {};
      const title = 'A title'
      const note = 'A note'
    
  
      service.deleteNote(title, note).subscribe(() => {});
  
      const req = httpTestingController.expectOne(`${environment.apiUrl}/delete-note`);
  
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual({title: title, note: note})
  
      req.flush(response);
    });
  });
})