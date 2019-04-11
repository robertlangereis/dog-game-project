import { SET_PERFOMANCE, CALC_PERFORMANCE } from './types'

export const setPerfomarnce = () => {
  return {
    type: SET_PERFOMANCE,
    payload: 0
  }
}

export const calcPerformance = (points) => {
  return {
    type: CALC_PERFORMANCE,
    payload: points
  }
}