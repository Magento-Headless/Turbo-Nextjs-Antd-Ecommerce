import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class StoreConfig {
  @Field({ nullable: true, description: 'Website footer copyright' })
  copyright: string

  @Field({ nullable: true })
  locale: string

  @Field({ nullable: true })
  timezone: string
}
