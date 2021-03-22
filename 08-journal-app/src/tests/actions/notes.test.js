/**
 * @jest-environment node
 */
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import {
    startNewNote,
    startLoadingNotes,
    startSaveNote,
} from '../../actions/notes';
import { db } from '../../firebase/firebaseConfig';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth: {
        uid: 'testing',
    },
    notes: {
        active: {
            id: '6zM2gRQ1DqzxnAVUAYQw',
            title: 'titulo',
            body: 'body',
        },
    },
};

let store = mockStore(initState);
global.scrollTo = jest.fn();

describe('Pruebas con las acciones de notes', () => {
    beforeEach(() => {
        store = mockStore(initState);
    });

    test('debe de crear una nueva nota de startNewNote', async () => {
        await store.dispatch(startNewNote());

        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number),
            },
        });

        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number),
            },
        });

        const docId = actions[0].payload.id;
        await db.doc(`/testing/journal/notes/${docId}`).delete();
    });

    test('debe cargar las notas startLoadingNotes', async () => {
        await store.dispatch(startLoadingNotes('testing'));
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array),
        });

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number),
        };
        expect(actions[0].payload[0]).toMatchObject(expected);
    });

    test('debe de actualizar la nota startSavedNote', async () => {
        const note = {
            id: '6zM2gRQ1DqzxnAVUAYQw',
            title: 'titulo',
            body: 'body',
        };

        await store.dispatch(startSaveNote(note));

        const actions = store.getActions();
        expect(actions[0].type).toBe(types.notesUpdated);

        const docRef = await db.doc(`/testing/journal/notes/${note.id}`).get();
        expect(docRef.data().title).toBe(note.title);
    });
});
