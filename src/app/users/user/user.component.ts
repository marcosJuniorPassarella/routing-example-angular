import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // funciona apenas qunado acessamos esse componente pela primeira vez
    this.user = {
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"],
    };

    // funciona de forma assíncrona
    this.route.params.subscribe({
      next(params: Params) {
        this.user.id = params["id"];
        this.user.name = params["name"];
      },
    });
  }
}
