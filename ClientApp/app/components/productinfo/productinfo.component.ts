import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'productinfo',
    templateUrl: './productinfo.component.html'
})
export class ProductInfoComponent {
    public infoproduct: ProductInfoRetrieve[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/productinfo').subscribe(result => {
            this.infoproduct = result.json() as ProductInfoRetrieve[];
        }, error => console.error(error));
    }
}

interface ProductInfoRetrieve {
    id:number;
    group_Id:number;
    name:string;
    description:string;
    rate:number;
}
