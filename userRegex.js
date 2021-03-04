export function userValidation(user) {
    return /^[a-z]{2,}\d*$/i.test(user)
}