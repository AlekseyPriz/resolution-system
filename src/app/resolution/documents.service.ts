import { Injectable } from '@angular/core';
import {IResolution} from "./Iresolution.interface";

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  public getDocument() {
    return Promise.resolve(
      {
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A commodi consectetur eligendi officia quidem reiciendis sit voluptate. Cum, dignissimos dolores eveniet harum maiores perferendis recusandae rem sit temporibus vel voluptatem.",
        title: "Заголовок документа"
      });
  }


  sendResultToServer(resultObj: IResolution): Promise<IResolution> {
    return Promise.resolve(resultObj);
  }
}
