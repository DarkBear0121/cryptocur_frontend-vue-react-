import * as  Types from "../../types"
  const initialState = {
    wdTransactionsData : null
  }
    
const wdtransactions = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_OWNERWDTRANSACTIONSLIST:
        return {
        ...state,
        wdTransactionsData: action.data
        };
    default:
      return state
  }
}
export default wdtransactions
