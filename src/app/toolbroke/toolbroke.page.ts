import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider'
import { ApiService } from '../api.service'
@Component({
  selector: 'app-toolbroke',
  templateUrl: './toolbroke.page.html',
  styleUrls: ['./toolbroke.page.scss'],
})
export class ToolbrokePage implements OnInit {

  constructor(public apiService: ApiService,
    public postProvider: PostProvider) { }

  ngOnInit() {
  }

  description: string = ''

  toolbroke() {


    if (this.description.trim().length > 0) {
      let formData = {
        "toolName": "asb",
        "description": this.description
      }

      console.log(this.description)

      this.postProvider.postDataBearer(formData, 'tool/report').subscribe((data) => {

        if (data.code == 1) {
          this.apiService.presentToast(data.message);
        } else {
          this.apiService.presentToast(data.message);
        }
      });
    } else {
      this.apiService.presentToast('Please enter description');
    }




  }

}
