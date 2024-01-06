const isBeforeInDOM = (a, b) => {
    return (
        a !== b && (a === b.previousSibling || a.compareDocumentPosition(b) & 4) // Node.DOCUMENT_POSITION_FOLLOWING
    );
};
