window.Services = {
    prefs: {
        getBoolPref: (prefId) => prefId === 'user.changed.preference' || prefId === 'browser.aboutConfig.showWarning',
        getStringPref: (prefId) => prefId === 'user.added.preference' ? "im the user lol" : "testing",
        getIntPref: (prefId) => 5,
        getDefaultBranch: () => {
            // default preferences
            return {
                getBoolPref: (prefId) => prefId === 'browser.aboutConfig.showWarning',
                getStringPref: (prefId) => false,
                getIntPref: (pref) => 5,
                getPrefType: (prefId) => {
                    return {
                        'user.changed.preference': 'boolean',
                        'system.set.preference': 'boolean',
                        'browser.secrets.text': 'string',
                        'browser.secrets.number': 'string',
                        'browser.aboutConfig.showWarning': 'boolean'
                    }[prefId];
                },
                getChildList: () => ['user.changed.preference','system.set.preference','browser.secrets.text','browser.secrets.number','browser.aboutConfig.showWarning']
            };
        },
        setBoolPref: (prefId, value) => void(0),
        setStringPref: (prefId, value) => void(0),
        setIntPref: (prefId, value) => void(0),
        getPrefType: (prefId) => {
            return {
                'user.changed.preference': 'boolean',
                'system.set.preference': 'boolean',
                'browser.secrets.text': 'string',
                'browser.secrets.number': 'string',
                'browser.aboutConfig.showWarning': 'boolean',
                'user.added.preference': 'string'
            }[prefId];
        },
        getComplexValue: () => null, // this is unused
        prefIsLocked: () => null,
        prefHasUserValue: (prefId) => ['user.changed.preference','user.aded.preference'].includes(prefId),
        getChildList: () => ['user.changed.preference','system.set.preference','browser.secrets.text','browser.secrets.number','browser.aboutConfig.showWarning','user.added.preference']
    }
}
