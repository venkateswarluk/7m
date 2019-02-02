import * as t from 'tcomb';

export const UserCreateRequest: t.Struct<{}> = t.struct({
  email: t.String,
  password: t.String,
  emailConfirmed: t.maybe(t.Boolean),
  roles: t.maybe(t.Array),
  role: t.String,
});

export interface UserRes {
  readonly id: any;
  readonly email: string;
  readonly password: string;
  readonly emailConfirmed: boolean;
  readonly role: string;
}
