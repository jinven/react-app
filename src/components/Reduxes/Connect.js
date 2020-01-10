import React from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../../reducers/todo'
import { 
  rafScheduler,
  timeoutScheduler,
  thunk,
  vanillaPromise,
  readyStatePromise,
  logger,
  crashReporter
} from '../../reducers/middlewares/todoMiddleware'

const store = createStore(rootReducer, 
  applyMiddleware(
    rafScheduler,
    timeoutScheduler,
    thunk,
    vanillaPromise,
    readyStatePromise,
    logger,
    crashReporter
  )
)

export default function Connect(props){
    return (
      <Provider store={store}>
        <div>
            <hr />
            <h1>Connect Test</h1>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
      </Provider>
    );
}
