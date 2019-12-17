import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PatentsService } from '../patents.service';
import { Patent } from '../patent';


@Component({
  selector: 'app-patents',
  templateUrl: './patents.component.html',
  styleUrls: ['./patents.component.css']
})
export class PatentsComponent implements OnInit {
  patents: Patent[];
  displayedColumns: string[] = ['publication_number',
   'priority_date', 'publication_date',
   'assignee', 'title',
  ];
  dataSource = new MatTableDataSource<Patent>(this.patents);


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private patentService: PatentsService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getPatents();
  }

    getPatents(): void {
    this.patentService.getPatents()
        .subscribe(patents => this.dataSource.data = patents);
    this.dataSource.paginator = this.paginator;

  }

}
