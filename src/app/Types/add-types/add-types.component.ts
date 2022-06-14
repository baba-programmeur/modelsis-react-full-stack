import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Types } from 'src/app/Modeles/types';
import { TypesService } from 'src/app/Services/types.service';

@Component({
  selector: 'app-add-types',
  templateUrl: './add-types.component.html',
  styleUrls: ['./add-types.component.css']
})
export class AddTypesComponent implements OnInit {

  constructor(private typeService:TypesService,private route:ActivatedRoute,private router:Router) { }

  newType:Types =new Types() ;

  ngOnInit(): void {
  }

  addType()
  {
    this.typeService.addType(this.newType).subscribe(prod =>

      {console.log(prod)});

    this.router.navigate(['/products']);

  }

  reset()
  {
    
  }
}
