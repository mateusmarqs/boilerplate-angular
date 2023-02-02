import { FormGroup } from "@angular/forms";

export function userNamePasswordEqualValidator(formGroup: FormGroup) {
    const username = formGroup.get('userName')?.value || ''
    const password = formGroup.get('password')?.value || ''

    if (username && password) {
        return username === password ? {userNamePasswordEqual: true} : null
    } else {
        return null
    }
}