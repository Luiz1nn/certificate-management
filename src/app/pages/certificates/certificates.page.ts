import { Component, OnInit, inject } from "@angular/core"

import { tCertificate } from "@/pages/certificates/types/certificate.type"
import { CertificateService } from "@/services/certificate.service"
import { NoCertificatesComponent } from "./_components/no-certificates/no-certificates.component"

@Component({
	selector: "app-certificates",
	imports: [NoCertificatesComponent],
	standalone: true,
	templateUrl: "./certificates.page.html",
	styleUrl: "./certificates.page.css",
})
export class CertificatesPage implements OnInit {
	certificateService = inject(CertificateService)
	certificates: tCertificate[] = []

	ngOnInit(): void {
		this.certificates = this.certificateService.certificates
	}
}
