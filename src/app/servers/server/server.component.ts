import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import { ActivatedRoute, Router, Data } from "@angular/router";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe({
      next: (data: Data) => {
        this.server = data["server"];
      },
    });
    // com o operador + transformamos o valor em number
    // const id = +this.route.snapshot.params["id"];
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe({
    //   next: (params: Params) => {
    //     this.server = this.serversService.getServer(+params["id"]);
    //   },
    // });
  }

  onEdit(): void {
    this.router.navigate(["edit"], {
      relativeTo: this.route,
      queryParamsHandling: "preserve",
    });
  }
}
