import {Component, OnInit} from '@angular/core';
import {IResolution} from "./Iresolution.interface";
import {DocumentsService} from "./documents.service";

@Component({
  selector: 'app-resolution',
  templateUrl: './resolution.component.html',
  styleUrls: ['./resolution.component.css']
})

export class ResolutionComponent implements OnInit{

  constructor (private  documentsService: DocumentsService) {}

  public resolutionType: string;
  public comment: string | null = null;
  public result!: any;
  public showResult: boolean = false;
  public document: {title: string, body: string}


  public approve(): void {
    this.documentsService.sendResultToServer(this.getResultObj(1))
      .then((resultObjFromServer) => {
        this.result = resultObjFromServer;
        this.showResult = true
      });
  }

  public reject(): void {
    this.documentsService.sendResultToServer(this.getResultObj(0))
      .then((resultObjFromServer) => {
        this.result = resultObjFromServer;
        this.showResult = true
      });
  }

  public getResultObj(status: 0 | 1): IResolution {

    const approver: string = localStorage.getItem('user');
    let resolution: 'approved' | 'reject' | null = null;

    if (status === 0) resolution = 'reject';
    if (status === 1) resolution = 'approved';

    const resultObj: IResolution = {
      approver: approver,
      resolution: resolution,
      comment: this.comment,
      state: status,
      resolutionType: this.resolutionType,
    };

    return resultObj;
  }

  ngOnInit(): void {
    this.documentsService.getDocument()
      .then((data) => this.document = data);
  }


}
