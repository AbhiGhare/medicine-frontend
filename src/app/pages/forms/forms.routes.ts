import { Routes } from "@angular/router";
import { InwardForm } from "./inward-form/inward-form";
import { OutwardForm } from "./outward-form/outward-form";
import { PatientForm } from "./patient-form/patient-form";


export default [
    {path:'',redirectTo:'inward-form',pathMatch:'full'},
    { path: 'inward-form', component: InwardForm },
    { path: 'outward-form', component: OutwardForm },
    { path: 'patient-form', component: PatientForm },
] as Routes;
