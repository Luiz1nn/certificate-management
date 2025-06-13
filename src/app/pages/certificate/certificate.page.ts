import { ButtonComponent } from "@/components/button/button.component"
import { eIcon } from "@/enums/icon.enum"
import { CertificateService } from "@/services/certificate.service"
import { tCertificate } from "@/types/certificate.type"
import { NgOptimizedImage } from "@angular/common"
import { Component, ElementRef, OnInit, ViewChild, inject } from "@angular/core"
import { ActivatedRoute, RouterLink } from "@angular/router"
import html2canvas from "html2canvas"

@Component({
	selector: "app-certificate",
	imports: [ButtonComponent, RouterLink, NgOptimizedImage],
	templateUrl: "./certificate.page.html",
	styleUrl: "./certificate.page.css",
})
export class CertificatePage implements OnInit {
	activatedRoute = inject(ActivatedRoute)
	certificateService = inject(CertificateService)
	certificate: tCertificate | undefined

	@ViewChild("certificateContainer") certificateContainerRef!: ElementRef

	protected readonly eIcon = eIcon

	ngOnInit() {
		this.getCertificate()
	}

	private getCertificate() {
		this.activatedRoute.paramMap.subscribe(params => {
			const id = params.get("id")
			this.certificate = this.certificateService
				.getCertificates()
				.find(item => item.id === id)
		})
	}

	downloadCertificate() {
		html2canvas(this.certificateContainerRef.nativeElement, { scale: 2 }).then(
			canvas => {
				const link = document.createElement("a")
				link.href = canvas.toDataURL("image/png")
				link.download =
					"certificate_" + this.certificate?.name.replaceAll(" ", "_") + ".png"
				link.click()
			}
		)
	}
}
