import 'reflect-metadata';
import { Container } from 'inversify';
import { IDepA } from './idepa';
import { TYPES } from './types';
import { ConcreteA } from './concretea';
import { IDepB } from './idepb';
import { ConcreteB } from './concreteb';
import { IDepC } from './idepc';
import { ConcreteC } from './concretec';

let container = new Container({
    defaultScope: "Singleton"
});
// IDepA wll be singleton
container.bind<IDepA>(TYPES.IDepA).to(ConcreteA).inSingletonScope();

// IDepB will be transient. We will get a new instance every time we request one
container.bind<IDepB>(TYPES.IDepB).to(ConcreteB).inTransientScope();

// IDepC will have request scope. It will return the same instance until we call container.unbind
container.bind<IDepC>(TYPES.IDepC).to(ConcreteC).inRequestScope();

export default container;