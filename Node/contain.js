	/**
	 * Checks if `b` is contained within `a`
	 * @param {Element} a - Potential container
	 * @param {Element} b - Potential contained
	 * @returns {boolean} True if `a` contains `b`, false otherwise.
	 */
	const contain = (a, b) =>
		b && a?.hasChildNodes?.() && (a === b || (a.contains?.(b) ?? b.compareDocumentPosition?.(a) & 16)); // Node.DOCUMENT_POSITION_CONTAINED_BY
