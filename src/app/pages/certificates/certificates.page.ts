import { ButtonComponent } from "@/components/button/button.component"
import { CertificateService } from "@/services/certificate.service"
import { tCertificate } from "@/types/certificate.type"
import { Component, WritableSignal, inject, signal } from "@angular/core"
import { Router } from "@angular/router"
import { NoCertificatesComponent } from "./_components/no-certificates/no-certificates.component"

@Component({
	selector: "app-certificates",
	imports: [NoCertificatesComponent, ButtonComponent],
	standalone: true,
	templateUrl: "./certificates.page.html",
	styleUrl: "./certificates.page.css",
})
export class CertificatesPage {
	certificateService = inject(CertificateService)
	certificates: WritableSignal<tCertificate[]> = signal(
		this.certificateService.getCertificates()
	)

	router = inject(Router)

	navigateCertificateById(id: string) {
		this.router.navigate(["certificate", id]).then()
	}
}
