// prettier-ignore
class AbortableCache {
	#fetch;
	#cache;
	constructor(fn) {
		this.#fetch = fn;
		this.#cache = new Map();
	}
	get(key) {
		const m = this.#cache;
		if (m.has(key)) {
			return m.get(key).promise;
		}
		const c = new AbortController();
		const p = this.#fetch(key, c.signal);
		m.set(key, {
			promise: p,
			controller: c
		});
		return p;
	}
	clear() {
		const m = this.#cache;
		for (const o of m.values()) {
			o.controller.abort();
		}
		m.clear();
	}
	/*
	abort(key) {
			const m = this.#cache;
			if (key) {
					const o = m.get(key);
					o && (
							o.controller.abort(),
							m.delete(key)
					);
			} else {
					this.clear();
			}
	}
	delete(key) {
			const m = this.#cache;
			m.get(key)?.controller.abort();
			return m.delete(key);
	}
	has(key) {
			return this.#cache.has(key);
	}
	get size() {
			return this.#cache.size;
	}
	*/
}
