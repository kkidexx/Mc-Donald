import * as Yup from "yup";

export const initialValues = () => {
    return{
        email: "",
        password: "",
        confirmPassword: "",
    };
};

export const validationSchema = () =>{
    return Yup.object({
        email: Yup.string()
        .email("Email invalido")
        .required("Email obligatoriooooooo"),
        password: Yup.string().required("Contraseña obligatorio"),
        confirmPassword: Yup.string()
        .required("Contraseña obligatorio")
        .oneOf([Yup.ref("password")], "Contraseñas no coiciden"),

    });
};