import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { filter, map } from "rxjs/operators";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  public claims$: Observable<any>;
  ngOnInit() {
    this.claims$ = this.authService.afAuth.idTokenResult.pipe(filter(m =>  m && !!m.claims), map((t) => t.claims));
  }
}
