import { RANDOM_IMAGE, RANDOM_BREEDS } from './types'

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