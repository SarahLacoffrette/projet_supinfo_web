import { searchArtwork } from "../Components/Artwork/Artwork";

test('Search by fetch', () => {
    const result = searchArtwork("https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=10&q=mummy");
    expect(result).toBe('done');
})