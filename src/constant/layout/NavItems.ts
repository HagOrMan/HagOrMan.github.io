const nav_items = [
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'Projects',
        dropdownItems: [
                { title: 'All Projects', link: '/projects', description: '' },
                { title: 'Island Builder', link: '/island-builder', description: 'Create islands with different biomes and connected cities!'  },
                { title: 'MediSafe', link: '/medisafe', description: 'Never take conflicting prescriptions again with Medisafe!'  },
                { title: 'MonPoke', link: '/monpoke', description: 'Catch your favourite MonPokes using python and pygame'  },
                { title: 'Piraten Kapern', link: '/piraten-kapern', description: 'A fun implementation of a game with the same name using Java'  },
                ],
    },
    {
        title: 'Experience',
        link: '/experience',
    },
    {
        title: 'About Me',
        link: '/about-me',
    },
    {
        title: 'Resume',
        link: '/resume'
    },
    {
        title: 'Contact',
        link: '/contact',
        description: ''
    },
]

export default nav_items