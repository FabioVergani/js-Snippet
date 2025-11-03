class LRUCache {
	constructor(maxSize) {
		this.cache = new Map();
		this.maxSize = maxSize ?? 1e3;
	}
	get(key) {
		const m = this.cache;
		if (m.has(key)) {
			const value = m.get(key);
			m.delete(key);
			m.set(key, value);
			return value;
		}
	}
	set(key, value) {
		const m = this.cache;
		if (m.has(key)) {
			m.delete(key);
		} else if (m.size >= this.maxSize) {
			const firstKey = m.keys().next().value;
			m.delete(firstKey);
		}
		m.set(key, value);
	}
}
