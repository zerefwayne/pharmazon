import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {MedicineService} from '../services/medicine.service';
import {Router} from '@angular/router';
import {FileUploader} from 'ng2-file-upload';
import axios from 'axios';
import {MedicineShort} from '../medicine-short.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {


  constructor(private medicineService: MedicineService, private router: Router) { }

  fileUpload: FormGroup = new FormGroup({
    file: new FormControl(null)
  });


  ngOnInit() {
  }

  searchByText(form: NgForm){

    const query = form.value.search.trim();

    if(query.length > 0){

      this.router.navigate(['search', 'text'], {queryParams:{query: query}});

    }


  }

  onFileChange(event){

    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.fileUpload.get('file').setValue({

          filename: file.name,
          filetype: file.type,
          value: reader.result.toString().split(',')[1]

        });
      }

    }



  }

  onFileSubmit(){

    const data = this.fileUpload.value.file;

    console.log(data);

    axios.post(`/api/prescription/upload`, {data: data.value}, {
      headers:
        { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST' }
    }).then(res => {

      console.log(res);


    }).catch(err => {
      console.log(err);
    });


  }


}
