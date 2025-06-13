import { ButtonComponent } from "@/components/button/button.component"
import { eIcon } from "@/enums/icon.enum"
import { formatCurrentDate } from "@/helpers/format-current-date"
import { NgClass } from "@angular/common"
import { Component, WritableSignal, inject, signal } from "@angular/core"
import { ReactiveFormsModule } from "@angular/forms"
import { v4 as uuidV4 } from "uuid"
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

	protected readonly eIcon = eIcon

	activities: WritableSignal<string[]> = signal([])

	addActivity() {
		const newActivity = this.generateCertificateFormService.activities?.value
		if (!newActivity) return
		this.activities.update(currentValue => [...currentValue, newActivity])
		this.generateCertificateFormService.activities?.setValue(null)
	}

	removeActivity(index: number) {
		this.activities.update(currentValue =>
			currentValue.filter((_, i) => i !== index)
		)
	}

	onSubmit() {
		this.generateCertificateFormService.addCertificate({
			id: uuidV4(),
			name: this.generateCertificateFormService.name?.value,
			activities: this.activities(),
			issueDate: formatCurrentDate(),
		})

		this.activities.set([])
		this.form.reset()
	}
}
