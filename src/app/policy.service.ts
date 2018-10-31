import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(public http: Http, public dialog: MatDialog) { }

  getList() {
    return this.http.get('http://localhost:5500/policytypes').toPromise().then(this.extractData).catch(this.handleError);
  }

  createInsurancePolicy(newUser) {
    return this.http.post('http://localhost:5500/insurancepolicy', newUser).toPromise().then((this.extractData).bind(this)).catch((this.handleError).bind(this));
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    let body;
    if (error instanceof Response) {
      body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    this.openDialog(body);
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  openDialog(data): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: '400px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
