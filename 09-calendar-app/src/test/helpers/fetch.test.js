import { fetchConToken, fetchSinToken } from '../../helpers/fetch';

describe('Pruebas en el helper Fetch', () => {
    let token = '';

    test('fetchSinToken debe funcionar', async () => {
        const resp = await fetchSinToken(
            'auth',
            { email: 'tamy.vivas@gmail.com', password: '123456' },
            'POST'
        );

        expect(resp instanceof Response).toBe(true);

        const body = await resp.json();
        expect(body.ok).toBe(true);
        token = body.token;
    });

    test('fetchConToken debe funcionar', async () => {
        localStorage.setItem('token', token);
        const resp = await fetchConToken('events/123654xd', {}, 'DELETE');
        const body = await resp.json();

        expect(body.msg).toBe('Hable con el administrador');
    });
});
