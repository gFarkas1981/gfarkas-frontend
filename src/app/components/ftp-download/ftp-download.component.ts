import { Component, OnInit } from '@angular/core';
import {FtpService} from '../../service/ftp.service';

@Component({
  selector: 'app-ftp-download',
  templateUrl: './ftp-download.component.html',
  styleUrls: ['./ftp-download.component.css']
})
export class FtpDownloadComponent implements OnInit {

  constructor(private ftpService : FtpService) { }

  ngOnInit() {
    this.downloadCV();
  }

    downloadCV() {
    this.ftpService.downloadCV();
  }
}
