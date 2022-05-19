import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { CRISES } from './mock-crises';
import { Crisis } from './crisis';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  constructor() {}

  getCrises(): Observable<Crisis[]> {
    return of(CRISES);
  }

  getCrisis(id: any) {
    return this.getCrises().pipe(
      map((crises: Crisis[]) => crises.find((crisis) => crisis.id === +id))
    );
  }
}
