(() => {
    window.ChromeUtils = {
        importESModule: function (NAMAE) {
            const LIST = {
                'resource://gre/modules/Preferences.sys.mjs': (() => {
                    return {Preferences: {
                        get: (z) => {
                            try {
                                let type = Services.prefs.getPrefType(z);
                                if(type === 'boolean') type = 'bool';
                                if(type === 'number') type = 'int';
                                return Services.prefs[`get${type[0].toUpperCase()+type.slice(1)}Pref`](z);
                            } catch (error) {
                                return null
                            }
                        },
                        set: (z, k) => {
                            if(typeof k === 'string') {
                                Services.prefs.setStringPref(z, k);
                            } else if(typeof k === 'number') {
                                Services.prefs.setIntPref(z, k);
                            } else if(typeof k === 'boolean') {
                                Services.prefs.setBoolPref(z, k);
                            }
                        }
                    }};
                })(),
                'resource://gre/modules/DeferredTask.sys.mjs': (() => {
                    let df = function DeferredTask(callback, interval0, interval1) {
                        this.d = {
                            cb: callback,
                            i0: interval0,
                            i1: interval1
                        };
                        this.__armed__ = false;
                        // placeholder?
                        setInterval(() => { if(this.__armed__) callback(); }, 100);
                    };
                    df.prototype.arm = function () {
                        this.__armed__ = true;
                    };
                    df.prototype.disarm = function () {
                        this.__armed__ = false;
                    };
                    return { DeferredTask: df };
                })()
            };
            if(LIST[NAMAE]) return LIST[NAMAE];
            return null;
        },
    };
})();
