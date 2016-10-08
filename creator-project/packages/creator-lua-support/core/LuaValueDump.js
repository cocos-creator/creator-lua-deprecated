
/* jslint node: true, sub: true, esversion: 6 */

"use strict";

function _dumpkey(k) {
    if (typeof k === 'string') {
        return "\"" + k + "\"";
    } else {
        return k === null ? '' : k.toString();
    }
}

const QUOTE_MARK = new RegExp(/"/g);
const NEWLINE_MARK = new RegExp(/\n/g);

function _dumpvalue(v) {
    if (typeof v === 'string') {
        v = v.replace(QUOTE_MARK, "\\\"");
        v = v.replace(NEWLINE_MARK, "\\n");
        return "\"" + v + "\"";
    } else {
        return v === null ? 'nil' : v.toString();
    }
}

module.exports = class LuaValueDump {
    dump(value) {
        this._lookup = new Map();
        this._results = [];
        this._nextkeyValue = 0;
        this._dump(value, '', '', true);

        let last = this._results[this._results.length - 1];
        this._results[this._results.length - 1] = last.substring(0, last.length - 1);
        let results = this._results.join("\n");

        this._lookup = null;
        this._results = null;
        return results;
    }

    _nextkey() {
        this._nextkeyValue++;
        return this._nextkeyValue;
    }

    _dump(value, desciption, indent, first) {
        let key = (typeof value === 'object' && value !== null) ? value : this._nextkey();

        if (typeof value !== 'object' || value === null) {
            // simple value
            desciption = desciption !== null ? desciption : 'value';
            if (first) {
                this._results.push(indent + desciption + ' ' + _dumpvalue(value) + ',');
            } else {
                this._results.push(indent + '[' + _dumpkey(desciption) + '] = ' + _dumpvalue(value) + ',');
            }
        } else if (this._lookup.has(key)) {
            throw (new Error('FOUND NESTING VALUE, key: ' + desciption + ', value: ' + _dumpvalue(value)));
        } else {
            // dict or array
            this._lookup.set(key, true);
            if (first) {
                if (desciption) {
                    this._results.push(indent + desciption + ' {');
                } else {
                    this._results.push(indent + '{');
                }
            } else {
                this._results.push(indent + '[' + _dumpkey(desciption) + '] = {');
            }

            let indent2 = indent + '    ';

            if (Array.isArray(value)) {
                // array
                value.forEach((item, index) => {
                    // index + 1, because start index is 1
                    this._dump(item, index + 1, indent2, false /* not first */ );
                });
            } else {
                // dict
                let keys = Object.keys(value);
                keys.sort();
                keys.forEach((key) => {
                    this._dump(value[key], key, indent2, false /* not first */ );
                });
            }
            this._results.push(indent + '},');
        }
    }
};

