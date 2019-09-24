function swap(a, b) {
    const c = b.nextElementSibling;
    a.replaceWith(b);
    b.parentNode.insertBefore(a, c);
}
