import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider'
import { ApiService } from '../api.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public menuCtrl: MenuController,
    public apiService: ApiService,
    public postProvider: PostProvider) { }

  ngOnInit() {
    this.loadProject();
  }

  openMenu() {
    this.menuCtrl.open();
  }

  projectlist: any = [];
  project: string = ''
  selectedProject: string = ''

  loadProject() {
    // console.log(JSON.stringify(this.apiService.user_data_get()['token']))
    this.postProvider.getData('project').subscribe((data) => {

      if (data.status == 'success') {
        this.projectlist = data.projectlist;
        console.log(JSON.stringify(data.projectlist))
      } else {
        this.apiService.presentToast('Project list loading failed')
      }


    });
  }

  showSelectValue(selectedProject) {
    console.log(selectedProject);
    this.selectedProject = selectedProject;
  }

  checkIn() {
    if (this.selectedProject == '') {
      this.apiService.presentToast('Please select project')
    } else {
      let formData = {
        project: this.selectedProject
      };

      this.postProvider.postDataBearer(formData, 'checkIn').subscribe((data) => {
        console.log(data);

        if (data.code == 1) {
          this.apiService.user_data_get().offlineData.checkInStatus = true;
          this.apiService.user_data_get().offlineData.checkInSync = true;
          this.apiService.user_data_get().offlineData.checkInData = {
            project: this.selectedProject,
            checkintime: new Date().toISOString()
          }

          this.apiService.user_data_get().checkInData = data;

          this.apiService.user_data_set(this.apiService.user_data_get());

          this.apiService.presentToast(data.message);
        } else {
          this.apiService.presentToast(data.message);
        }


      });


    }
  }

  disabled: boolean = true;
  ionViewDidEnter() {
    if (this.apiService.user_data_get().offlineData.checkInStatus == true) {
      this.disabled = true;
      this.selectedProject = this.apiService.user_data_get().offlineData.checkInData.project;
    } else {
      this.disabled = false;

    }
    console.log(JSON.stringify(this.apiService.user_data_get()))
  }

  scanQR() {

    if (this.apiService.user_data_get().offlineData.checkInStatus) {

      let formData = {
        "toolName": "asb",
        "projectName": this.selectedProject
      }

      this.postProvider.postDataBearer(formData, 'tool/take').subscribe((data) => {

        if (data.code == 1) {
          this.apiService.presentToast(data.message);
        } else {
          this.apiService.presentToast(data.message);
        }
      });


    } else {
      this.apiService.presentToast('Please Check In first')
    }



  }
  checkOut() {
    let formData = {
      id: this.apiService.user_data_get().checkInData.data._id
    };

    // console.log(this.apiService.user_data_get())

    this.postProvider.patchDataBearer(formData, 'checkIn?id=' + this.apiService.user_data_get().checkInData.data._id).subscribe((data) => {
      console.log(data);

      if (data.status == 'success') {
        this.apiService.user_data_get().offlineData.checkInStatus = false;
      } else {
        this.apiService.presentToast('Something went wrong')

      }

    });
  }


}
