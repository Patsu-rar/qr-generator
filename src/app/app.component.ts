import {Component, ViewChild} from '@angular/core';
import {SafeUrl} from "@angular/platform-browser";
import {CdkTextareaAutosize} from "@angular/cdk/text-field";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  qrCodeStr: string = ' ';
  qrCodeDownloadLink: SafeUrl = "";

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  generate(str: string) {
    this.qrCodeDownloadLink = document.getElementsByTagName("canvas")[0].toDataURL("image/png");
    console.log(this.qrCodeDownloadLink);
    return this.qrCodeStr = str;
  }
}
