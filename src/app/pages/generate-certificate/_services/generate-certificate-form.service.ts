import { formatCurrentDate } from "@/helpers/format-current-date"
import { Injectable, inject } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"

@Injectable({
	providedIn: "root",
})
export class GenerateCertificateFormService {
	formBuilder = inject(FormBuilder)
	form: FormGroup = this.createForm()

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

	private createForm() {
		return this.formBuilder.group({
			name: [null, [Validators.required, Validators.minLength(3)]],
			activities: [null, [Validators.required, Validators.minLength(3)]],
			issueDate: [formatCurrentDate(), [Validators.required]],
		})
	}
}
