import { createStore } from "redux"
import { dataReducer } from "./Tokens/dataReducer"

const store = createStore(dataReducer)

export default store