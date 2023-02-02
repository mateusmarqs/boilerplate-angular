import { AbstractControl } from "@angular/forms";

export function lowerCaseValidator(control: AbstractControl) {
    const value: string = control.value

    if (value !== value.toLowerCase()) {
        return { lowerCase: true }
    } else {
        return null
    }
}