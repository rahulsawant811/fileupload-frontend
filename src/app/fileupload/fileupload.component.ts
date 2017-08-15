import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  product;

  constructor(private http: Http) {}

  ngOnInit() {
  }

  filesToUpload: Array<File> = [];

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    formData.append("uploads[]", files[0], files[0]['name']);

    this.http.post('http://localhost:3000/upload', formData)
      .map(files => files.json())
      .subscribe(files => console.log('files', files))
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.product.photo = fileInput.target.files[0]['name'];
  }

}
