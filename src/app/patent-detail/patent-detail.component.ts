import { Subscription } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { PatentsService } from '../patents.service';
import { PatentDetail } from '../patent';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patent-detail',
  templateUrl: './patent-detail.component.html',
  styleUrls: ['./patent-detail.component.css']
})
export class PatentDetailComponent implements OnInit {

  patent: PatentDetail;

  constructor(
    private patentService: PatentsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getPatentDetails();
  }

  getPatentDetails(): void {
    const publicationNumber = this.route.snapshot.paramMap.get('publicationNumber');
    this.patentService.getPatentDetails(publicationNumber)
        .subscribe(patent => this.patent = patent);
  }

}
