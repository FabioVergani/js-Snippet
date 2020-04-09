const utcDiff = (a, b) => {
    const c = a > b;
    return [c, Math.floor((c ? a - b : b - a) / 864e5)]; // 864e5 → 86400000 → 1000 * 60 * 60 * 24;
};

const msToTime = (milliseconds) => {
    let t = milliseconds / 36e5; // 3600000  → 1000*60*60
    const hours = Math.floor(t);
    t = (t - hours) * 60;
    const minutes = Math.floor(t);
    t = (t - minutes) * 60;
    const seconds = Math.floor(t);
    t = '00';
    return [
        hours > 0 ? (hours < 10 ? '0' + hours : hours) : t,
        minutes > 0 ? (minutes < 10 ? '0' + minutes : minutes) : t,
        seconds > 0 ? (seconds < 10 ? '0' + seconds : seconds) : t
    ].join(':');
};
