import container from './inversify.config';
import { IDepC } from './idepc';
import { TYPES } from './types';

let c = container.get<IDepC>(TYPES.IDepC);
c.doC();
