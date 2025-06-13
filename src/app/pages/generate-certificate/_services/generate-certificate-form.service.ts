import { tCertificate } from "@/types/certificate.type"
import { Injectable, inject } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"

@Injectable({
	providedIn: "root",
})
export class GenerateCertificateFormService {
	formBuilder = inject(FormBuilder)
	form: FormGroup = this.createForm()

	private createForm() {
		return this.formBuilder.group({
			name: [null, [Validators.required, Validators.minLength(3)]],
			activities: [null, [Validators.required, Validators.minLength(3)]],
			issueDate: null,
		})
	}

	get name() {
		return this.form.get("name")
	}
	get activities() {
		return this.form.get("activities")
	}

	get isNameInvalid(): boolean {
		return (
			(this.form.get("name")?.invalid && this.form.get("name")?.touched) ?? true
		)
	}

	get isActivitiesInvalid(): boolean {
		return (
			(this.form.get("activities")?.invalid &&
				this.form.get("activities")?.touched) ??
			true
		)
	}

	addCertificate(certificate: tCertificate) {
		const certificates = JSON.parse(
			localStorage.getItem("certificates") ?? "[]"
		)
		certificates.unshift({ ...certificate })
		localStorage.setItem("certificates", JSON.stringify(certificates))
	}
}
