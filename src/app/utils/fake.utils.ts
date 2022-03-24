import { faker } from '@faker-js/faker';

export function getName(): string {
  return faker.name.findName();
}
