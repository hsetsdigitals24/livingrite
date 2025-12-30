import { type SchemaTypeDefinition } from 'sanity'
import {postType} from './post'
import {testimonialType} from './testimonials'
 

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, testimonialType],
}
