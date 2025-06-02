import { Component } from "@angular/core"

import { NoCertificatesComponent } from "./_components/no-certificates/no-certificates.component"

@Component({
	selector: "app-certificates",
	imports: [NoCertificatesComponent],
	standalone: true,
	templateUrl: "./certificates.page.html",
	styleUrl: "./certificates.page.css",
})
export class CertificatesPage {}
