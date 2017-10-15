import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'productgroup',
    templateUrl: './productgroup.component.html'
})
export class ProductGroupComponent {
    public groupproduct: ProductGroupRetrieve[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/productgroup').subscribe(result => {
            this.groupproduct = result.json() as ProductGroupRetrieve[];
        }, error => console.error(error));
    }
}

interface ProductGroupRetrieve {
    id:number;
    name:string;
}
