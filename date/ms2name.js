        const ms2name = ms => {
            const date = new Date(ms);
            const pad = (i, n) => n.toString().padStart(i, '0');
            return [
                'y',
                date.getFullYear(),
                'm',
                pad(2, 1 + date.getMonth()), // (months are zero-indexed)
                'd',
                pad(2, date.getDate()),
                'h',
                pad(2, date.getHours()),
                'm',
                pad(2, date.getMinutes()),
                's',
                pad(2, date.getSeconds()),
                'ms',
                pad(3, date.getMilliseconds())
            ].join('');
        };

        //[].forEach(ms => {console.log(ms, ms2name(ms));});
