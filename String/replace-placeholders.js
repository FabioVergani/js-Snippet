const replacePlaceholders = (s, values = null) => {
    if (s?.length) {
        const e = globalThis;
            if (values) {
               const RE = e.RegExp, p = ['\\{', '\\}'];
                let replaced = s;
                for (const [key, value] of e.Object.entries(values)) {
                    replaced = replaced.replace(
                        new RE(p.join(key), 'gm'),
                        value
                    );
                }
                return replaced;
            }
            return s;

    }
    return '';
};

console.log(
  replacePlaceholders('Hello {name}, how are you doing? I am doing {mood}.',{name: 'Mike', mood: 'fine'})
)
