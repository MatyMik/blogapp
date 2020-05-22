export const createFormData = (email, password, confirmPassword, page) => {
    if (page ==='login') {
        return {email, password}
    } else {
        return {
            email,
            password,
            confirmPassword
        }
    }
}