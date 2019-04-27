import { Component, OnInit, Injector } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  _toastrService: ToastrService

  constructor(injector: Injector) {
    this._toastrService = injector.get(ToastrService)
   }

  ngOnInit() {
    this._toastrService.success('Vai toma no cu porra!')
  }

}
