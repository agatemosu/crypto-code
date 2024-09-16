// @ts-check

/**
 * @param {number} length
 */
const generateSecureCode = (length) => {
	const byteLength = length / 2;

	const array = new Uint8Array(byteLength);
	crypto.getRandomValues(array);

	const hexString = Array.from(array, (byte) =>
		byte.toString(36).padStart(2, "0"),
	).join("");

	return hexString;
};

function main() {
	const $generateBtn = document.querySelector("#generateBtn");
	if (!($generateBtn instanceof HTMLButtonElement)) return;

	const $lengthInput = document.querySelector("#lengthInput");
	if (!($lengthInput instanceof HTMLInputElement)) return;

	const $codeOutput = document.querySelector("#codeOutput");
	if (!($codeOutput instanceof HTMLInputElement)) return;

	$generateBtn.addEventListener("click", () => {
		const length = Number.parseInt($lengthInput.value);

		const code = generateSecureCode(length);
		$codeOutput.value = code;
	});
}

main();
