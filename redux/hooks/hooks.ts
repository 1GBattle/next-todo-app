import { useDispatch } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../store'
import { useSelector } from 'react-redux'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppState: TypedUseSelectorHook<RootState> = useSelector
