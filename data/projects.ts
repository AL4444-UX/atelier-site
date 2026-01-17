export type ProjectImage = {
src: string; // ex: "/projects/ashtable/1.jpg"
alt: string;
w?: number; // largeur en px (optionnel)
};

export type Project = {
slug: string; // doit matcher l'URL : /projects/SLUG
title: string; // affiché en gros
description?: string; // ton texte d'explication
images: ProjectImage[];
};

export const projects: Project[] = [
{
slug: "ashtable",
title: "ASHTABLE",
description:
"Écris ici ton texte d’explication. Tu peux faire plusieurs phrases. (Tu peux aussi mettre des sauts de ligne.)",
images: [
{ src: "/projects/ashtable/1.jpg", alt: "ashtable 1", w: 120 },
{ src: "/projects/ashtable/2.jpg", alt: "ashtable 2", w: 120 },
{ src: "/projects/ashtable/3.jpg", alt: "ashtable 3", w: 120 },
],
},
{
slug: "module",
title: "MODULE",
description:
"Texte du projet MODULE : matériaux, idée, dimensions, contexte, etc.",
images: [
{ src: "/projects/module/1.jpg", alt: "module 1", w: 120 },
{ src: "/projects/module/2.jpg", alt: "module 2", w: 120 },
],
},
{
slug: "slab",
title: "SLAB",
description:
"Texte du projet MODULE : matériaux, idée, dimensions, contexte, etc.",
images: [
{ src: "/projects/slab/1.jpg", alt: "module 1", w: 120 },
{ src: "/projects/slab/2.jpg", alt: "module 2", w: 120 },
{ src: "/projects/slab/3.jpg", alt: "module 3", w: 120 },
],
},
];