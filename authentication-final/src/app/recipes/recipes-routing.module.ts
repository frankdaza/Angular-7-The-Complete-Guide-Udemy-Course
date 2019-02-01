import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuard } from '../auth/auth-guard.service';


const recipesRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }, 
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
  ] },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
