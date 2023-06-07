import {render, RenderOptions} from '@testing-library/react'
import AppProvider from './providers/App.provider'



const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AppProvider, ...options})

export * from '@testing-library/react'
export {customRender as render}