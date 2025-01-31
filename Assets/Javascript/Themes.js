document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('Theme-Button');
    const bodyUrl = document.getElementById('image-url');
    let themeType = localStorage.getItem('themeType') ?? '0';

    const iconSequence = [
        './Assets/Images/Icons/Theme Set/F-1.png',
        './Assets/Images/Icons/Theme Set/F-2.png',
        './Assets/Images/Icons/Theme Set/F-3.png',
        './Assets/Images/Icons/Theme Set/F-4.png',
        './Assets/Images/Icons/Theme Set/F-5.png',
        './Assets/Images/Icons/Theme Set/F-6.png',
        './Assets/Images/Icons/Theme Set/F-7.png'
    ];

    const themes = {
        '0': [
            ['--container-color', 'rgba(0, 0, 0, 0.23)'],
            ['--music-player-color', 'rgba(66, 66, 66, 0.7)'],
            ['--tag-color', 'rgba(50, 50, 50, 0.7)'],
            ['--progress-unfilled', '#212121'],
            ['--progress-filled', '#FFF87C'],
            ['--progress-filled-hover', '#1DB954'],
            ['--theme-color', '#ffffff'],
            ['--landing-page', '#000000'],
            ['--song-color', '#b3b3b3'],
            ['icon', './Assets/Images/Icons/Theme Set/F-1.png'],
            ['image', './Assets/Misc/Background Dark.jpg']
        ],
        '1': [
            ['--container-color', 'rgba(0, 0, 0, 0.23)'],
            ['--music-player-color', 'rgba(220, 220, 220, 0.55)'],
            ['--tag-color', 'rgba(200, 200, 200, 0.7)'],
            ['--progress-unfilled', '#666666'],
            ['--progress-filled', '#D27D2D'],
            ['--progress-filled-hover', '#B87333'],
            ['--theme-color', '#000000'],
            ['--landing-page', '#FFF87C'],
            ['--song-color', '#666666'],
            ['icon', './Assets/Images/Icons/Theme Set/F-7.png'],
            ['image', './Assets/Misc/Background Light.jpg']
        ]
    };

    const applyTheme = () => {
        themes[themeType].forEach(([prop, value]) => {
            if (prop === 'icon') {
                themeBtn.src = value;
            } else if (prop === 'image') {
                bodyUrl.style.backgroundImage = `url('${value}')`;
            } else {
                document.documentElement.style.setProperty(prop, value);
            }
        });
    };

    const animateIcons = (start, end, callback) => {
        let frame = start;
        const interval = setInterval(() => {
            themeBtn.src = iconSequence[frame];
            frame = start < end ? frame + 1 : frame - 1;

            if (frame === end) {
                clearInterval(interval);
                callback();
            }
        }, 12);
    };

    themeBtn.addEventListener('click', () => {
        const previousThemeType = themeType;
        themeType = themeType === '0' ? '1' : '0';
        localStorage.setItem('themeType', themeType);

        if (previousThemeType !== themeType) {
            const start = previousThemeType === '0' ? 1 : 6;
            const end = previousThemeType === '0' ? 6 : 0;
            animateIcons(start, end, applyTheme);
        }
    });

    applyTheme();
});
