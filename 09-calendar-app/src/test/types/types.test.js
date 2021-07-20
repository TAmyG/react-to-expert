const { types } = require('../../types/types');

describe('Pruebas en Types', () => {
    test('Lost types deben ser iguales', () => {
        expect(types).toEqual({
            uiOpenModal: '[ui] Open Modal',
            uiCloseModal: '[ui] Close Modal',

            eventSetActive: '[event] Set Active',
            eventStartAddNew: '[event] Start add new',
            eventAddNew: '[event] Add New',
            eventClearActiveEvent: '[event] Clear Active Event',
            eventUpdated: '[event] Event Updated',
            eventDeleted: '[event] Event Deleted',
            eventLoaded: '[event] Events loaded',
            eventLogout: '[event] Events logout',

            authCheckingFinish: '[auth] Finish checking login state',
            authStartLogin: '[auth] Start login',
            authStartRegister: '[auth] Start register',
            authStartTokenRenew: '[auth] Start token renew',
            authLogout: '[auth] Logout',
        });
    });
});
