import { TransformFactory } from '../types.js'
import { setMetadata } from '../lib/metadata.js'
import { getBackground } from './background.js'

export interface FlattenOptions {
  flatten: '' | 'true'
}

export const flatten: TransformFactory<FlattenOptions> = (config) => {
  if (config.flatten !== '' && config.flatten !== 'true') return

  return function flattenTransform(image) {
    setMetadata(image, 'flatten', true)

    return image.flatten({
      background: getBackground(config, image)
    })
  }
}
