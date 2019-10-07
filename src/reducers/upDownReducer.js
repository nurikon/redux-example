export default (state={payload:'green', type:'initial'}, action)=>{
  console.log(action)
  if(action.payload){
    return action
  }
  return state
} 