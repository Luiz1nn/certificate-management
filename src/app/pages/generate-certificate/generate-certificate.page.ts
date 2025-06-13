import { Component } from "@angular/core"
import { GenerateCertificateFormComponent } from "./_components/generate-certificate-form/generate-certificate-form.component"

@Component({
	selector: "app-generate-certificate",
	imports: [GenerateCertificateFormComponent],
	templateUrl: "./generate-certificate.page.html",
	styleUrl: "./generate-certificate.page.css",
})
export class GenerateCertificatePage {}
