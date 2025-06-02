import { ButtonComponent } from "@/components/button/button.component"
import { Component } from "@angular/core"

@Component({
	selector: "app-no-certificates",
	imports: [ButtonComponent],
	standalone: true,
	templateUrl: "./no-certificates.component.html",
	styleUrl: "./no-certificates.component.css",
})
export class NoCertificatesComponent {}
