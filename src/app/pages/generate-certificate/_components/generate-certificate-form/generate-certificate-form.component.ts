import { ButtonComponent } from "@/components/button/button.component"
import { eIcon } from "@/enums/icon.enum"
import { NgClass } from "@angular/common"
import { Component, inject } from "@angular/core"
import { ReactiveFormsModule } from "@angular/forms"
import { GenerateCertificateFormService } from "../../_services/generate-certificate-form.service"

@Component({
	selector: "app-generate-certificate-form",
	imports: [ButtonComponent, ReactiveFormsModule, NgClass],
	templateUrl: "./generate-certificate-form.component.html",
	styleUrl: "./generate-certificate-form.component.css",
})
export class GenerateCertificateFormComponent {
	generateCertificateFormService = inject(GenerateCertificateFormService)
	form = this.generateCertificateFormService.form

	plusIcon = eIcon.plus

	constructor() {
		console.log(this.generateCertificateFormService.name?.errors)
	}
	onSubmit() {
		console.log(this.form.value)
	}
}
