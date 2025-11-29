import { Routes } from "@angular/router";
import { RowMaterialStock } from "./row-material-stock/row-material-stock";
import { CodicepsStock } from "./codiceps-stock/codiceps-stock";
import { OurProductStock } from "./our-product-stock/our-product-stock";


export default [
    {path:'',redirectTo:'row-material-stocks',pathMatch:'full'},
    { path: 'row-material-stocks', component: RowMaterialStock },
    { path: 'codiceps-stocks', component: CodicepsStock },
    { path: 'our-product-stocks', component: OurProductStock },
    // { path: 'tablet-stocks', component: Tablet },
   
] as Routes;
