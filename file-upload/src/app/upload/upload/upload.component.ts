import { Component,Input,Output , EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

   mesg : string = 'success';

  status=false;
  constructor(public dialog: MatDialog, public uploadService: UploadService) {
  }

  public openUploadDialog() {
    let dialogRef = this.dialog.open(DialogComponent, { width: '50%', height: '50%' });
    dialogRef.componentInstance.clickevent.subscribe(($e) => {
      if(this.mesg===$e){
        this.status=true;
       }
    });
  }
  
}