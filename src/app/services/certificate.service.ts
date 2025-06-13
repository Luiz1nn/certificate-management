import { tCertificate } from "@/types/certificate.type"
import { Injectable } from "@angular/core"

@Injectable({
	providedIn: "root",
})
export class CertificateService {
	certificates: tCertificate[] = []
}
