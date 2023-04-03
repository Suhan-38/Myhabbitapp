import { createSlice } from "@reduxjs/toolkit";
import { consistency } from "../Componenthome/consistency";
//here we create a slice inside the redux store using create store
const habitslice=createSlice({
    name:"habit",
    initialState: {
        habit:[{title: "Walking",description: "Every morning i will first go for morning walk",consistency},
        {title: "Swimming",description: "After everyday walk i will go for swimming",consistency},
        {title: "painting",description: "painting is must to relax your mind",consistency}]
    },
    reducers:{
        addhabit: (state, action) => {
            return { habit: [...state.habit, action.payload] }
          },
          //here we update state consistency array here action have a particular day and the particular hobby in which u have to change statusand
          //using map function we reach there and changethe status
          updateconsistency: (state, action) => {
            return {
              habit: state.habit.map((element, i) => {
                if (action.payload.elementno === i) {
                  return {
                    ...element,
                    consistency: element.consistency.map((innerelement, j) => {
                      if (action.payload.particularday === j) {
                        return { ...innerelement, status: action.payload.changestusvalue}
                      }
                      return innerelement;
                    })
                  }
                }
                return element
              })
              }
              
          }

          
    }
})
//redux toolkit automatically creates action and reducer
export default habitslice.reducer;
export const {addhabit,updateconsistency}=habitslice.actions;