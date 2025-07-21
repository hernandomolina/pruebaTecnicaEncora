import { Page } from 'playwright';
import { UserData } from '../../support/dataGenerator';
import { FillField } from '../interactions/FillField';
import { ClickButton } from '../interactions/ClickButton';

export const Register = (user: UserData) => async (page: Page) => {
  await FillField('input[name="customer.firstName"]', user.firstName)(page);
  await FillField('input[name="customer.lastName"]', user.lastName)(page);
  await FillField('input[name="customer.address.street"]', user.address)(page);
  await FillField('input[name="customer.address.city"]', user.city)(page);
  await FillField('input[name="customer.address.state"]', user.state)(page);
  await FillField('input[name="customer.address.zipCode"]', user.zipCode)(page);
  await FillField('input[name="customer.phoneNumber"]', user.phone)(page);
  await FillField('input[name="customer.ssn"]', user.ssn)(page);
  await FillField('input[name="customer.username"]', user.username)(page);
  await FillField('input[name="customer.password"]', user.password)(page);
  await FillField('input[name="repeatedPassword"]', user.password)(page);
  await ClickButton('input[value="Register"]')(page);
}; 