import { Routes } from "@angular/router"
import { CertificatesPage } from "./pages/certificates/certificates.page"

export const routes: Routes = [
	{
		path: "",
		component: CertificatesPage,
	},
	{
		path: "generate-certificate",
		loadComponent: () =>
			import("./pages/generate-certificate/generate-certificate.page").then(
				m => m.GenerateCertificatePage
			),
	},
	{
		path: "certificate/:id",
		loadComponent: () =>
			import("./pages/certificate/certificate.page").then(
				m => m.CertificatePage
			),
	},
]
