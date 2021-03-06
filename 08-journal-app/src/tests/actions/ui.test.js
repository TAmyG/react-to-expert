import {
    startLoading,
    finishLoading,
    removeError,
    setError,
} from '../../actions/ui';
import { types } from '../../types/types';

describe('Pruebas en ui-actions', () => {
    test('Todas las acciones debe de funcionar', () => {
        const action = setError('Help!!');
        const removeErrorAction = removeError();
        const startLoadingAction = startLoading();
        const finishLoadingAction = finishLoading();

        expect(action).toEqual({
            type: types.uiSetError,
            payload: 'Help!!',
        });
        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError,
        });
        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading,
        });
        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading,
        });
    });
});
