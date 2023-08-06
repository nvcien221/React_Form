import { ReactForm } from "./react-form.const"
export const dangKySVCreator = (payload)=>{
    return{
        type: ReactForm.DangKySV,
        payload,
    }
}