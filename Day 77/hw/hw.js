function obiekti(key, valus) {
    if (keys.length !== valus.length) {
        return {};
    }
    
    let result = {};
    
    for (let i = 0; i < key.length; i++) {
        result[key[i]] = valus[i];
    }
    
    return result;
}
