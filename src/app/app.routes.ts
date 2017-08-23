import { NgModule } from '@angular/core';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'test',
        component: TestComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
]


@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }