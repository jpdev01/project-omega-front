import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Subject } from 'rxjs';

// @Injectable()
export class Utils {

  apiUrl: string = "localhost:8080/neusamoda";

  constructor() { }

  getApiUrl(): string {
    return this.apiUrl;
  }

}
