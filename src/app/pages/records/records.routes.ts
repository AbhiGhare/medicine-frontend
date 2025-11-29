import { Routes } from "@angular/router";
import { RowMaterial } from "./row-material/row-material";
import { Codiceps } from "./codiceps/codiceps";
import { OurProduct } from "./our-product/our-product";
import { Tablet } from "./tablet/tablet";
import { ToPaitents } from "./to-paitents/to-paitents";
import { ForTableting } from "./for-tableting/for-tableting";


export default [
    {path:'',redirectTo:'row-material-bill',pathMatch:'full'},
    { path: 'row-material-bill', component: RowMaterial },
    { path: 'codiceps-bill', component: Codiceps },
    { path: 'our-product-bill', component: OurProduct },
    { path: 'tablet-bill', component: Tablet },
    { path: 'to-patents', component: ToPaitents },
    { path: 'for-tableting', component: ForTableting },
] as Routes;
