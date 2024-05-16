import {Provider} from 'react-redux'
import { store } from '../../redux/store/store'

export const ReduxProvader = ({children}:{children:React.ReactNode}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
