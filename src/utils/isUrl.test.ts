import { isUrl } from './isUrl';

describe('isUrl', () => {
  it('should return true for valid URLs', () => {
    const validUrls = [
      'https://example.com',
      'https://www.example.com/page?query=param',
    ];

    validUrls.forEach((url) => {
      expect(isUrl(url)).toBeTruthy();
    });
  });

  it('should return false for invalid URLs', () => {
    const invalidUrls = [
      'www.example.com',
      'example.com',
      'http:/example.com',
      'http://example .com',
      'http://examplé.com',
      'http://example.com/path?query=with spaces',
      'http://example.com/#fragment with space',
    ];

    invalidUrls.forEach((url) => {
      expect(isUrl(url)).toBeFalsy();
    });
  });
});
