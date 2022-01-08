/*
Interface Segregation - A class should not depend/implement on methods that it does not need to implement. Classes and Interfaces should be compact. Segregate = Split

How to recognize the issue:
1. You don't know how to implement an interface method
2. The interface method does not belong in the class
3. You are forced to leave the method empty
4. You are forced to throw generic exception (i.e method can not be used for this class)

Below we have the solutions.
*/

export interface ISmartDevice {
	openApp(path: string): void;
	connectToWifi(ssid: string, password: string): void;
	// Problem - Interface is to generic
	// call(contact: string): void;
	// sendSms(contact: string, content: string): void;
}

// Solved the problem by splitting into new interface
export interface IPhoneDevice {
	call(contact: string): void;
	sendSms(contact: string, content: string): void;
}

export class SmartPhone implements ISmartDevice, IPhoneDevice {
	call(contact: string): void {
		console.log(`Calling ${contact}`);
	}
	sendSms(contact: string, content: string): void {
		console.log(`Sending ${content} to ${contact}`);
	}
	openApp(path: string): void {
		console.log(`Opening app ${path}`);
	}
	connectToWifi(ssid: string, password: string): void {
		console.log(`Connecting to wifi ${ssid} with password ${password}`);
	}
}

export class Tablet implements ISmartDevice {
	// Problem - The interface methods does not belong in the class
	// call(contact: string): void {
	// 	throw new Error("This device can't call");
	// }
	// sendSms(contact: string, content: string): void {
	// 	console.log(`Sending ${content} to ${contact}`);
	// }
	openApp(path: string): void {
		console.log(`Opening app ${path}`);
	}
	connectToWifi(ssid: string, password: string): void {
		console.log(`Connecting to wifi ${ssid} with password ${password}`);
	}
}

let smartPhone = new SmartPhone();
smartPhone.call('John');
smartPhone.sendSms('John', 'Hey, how are you?');
smartPhone.openApp('Facebook');
smartPhone.connectToWifi('MyWorkWifi', 'MySuperStrongPassword');

let tablet = new Tablet();
// tablet.call("John");
// tablet.sendSms("Jake", "Hey!");
tablet.connectToWifi('MyWorkWifi-2', 'MySuperStrongPassword');
tablet.openApp('Gmail');
