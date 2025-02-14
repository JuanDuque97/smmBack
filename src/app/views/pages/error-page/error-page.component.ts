import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit, OnDestroy {

  type: any;
  title: any;
  desc: any;
  private sub?: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type');
    console.log(this.type);

    this.sub = this.route.data.subscribe( param => {
      if(param.type) {
        this.type = param.type;
      }
      if(param.title) {
        this.title = param.title;
      }
      if(param.desc) {
        this.desc = param.desc
      }
    });

    switch(this.type) {
      case '404':
        if (!this.title) {
          this.title = ''
        }
        if (!this.desc) {
          this.title = 'Se esta trajando el los mudolos fantantes ';
        }
        break;
      case '500':
        if (!this.title) {
          this.title = 'Se esta trajando el los mudolos fantantes ';
        }
        if (!this.desc) {
          this.desc = 'Gracias ';
        }
        break;
      default:
        // if (!this.type) {
          this.type = 'Ooops..';
        // }
        if (!this.title) {
          this.title = 'Se esta trajando el los mudolos fantantes ';
        }
        if (!this.desc) {
          this.desc = 'Gracias ';
        }
    }
  }

	ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
