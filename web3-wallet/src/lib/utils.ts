export enum ResultCode {
	Success = "SUCCESSFULLY_CREATED",
	UnKnownError = "UNKNOWN_ERROR",
}

export const constgetMessageFromCode = (resultCode: string) => {
	switch (resultCode) {
		case ResultCode.UnKnownError:
			return 'Something when wrong, please try again!'
		case ResultCode.Success:
			return 'Successfully created in!'
	}
}
