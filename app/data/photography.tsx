export interface PhotographyProps {
    alt: string;
    src: string;
}

export const photographyData: PhotographyProps[] = [];

const notAvailable: number[] = [1, 13, 6, 34, 35, 19, 21, 22, 23, 28];

for (let i = 1; i <= 57; i++) {
    if (notAvailable.includes(i)) continue;
    photographyData.push({
        alt: `Photo ${i}`,
        src: `/instagram/${i}.jpg`,
    });
}
