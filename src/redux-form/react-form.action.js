import { ReactForm } from "./react-form.const"
export const dangKySVCreator = (payload)=>{
    return{
        type: ReactForm.DangKySV,
        payload,
    }
}

export const xoaSVCreator = (payload)=>{
    return{
        type: ReactForm.XoaSV,
        payload,
    }
}

export const chinhSuaCreator = (payload)=>{
    return{
        type: ReactForm.ChinhSuaSV,
        payload,
    }
}