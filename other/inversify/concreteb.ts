import { IDepB } from "./idepb";
import { injectable } from "inversify";

@injectable()
export class ConcreteB implements IDepB {
    doB(): void {
        console.log("Doing B");
    }
}