export interface PhotographyProps {
    alt: string;
    src: string;
}

export const photographyData: PhotographyProps[] = [];

const notAvailable: number[] = [1, 13, 21, 22, 23, 28, 50];

for (let i = 1; i <= 50; i++) {
    if (notAvailable.includes(i)) continue;
    photographyData.push({
        alt: `Photo ${i}`,
        src: `/instagram/${i}.jpg`,
    });
}
