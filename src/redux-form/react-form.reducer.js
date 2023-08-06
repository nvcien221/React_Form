import { ReactForm } from "./react-form.const"
const STATE_DEFAULT = {
    mangDanhSach: [
        {
            id: "1",
            name: "Nguyễn Văn Kiên",
            phone: "0982672448",
            email: "nguyenvankien22012002@gmail.com",
        }
    ],
};

export const ReactFormReducer = (state = STATE_DEFAULT, action) => {
    switch (action.type) { 
        case ReactForm.DangKySV:{
            state.mangDanhSach = [...state.mangDanhSach, action.payload]
            return {...state}
        }
        default:
            return state; 
    }
};
