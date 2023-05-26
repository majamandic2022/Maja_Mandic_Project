import { Character, BuildType } from '../../../../shared/types';
import { PageableItems } from '../../../../shared/types/pageable-items.type';

const baseCharacterUrl = 'character';

const getCharacterUrl = (id: string) => `${baseCharacterUrl}/${id}`;

export const getCharacter = (build: BuildType) => {
  return build.query<PageableItems<Character>, unknown>({
    query: ({ query: { id } }: { query: { id: string } }) => ({
      url: getCharacterUrl(id),
      method: 'GET',
    }),
  });
};
