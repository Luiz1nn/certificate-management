import { eIcon } from "@/enums/icon.enum"
import { Component, Input } from "@angular/core"

@Component({
	selector: "app-button",
	imports: [],
	templateUrl: "./button.component.html",
	styleUrl: "./button.component.css",
})
export class ButtonComponent {
	@Input({ required: false }) disabled = false
	@Input({ required: false }) type: "button" | "submit" = "button"
	@Input({ required: false }) icon!: eIcon
	@Input({ required: true }) label!: string
}
