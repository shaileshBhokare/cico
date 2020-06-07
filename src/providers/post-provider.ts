import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service'

@Injectable()
export class PostProvider {
    server: string = 'http://34.244.117.88:5000/v1/';


    constructor(public http: Http,
        public apiService: ApiService) {

    }

    postData(body, subUrl) {
        let type = 'application/json; charset=UTF-8';
        let headers = new Headers({
            'Content-Type': type
        });
        let options = new RequestOptions({
            headers: headers
        });

        return this.http.post(this.server + subUrl, JSON.stringify(body), options).pipe(map((res) => res.json())); //console.log(res))) 
        //here instead of res.text res.json will come.
    }

    getData(subUrl) {
        let type = 'application/json';
        let headers = new Headers({
            'Content-Type': type,
            // 'Authorization': 'bearer='+this.apiService.user_data_get()['token']
        });
        headers.append('authorization', 'Bearer ' + this.apiService.user_data_get()['token']);
        // console.log(JSON.stringify(headers));

        let options = new RequestOptions({
            headers: headers
        });

        return this.http.get(this.server + subUrl, options).pipe(map((res) => res.json())); //console.log(res))) 
        //here instead of res.text res.json will come.
    }

    postDataBearer(body, subUrl) {
        let type = 'application/json; charset=UTF-8';
        let headers = new Headers({
            'Content-Type': type
        });
        headers.append('authorization', 'Bearer ' + this.apiService.user_data_get()['token']);
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.post(this.server + subUrl, JSON.stringify(body), options).pipe(map((res) => res.json())); //console.log(res))) 
        //here instead of res.text res.json will come.
    }


    patchDataBearer(body, subUrl) {
        let type = 'application/json; charset=UTF-8';
        let headers = new Headers({
            'Content-Type': type
        });
        headers.append('authorization', 'Bearer ' + this.apiService.user_data_get()['token']);
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.patch(this.server + subUrl, JSON.stringify(body), options).pipe(map((res) => res.json())); //console.log(res))) 
        //here instead of res.text res.json will come.
    }

}