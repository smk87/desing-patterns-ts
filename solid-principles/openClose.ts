/*
Open/Close - Open to extension (extends) and Closed to modification. You should not add stuff to completed classes.

Below we have the solutions.
*/

// Completed class
export class ErrorHandler {
	private messageBox: any;
	// private httpClient: any;

	constructor(messageBox) {
		this.messageBox = messageBox;
		// this.httpClient = httpClient; // Violation
	}

	wrapError(err, publicResponse, severity) {
		let error = {
			originalError: err,
			publicResponse,
			severity,
		};

		// this.httpClient.post('api/log', error); // Violation

		if (severity < 5) {
			this.handleWarning('Warning', publicResponse);
		} else {
			this.handleError('Critical Error', publicResponse);
		}
	}

	private handleWarning(header, content) {
		this.messageBox.show(header, content);
	}

	private handleError(header, content) {
		this.messageBox.show(header, content);
	}
}

export class ErrorLogger {
	private _endpoint: string = 'api/log';

	constructor(private _httpClient) {}

	logError(errorObject): Promise<any> {
		return this._httpClient.post(this._endpoint, errorObject);
	}
}

// New class
export class ErrorHandlerWithLogging extends ErrorHandler {
	private _logger: ErrorLogger;

	constructor(messageBox, logger: ErrorLogger) {
		super(messageBox);
		this._logger = logger;
	}

	// Overloading parent's method
	wrapError(err, publicResponse, severity) {
		return this._logger.logError(err).then(() => {
			super.wrapError(err, publicResponse, severity);
		});
	}
}
