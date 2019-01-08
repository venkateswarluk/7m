import * as t from 'tcomb';

export const MealTypeCreateRequest: t.Struct<{}> = t.struct({
  name: t.String,
  types: t.String,
  imageUrl: t.String,
  description: t.String,
  price: t.Number,
});

export interface MealtypeReq {
  readonly name: string;
  readonly types: string;
  readonly imageUrl: string;
  readonly description: string;
  readonly price: number;
}
