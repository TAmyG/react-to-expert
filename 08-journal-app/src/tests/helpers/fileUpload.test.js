import cloudinary from 'cloudinary';
import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({
    cloud_name: 'dtzhkqqms',
    api_key: '996735255786737',
    api_secret: 'x9SqiLP5O2-zBl5TD3s7bYO0SWE',
});

describe('Pruebas en fileUpload', () => {
    test('debe de cargar un archivo y retornar URL', async () => {
        const resp = await fetch(
            'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
        );
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        //Borrar imagen por ID
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.png', '');

        await cloudinary.v2.api.delete_resources(imageId);
    });

    test('debe retornar un error', async () => {
        const file = new File([], 'foto.png');
        const url = await fileUpload(file);

        expect(url).toBe(null);
    });
});
