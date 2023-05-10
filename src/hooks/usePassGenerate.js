const characters =
	'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%'

export const passGenerate = (length = 15) => {
	let result = ''

	for (let i = 0; i <= length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length))
	}

	return result
}
