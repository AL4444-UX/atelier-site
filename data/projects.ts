// data/projects.ts

export type ProjectImage = {
src: string; // ex: "/projects/ashtable/1.jpg"
alt: string;

// Largeur sur la page d’accueil (petit)
wHome?: number;

// Largeur sur la page projet (ruban hauteur 500px)
wProject?: number;

// (optionnel) compat: si tu avais déjà "w", ça peut servir de fallback
w?: number;
};

export type Project = {
slug: string; // doit matcher l'URL : /projects/SLUG
title: string;
description?: string;
images: ProjectImage[];

// (optionnel) si tu veux forcer une largeur totale de ruban
ribbonWidth?: number;
};

export const projects: Project[] = [
{
slug: "ashtable",
title: "Ashtable",
description:
"Écris ici ton texte d’explication. Tu peux faire plusieurs phrases.\n(Tu peux aussi mettre des sauts de ligne.)",
images: [
{ src: "/projects/ashtable/1.jpg", alt: "ashtable 1", wHome: 120, wProject: 500 },
{ src: "/projects/ashtable/2.jpg", alt: "ashtable 2", wHome: 120, wProject: 500 },
{ src: "/projects/ashtable/3.jpg", alt: "ashtable 3", wHome: 120, wProject: 500 },
],
},

{
slug: "module",
title: "Module",
description: "Texte du projet MODULE : matériaux, idée, dimensions, contexte, etc.",
images: [
{ src: "/projects/module/1.jpg", alt: "module 1", wHome: 150, wProject: 800 },
{ src: "/projects/module/2.jpg", alt: "module 2", wHome: 90, wProject: 490 },
{ src: "/projects/module/3.jpg", alt: "module 3", wHome: 120, wProject: 695 },
{ src: "/projects/module/4.jpg", alt: "module 4", wHome: 100, wProject: 540 },
{ src: "/projects/module/5.jpg", alt: "module 5", wHome: 130, wProject: 700},
{ src: "/projects/module/6.jpg", alt: "module 6", wHome: 120, wProject: 685 },
{ src: "/projects/module/7.jpg", alt: "module 7", wHome: 150, wProject: 810 },
],
},

{
slug: "slab",
title: "Slab",
description: "Texte du projet SLAB : matériaux, idée, dimensions, contexte, etc.",
images: [
{ src: "/projects/slab/1.jpg", alt: "slab 1", wHome: 170, wProject: 950 },
{ src: "/projects/slab/2.jpg", alt: "slab 2", wHome: 210, wProject: 1150},
{ src: "/projects/slab/3.jpg", alt: "slab 3", wHome: 130, wProject: 720 },
{ src: "/projects/slab/4.jpg", alt: "slab 4", wHome: 180, wProject: 950 },

],
},
];