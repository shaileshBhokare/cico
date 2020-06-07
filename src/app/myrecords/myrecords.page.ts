import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider'


@Component({
  selector: 'app-myrecords',
  templateUrl: './myrecords.page.html',
  styleUrls: ['./myrecords.page.scss'],
})
export class MyrecordsPage implements OnInit {

  constructor(public postProvider: PostProvider) { }

  ngOnInit() {
  }

  transactions: any = []

  getRecords() {

    let formData = {

    }

    this.postProvider.getData('checkIn/listing').subscribe((data) => {

      if (data.status == 'success') {
        this.transactions = data.transactions;
      } else {

      }
    });
  }

  ionViewDidEnter() {
    this.getRecords();
  }

}
