import { tCertificate } from "@/pages/certificates/types/certificate.type"
import { Injectable } from "@angular/core"

@Injectable({
	providedIn: "root",
})
export class CertificateService {
	certificates: tCertificate[] = []
}
