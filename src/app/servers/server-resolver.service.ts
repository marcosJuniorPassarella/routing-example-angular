import { Observable } from "rxjs";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Injectable } from "@angular/core";
import { ServersService } from "./servers.service";

// os resolvers servem para buscar dados antes de uma rota ser carregada

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable({ providedIn: "root" })
export class ServerResolver implements Resolve<Server> {
  constructor(private serversService: ServersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Server> | Promise<Server> | Server {
    return this.serversService.getServer(+route.params["id"]);
  }
}
