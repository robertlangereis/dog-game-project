import { RANDOM_IMAGE, RANDOM_BREEDS, RIGHT_ANSWER, WRONG_ANSWER } from './types'

export const randomImage = (image) => {
    return {
        type: RANDOM_IMAGE,
        payload: image
    }
}

export const randomBreeds = (breeds) => {
    return {
        type: RANDOM_BREEDS,
        payload: breeds
    }
}

export const rightAnswer = () => {
    return {
        type: RIGHT_ANSWER,
        payload: console.log('CORRECTO')
    }
}

export const wrongAnswer = () => {
    return {
        type: WRONG_ANSWER,
        payload: console.log('NOT CORRECTO')
    }
}