import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { AuthGuardService } from "./auth-guard.service";
import { CanDeactivateGuardService } from "./can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server-resolver.service";

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "users",
    component: UsersComponent,
    children: [
      {
        path: ":id/:name",
        component: UserComponent,
      },
    ],
  },
  {
    path: "servers",
    component: ServersComponent,
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: ":id",
        component: ServerComponent,
        resolve: { server: ServerResolver },
      },
      {
        path: ":id/edit",
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuardService],
      },
    ],
  },
  {
    path: "not-found",
    component: ErrorPageComponent,
    data: { message: "Page not found" },
  },
  // ** captura todos os caminhos que não temos em nossas rotas
  // essa rota deve ser sempre a última rota da aplicação
  // senão qualquer caminho mesmo existente irá redirecionar para o not-found
  {
    path: "**",
    redirectTo: "/not-found",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
