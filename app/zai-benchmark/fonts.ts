import localFont from 'next/font/local';

export const editorsNote = localFont({
    src: [
        {
            path: '../../public/editors-note-font-family/EditorsNote-Thin.otf',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../public/editors-note-font-family/EditorsNote-ThinItalic.otf',
            weight: '100',
            style: 'italic',
        },
        {
            path: '../../public/editors-note-font-family/EditorsNote-Extralight.otf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../public/editors-note-font-family/EditorsNote-ExtralightItalic.otf',
            weight: '200',
            style: 'italic',
        },
        {
            path: '../../public/editors-note-font-family/EditorsNote-Light.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/editors-note-font-family/EditorsNote-LightItalic.otf',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../../public/editors-note-font-family/EditorsNote-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/editors-note-font-family/EditorsNote-Italic.otf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../public/editors-note-font-family/EditorsNote-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/editors-note-font-family/EditorsNote-MediumItalic.otf',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../../public/editors-note-font-family/EditorsNote-Semibold.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/editors-note-font-family/EditorsNote-SemiboldItalic.otf',
            weight: '600',
            style: 'italic',
        },
        {
            path: '../../public/editors-note-font-family/EditorsNote-Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/editors-note-font-family/EditorsNote-BoldItalic.otf',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../../public/editors-note-font-family/EditorsNote-Hairline.otf',
            weight: '800', // Mapping hairline to 800 for usage if needed, or keeping as distinct
            style: 'normal',
        },
        {
            path: '../../public/editors-note-font-family/EditorsNote-HairlineItalic.otf',
            weight: '800',
            style: 'italic',
        },
    ],
    variable: '--font-editors-note',
});
