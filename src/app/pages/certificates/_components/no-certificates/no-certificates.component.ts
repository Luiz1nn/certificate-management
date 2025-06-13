import { ButtonComponent } from "@/components/button/button.component"
import { Component } from "@angular/core"
import { RouterLink } from "@angular/router"

@Component({
	selector: "app-no-certificates",
	imports: [ButtonComponent, RouterLink],
	standalone: true,
	templateUrl: "./no-certificates.component.html",
	styleUrl: "./no-certificates.component.css",
})
export class NoCertificatesComponent {}
