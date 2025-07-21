import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

export interface UserData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  ssn: string;
  username: string;
  password: string;
}

export function generateUserData(): UserData {
  const password = faker.internet.password({ length: 12, memorable: true });
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    phone: faker.phone.number({ style: "national" }),
    ssn: faker.string.numeric(9),
    username: `Nando_encora_${Math.floor(Math.random() * 1000)}`,
    password,
  };
} 