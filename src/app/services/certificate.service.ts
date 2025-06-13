import { tCertificate } from "@/types/certificate.type"
import { Injectable } from "@angular/core"

@Injectable({
	providedIn: "root",
})
export class CertificateService {
	getCertificates(): tCertificate[] {
		return JSON.parse(localStorage.getItem("certificates") ?? "[]")
	}
}
