export const validator = (title = null, imageUrl= null, file = null, content = null) =>{
    return !!(title && (imageUrl || file) && content)
}

export const createFormData = (formData) => {
    const formDataReturn = new FormData();
    
    for (const key in formData) {
        formDataReturn.append(key,formData[key]);
    }
    console.log(formDataReturn);
    return formDataReturn
}