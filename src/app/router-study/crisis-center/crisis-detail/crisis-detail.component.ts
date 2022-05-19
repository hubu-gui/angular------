import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Crisis } from '../crisis';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CrisisService } from '../../crisis-center/crisis.service';
import { switchMap } from 'rxjs/operators';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrisisDetailComponent implements OnInit {
  editName: any;
  crisis?: Crisis | any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crisisServe: CrisisService,
    private cdr: ChangeDetectorRef,
    private dialogServe: DialogService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.crisis = data.crisis;
      this.editName = data.crisis.name;
      this.cdr.markForCheck();
    });
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.editName = this.crisis.name;
    this.gotoCrises();
  }

  gotoCrises() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate() {
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    return this.dialogServe.confirm('Discard changes?');
  }
}
