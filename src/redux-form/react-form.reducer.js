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
    svChinhSua : null,
};

export const ReactFormReducer = (state = STATE_DEFAULT, action) => {
    switch (action.type) { 
        case ReactForm.DangKySV:{
            state.mangDanhSach = [...state.mangDanhSach, action.payload]
            return {...state}
        }
        case ReactForm.XoaSV:{
            state.mangDanhSach = state.mangDanhSach.filter(sv => sv.id !== action.payload.id);
            return {...state}
        }
        case ReactForm.ChinhSuaSV:{
            console.log(action.payload)
            state.svChinhSua = action.payload;
            return {...state};
        }
        case ReactForm.HoanThienChinhSua:{
            const indexFind = state.mangDanhSach.findIndex(i => i.id === action.payload.id);

            if(indexFind === -1){
                return {...state};
            }else{
                state.mangDanhSach[indexFind] = action.payload;
                state.mangDanhSach = [...state.mangDanhSach];
            }
            state.svChinhSua = null;
            return {...state}
        }
        default:
            return state; 
    }
};
