import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate.guard';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ] },  
  { path: 'servers', component: ServersComponent, children: [
    {
      path: '',
      canActivateChild: [AuthGuard],
      children: [
        { path: ':id', component: ServerComponent },
        { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
      ]
    }    
  ] },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: 'not-found' }
  
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, { useHash: true })
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 